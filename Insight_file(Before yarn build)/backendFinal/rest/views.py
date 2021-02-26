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

    #sales
    df_sales = df_sales.groupby('date').sales.sum().reset_index()
    

    df_sales.columns = ['Date', 'Sales']
    df_sales['Date'] = pd.to_datetime(df_sales['Date'])
    sales = df_sales
    # sales.head()

    sales = sales.set_index('Date')
    y = sales['Sales'].resample('MS').mean()
    y.plot(figsize=(15, 6))
    plt.show()

    plt.savefig('backend/static/images/analysis.png')

    plt.clf()
    from pylab import rcParams
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

    pred = results.get_prediction(start=pd.to_datetime('2019-01-01'), dynamic=False)
    pred_ci = pred.conf_int()

    ax = y['2017':].plot(label='observed')
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
    y_truth = y['2019-01-01':]

    # Compute the mean square error
    mse = ((y_forecasted - y_truth) ** 2).mean()
    #print('The Mean Squared Error of our forecasts is {}'.format(round(mse, 2)))

    #Forcasting
    pred_uc = results.get_forecast(steps=24)
    pred_ci = pred_uc.conf_int()

    ax = y.plot(label='Actual Sales Values', figsize=(14, 7))
    pred_uc.predicted_mean.plot(ax=ax, label='Forecasted Sales Values')
    ax.fill_between(pred_ci.index,
                    pred_ci.iloc[:, 0],
                    pred_ci.iloc[:, 1], color='k', alpha=.25)
    ax.set_xlabel('Date')
    ax.set_ylabel('Sales')
    #plt.ticklabel_format(axis="x", style="plain")

    plt.legend()
    plt.savefig('backend/static/images/final_predictions.png')
    plt.clf()

    #Saving predicted values
    forecast = pred_uc.predicted_mean
    forecast.index.name = 'Date'
    forecast.to_csv("prediction.csv", header=["Prediction"])
    sales.to_csv("sales.csv")

    #saving sales data to csv
    sales.to_csv("sales.csv")

    #Saving the input values as a CSV file

    #Store file:
    #deleting profit and transactions column
    newStore = df_store.drop(['profit', 'transactions'], axis=1)

    #groupby date, store and sum the sales
    newStore = newStore.groupby(['date','store']).sales.sum().reset_index()

    #saving the file
    newStore.to_csv('storeFile.csv', index = False)

    #transaction
    #deleting profit, store and sales
    newTr = df_tr.drop(['profit', 'store', 'sales'], axis=1)

    #groupby date and sum the tr
    newTr = newTr.groupby('date').transactions.sum().reset_index()

    #saving the file
    newTr.to_csv('transactions.csv', index = False)
    
    #salesFile.to_csv('salesFile.csv', index = False)

    base_static = '/static/images/'
    return Response({
        'results': {
            'analysis': base_static + 'analysis.png',
            'analysis_advance': base_static + 'analysis_advance.png',
            'analysis_deep': base_static + 'analysis_deep.png',
            'analysis_validation': base_static + 'analysis_validation.png',
            'final_predictions': base_static + 'final_predictions.png',
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