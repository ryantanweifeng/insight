from io import StringIO
from django.shortcuts import render
import csv
import warnings
import itertools
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pylab import rcParams

warnings.filterwarnings("ignore")
plt.style.use('fivethirtyeight')
import pandas as pd
import statsmodels.api as sm
import matplotlib

from django.http import JsonResponse, HttpResponse
matplotlib.rcParams['axes.labelsize'] = 14
matplotlib.rcParams['xtick.labelsize'] = 12
matplotlib.rcParams['ytick.labelsize'] = 12
matplotlib.rcParams['text.color'] = 'k'

# Create your views here.
import base64


@api_view(['POST'])
def posting(request):
    # df_sales = pd.read_csv("rest/Salesforecast.csv")
    # print(df_sales)
    df_sales = pd.read_csv(StringIO(request.data['csv']),sep=",")

    #To save the input values as csv file
    df_store = df_sales
    df_tr = df_sales
    df_profit = df_sales
    df_warehouseManger = df_sales

    #sales
    df_sales = df_sales.groupby('date').sales.sum().reset_index()
    

    df_sales.columns = ['Date', 'Sales']
    df_sales['Date'] = pd.to_datetime(df_sales['Date'])
    sales = df_sales
    # sales.head()

    sales = sales.set_index('Date')
    y = sales['Sales'].resample('MS').mean()
    y.plot(figsize=(15, 6))
    #plt.show()

    plt.savefig('backend/static/images/analysis.png')

    plt.clf()
    from pylab import rcParams
    rcParams['figure.figsize'] = 18, 8

    decompositionSales = sm.tsa.seasonal_decompose(y, model='additive')
    #fig = decompositionSales.plot()

    #plt.savefig('backend/static/images/analysis_advance.png')
    #plt.clf()

    #print(decompositionSales.trend)
    #print(decompositionSales.seasonal)
    #print(decomposition.resid)

    decomSalestrend = decompositionSales.trend
    decomSalesSeasonal = decompositionSales.seasonal
    decomSalesRes = decompositionSales.resid

    decomSalestrend.to_csv("salesTrendDec.csv" , header=["trend"])
    decomSalesSeasonal.to_csv("salesSeasonalDec.csv" , header=["seasonal"])
    decomSalesRes.to_csv("salesResDec.csv" , header=["residul"])


    p = d = q = range(0, 2)
    pdq = list(itertools.product(p, d, q))
    seasonal_pdq = [(x[0], x[1], x[2], 12) for x in list(itertools.product(p, d, q))]

    for param in pdq:
        for param_seasonal in seasonal_pdq:
            try:
                mod = sm.tsa.statespace.SARIMAX(y,
                                                order=param,
                                                seasonal_order=param_seasonal,
                                                enforce_stationarity=False,
                                                enforce_invertibility=False)

                results = mod.fit()

                # print('ARIMA{}x{}12 - AIC:{}'.format(param, param_seasonal, results.aic))
            except:
                continue

    mod = sm.tsa.statespace.SARIMAX(y,
                                    order=(1, 1, 1),
                                    seasonal_order=(1, 1, 0, 12),
                                    enforce_stationarity=False,
                                    enforce_invertibility=False)

    results = mod.fit()

    print(results.summary().tables[1])
    results.plot_diagnostics(figsize=(16, 14))

    plt.savefig('backend/static/images/analysis_deep.png')
    plt.clf()

    #pred = results.get_prediction(start=pd.to_datetime('2019-01-01'), dynamic=False)
    #pred_ci = pred.conf_int()

    #ax = y['2017':].plot(label='observed')
    #pred.predicted_mean.plot(ax=ax, label='One-step ahead Forecast', alpha=.7, figsize=(14, 7))

    #ax.fill_between(pred_ci.index,
                    #pred_ci.iloc[:, 0],
                    #pred_ci.iloc[:, 1], color='k', alpha=.2)

    #ax.set_xlabel('Date')
    #ax.set_ylabel('Sales')
    #plt.legend()

    #plt.savefig('backend/static/images/analysis_validation.png')
    #plt.clf()
    #y_forecasted = pred.predicted_mean
    #y_truth = y['2019-01-01':]

    # Compute the mean square error
    #mse = ((y_forecasted - y_truth) ** 2).mean()
    #print('The Mean Squared Error of our forecasts is {}'.format(round(mse, 2)))

    #Forcasting
    pred_uc = results.get_forecast(steps=24)
    #pred_ci = pred_uc.conf_int()

    ax = y.plot(label='Actual Sales Values', figsize=(14, 7))
    pred_uc.predicted_mean.plot(ax=ax, label='Forecasted Sales Values')
    #ax.fill_between(pred_ci.index,
                    #pred_ci.iloc[:, 0],
                    #pred_ci.iloc[:, 1], color='k', alpha=.25)
    #ax.set_xlabel('Date')
    #ax.set_ylabel('Sales')
    #plt.ticklabel_format(axis="x", style="plain")

    #plt.legend()
    #plt.savefig('backend/static/images/final_predictions.png')
    #plt.clf()

    #Saving predicted values
    forecast = pred_uc.predicted_mean
    forecast.index.name = 'Date'
    forecast.to_csv("prediction.csv", header=["Prediction"])
    

    #saving sales data to csv
    sales.to_csv("sales.csv")

    #Profit Model--------------------------------------------------------

    #groupby date and sum the profit
    df_profit = df_profit.groupby('date').profit.sum().reset_index()
    #df_profit.head(10)
    df_profit.columns = ['Date', 'Profit']
    df_profit['Date'] = pd.to_datetime(df_profit['Date'])
    profit = df_profit

    profit = profit.set_index('Date')
    y = profit['Profit'].resample('MS').mean()
    y.plot(figsize=(16, 6))
    plt.savefig('backend/static/images/profit.png') 
    plt.clf()  

    from pylab import rcParams
    rcParams['figure.figsize'] = 20, 10
    decompositionProfit = sm.tsa.seasonal_decompose(y, model='additive')
    #fig = decompositionProfit.plot()
    #plt.show()

    decomProfittrend = decompositionProfit.trend
    decomProfitSeasonal = decompositionProfit.seasonal
    decomProfitRes = decompositionProfit.resid

    decomProfittrend.to_csv("profitTrendDec.csv" , header=["trend"])
    decomProfitSeasonal.to_csv("profitSeasonalDec.csv" , header=["seasonal"])
    decomProfitRes.to_csv("profitResDec.csv" , header=["residul"])

    #three parameters account for seasonality, trend, and noise in data
    s = t = n = range(0, 2)
    stn = list(itertools.product(s, t, n))
    seasonal_stn = [(x[0], x[1], x[2], 12) for x in list(itertools.product(s, t, n))]  

    for param in stn:
        for param_seasonal in seasonal_stn:
            try:
                modProf = sm.tsa.statespace.SARIMAX(y,
                                                    order=param,
                                                    seasonal_order=param_seasonal,
                                                    enforce_stationarity=False,
                                                    enforce_invertibility=False)
                resultsProf = modProf.fit()
           # print('ARIMA{}x{}12 - AIC:{}'.format(param,param_seasonal,results.aic))
            except: 
                continue 
    
    modProf = sm.tsa.statespace.SARIMAX(y,
                                order=(1, 1, 0),
                                seasonal_order=(1, 1, 0, 12),
                                enforce_stationarity=False,
                                enforce_invertibility=False)
    resultsProf = modProf.fit()
    print(results.summary().tables[1])
    
    #To compare the true values of the forcasted value

    predProf = resultsProf.get_prediction(start=pd.to_datetime('2019-01-01'), dynamic=False)
    pred_ciProf = predProf.conf_int()
    axProf = y['2017':].plot(label='observed')
    predProf.predicted_mean.plot(ax=axProf, label='One-step ahead Forecast', alpha=.7, figsize=(14, 4))
    axProf.fill_between(pred_ciProf.index,
                pred_ciProf.iloc[:, 0],
                pred_ciProf.iloc[:, 1], color='k', alpha=.2)
    axProf.set_xlabel('Date')
    axProf.set_ylabel('Profit')
    plt.legend()
    plt.savefig('backend/static/images/profit_validation.png')
    plt.clf()

    y_forecastedProf = predProf.predicted_mean
    y_truthProf = y['2019-01-01':]
    mseProf = ((y_forecastedProf - y_truthProf) ** 2).mean()
    #print('The Mean Squared Error is {}'.format(round(mseProf, 2)))
    #print('The Root Mean Squared Error is {}'.format(round(np.sqrt(mse), 2)))

    #forcating

    pred_ucProf = resultsProf.get_forecast(steps=24)

    #To Plot
    pred_ciProf = pred_ucProf.conf_int()
    axProf = y.plot(label='observed', figsize=(14, 4))
    pred_valProf = pred_ucProf.predicted_mean.plot(ax=axProf, label='Forecast')
    axProf.fill_between(pred_ciProf.index,
                pred_ciProf.iloc[:, 0],
                pred_ciProf.iloc[:, 1], color='k', alpha=.25)
    axProf.set_xlabel('Date')
    axProf.set_ylabel('Profit')
    plt.legend()
    plt.savefig('backend/static/images/profit_predictions.png')
    plt.clf()

    #Saving predicted profit values
    forecastProfit = pred_ucProf.predicted_mean
    forecastProfit.index.name = 'Date'
    forecastProfit.to_csv("profitPrediction.csv", header=["Prediction"])
    

    #saving profit data to csv
    profit.to_csv("profit.csv")


    #Saving the input values as a CSV file----------------------------------------

    #Store file:
    #deleting profit and transactions column
    newStore = df_store.drop(['profit', 'transactions'], axis=1)

    #groupby date, store and sum the sales
    #newStore = newStore.groupby(['date','store']).sales.sum().reset_index()
    newStore = newStore.groupby(['date'])
    sumStore= newStore['sales', 'target'].sum().reset_index()

    #saving the file
    sumStore.to_csv('storeFile.csv', index = False)

    #transaction
    #deleting profit, store and sales
    newTr = df_tr.drop(['profit', 'target', 'sales'], axis=1)

    #groupby date and sum the tr
    newTr = newTr.groupby('date').transactions.sum().reset_index()

    #saving the file
    newTr.to_csv('transactions.csv', index = False)
    
    #salesFile.to_csv('salesFile.csv', index = False)

    #--------------------------------------------------------Warehouse Manager----------------------------

    df_warhPred = df_warehouseManger
    df_unitandSales = df_warehouseManger
    df_unitandItem = df_warehouseManger

    df_warhTotSale = df_unitandSales.groupby('item_name')
    df_warhTotSale= df_warhTotSale['unit_sold', 'sales'].sum().reset_index()
    newdf_warhTotSale = df_warhTotSale.sort_values(['unit_sold'], ascending=[0])

    #Saving Item name, Sold_unit and sales
    newdf_warhTotSale.to_csv("ItemAndUnitAndSales.csv", index = False)


    newWarhStock =  df_unitandItem[['date','item_name','unit_sold']]
    newWarhStock = newWarhStock.groupby(['date','item_name']).sum()

    #unstacked list --for Stack graph of items and unit sold
    unstacked = newWarhStock.unstack()
    unstacked.to_csv('warehouseStockListPerYear.csv')

    #prediction----

    df_warhPred  = df_warhPred .groupby('date').unit_sold.sum().reset_index()
    df_warhPred .columns = ['Date', 'Unit_Sold']
    df_warhPred ['Date'] = pd.to_datetime(df_profit['Date'])
    warhPred = df_warhPred 
    warhPred = warhPred.set_index('Date')
    y = warhPred['Unit_Sold'].resample('MS').mean()

    w = h = m = range(0, 2)
    whm = list(itertools.product(w, h, m))
    seasonal_whm = [(x[0], x[1], x[2], 12) for x in list(itertools.product(w, h, m))]

    for param in whm:
        for param_seasonal in seasonal_whm:
            try:
                modwarehouse = sm.tsa.statespace.SARIMAX(y,order=param,seasonal_order=param_seasonal,enforce_stationarity=False,enforce_invertibility=False)
                resultswarehouse = modwarehouse.fit()
           # print('ARIMA{}x{}12 - AIC:{}'.format(param,param_seasonal,results.aic))
            except: 
                continue

    modwarehouse = sm.tsa.statespace.SARIMAX(y,
                                order=(1, 1, 0),
                                seasonal_order=(1, 1, 0, 12),
                                enforce_stationarity=False,
                                enforce_invertibility=False)
    resultswarehouse = modwarehouse.fit()
    #print(resultswarehouse.summary().tables[1]) 

    pred_ucItem = resultswarehouse.get_forecast(steps=24)

    #To Plot
    pred_ciItem = pred_ucItem.conf_int()
    axItem = y.plot(label='observed', figsize=(14, 4))
    pred_valItem = pred_ucItem.predicted_mean.plot(ax=axItem, label='Forecast')
    axItem.fill_between(pred_ciItem.index,
                    pred_ciItem.iloc[:, 0],
                    pred_ciItem.iloc[:, 1], color='k', alpha=.25)
    axItem.set_xlabel('Date')
    axItem.set_ylabel('Stock Demand')
    #plt.legend()
    plt.savefig('backend/static/images/Item_predictions.png')
    plt.clf()

    #saving forcasted csv
    forecastItem = pred_ucItem.predicted_mean
    forecastItem.index.name = 'Date'
    forecastItem.to_csv("StockPredicition.csv", header=["Prediction"])
   


    base_static = '/static/images/'
    return Response({
        'results': {
            'analysis': base_static + 'analysis.png',
            'analysis_advance': base_static + 'analysis_advance.png',
            'analysis_deep': base_static + 'analysis_deep.png',
            'analysis_validation': base_static + 'analysis_validation.png',
            'final_predictions': base_static + 'final_predictions.png',
            'profit': base_static + 'profit.png',
            'profit_validation': base_static + 'profit_validation.png',
            'profit_predictions': base_static + 'profit_predictions.png',
            'Item_predictions': base_static + 'Item_predictions.png',
        }})

        



#Delete later
@api_view(['GET'])
def index(request):
   # df_sales = pd.read_csv("rest/Salesforecast.csv")
    df_sales = df_sales.groupby('date').sales.sum().reset_index()
    df_sales.columns=['Order Date','Sales']
    df_sales['Order Date'] = pd.to_datetime(df_sales['Order Date'])
    furniture =df_sales
    # furniture.head()

    furniture = furniture.set_index('Order Date')
    y = furniture['Sales'].resample('MS').mean()
    y.plot(figsize=(15, 6))

    plt.savefig('backend/static/images/analysis.png')
    plt.clf()
    rcParams['figure.figsize'] = 18, 8

    decomposition = sm.tsa.seasonal_decompose(y, model='additive')
    fig = decomposition.plot()

    plt.savefig('backend/static/images/analysis_advance.png')
    plt.clf()
    p = d = q = range(0, 2)
    pdq = list(itertools.product(p, d, q))
    seasonal_pdq = [(x[0], x[1], x[2], 12) for x in list(itertools.product(p, d, q))]

    for param in pdq:
        for param_seasonal in seasonal_pdq:
            try:
                mod = sm.tsa.statespace.SARIMAX(y,
                                                order=param,
                                                seasonal_order=param_seasonal,
                                                enforce_stationarity=False,
                                                enforce_invertibility=False)

                results = mod.fit()

                # print('ARIMA{}x{}12 - AIC:{}'.format(param, param_seasonal, results.aic))
            except:
                continue

    mod = sm.tsa.statespace.SARIMAX(y,
                                    order=(1, 1, 1),
                                    seasonal_order=(1, 1, 0, 12),
                                    enforce_stationarity=False,
                                    enforce_invertibility=False)

    results = mod.fit()

    print(results.summary().tables[1])
    results.plot_diagnostics(figsize=(16, 14))

    plt.savefig('backend/static/images/analysis_deep.png')
    plt.clf()

    pred = results.get_prediction(start=pd.to_datetime('2017-01-01'), dynamic=False)
    pred_ci = pred.conf_int()

    ax = y['2014':].plot(label='observed')
    pred.predicted_mean.plot(ax=ax, label='One-step ahead Forecast', alpha=.7, figsize=(14, 7))

    ax.fill_between(pred_ci.index,
                    pred_ci.iloc[:, 0],
                    pred_ci.iloc[:, 1], color='k', alpha=.2)

    ax.set_xlabel('Date')
    ax.set_ylabel('Sales')
    plt.legend()

    plt.savefig('backend/static/images/analysis_validation.png')
    plt.clf()
    y_forecasted = pred.predicted_mean
    y_truth = y['2017-01-01':]

    # Compute the mean square error
    mse = ((y_forecasted - y_truth) ** 2).mean()
    print('The Mean Squared Error of our forecasts is {}'.format(round(mse, 2)))



    pred_uc = results.get_forecast(steps=100)
    pred_ci = pred_uc.conf_int()

    ax = y.plot(label='observed', figsize=(14, 7))
    pred_uc.predicted_mean.plot(ax=ax, label='Forecast')
    ax.fill_between(pred_ci.index,
                    pred_ci.iloc[:, 0],
                    pred_ci.iloc[:, 1], color='k', alpha=.25)
    ax.set_xlabel('Date')
    ax.set_ylabel('Sales')

    plt.legend()
    plt.savefig('backend/static/images/final_predictions.png')
    plt.clf()

    base_static='/static/images/'
    return Response({
        'results': {
           # 'analysis':base_static+'analysis.png',
            'analysis_advance':base_static+'analysis_advance.png',
            'analysis_deep':base_static+'analysis_deep.png',
            'analysis_validation':base_static+'analysis_validation.png',
            'final_predictions':base_static+'final_predictions.png',
        }})