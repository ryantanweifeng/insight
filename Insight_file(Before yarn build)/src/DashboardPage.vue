
    <template>
  <v-app>
    <div id="div1">
      <v-card height="100%" elevation="24">
        <v-navigation-drawer>
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <!-- <img src="https://randomuser.me/api/portraits/women/81.jpg" /> -->
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ username }}</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-divider></v-divider>
          <v-list rounded>
            <v-subheader></v-subheader>
            <v-list-item-group
              v-model="selectedItem"
              color="green"
              elevation="24"
            >
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.title"
                    @click="goToPage(item.title)"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <!-- <v-app-bar app> -->

    <!-- </v-app-bar> -->

    <!-- Sizes your content based upon application components -->
    <div id="div2">
      <v-main>
        <!-- Provides the application the proper gutter -->
        <div id="main">
          <template>
            <!-- <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <v-card class="card card-stats">
                  <div class="card-header card-header-warning card-header-icon">
                    <div class="card-icon">
                      <v-icon> mdi-chart-line </v-icon>
                    </div>
                    <p class="card-category">Number of sales</p>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">
                      115
                      
                    </h3>
                  </div>
                  
                </v-card>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <v-card class="card card-stats">
                  <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <v-icon>mdi-chart-box</v-icon>
                    </div>
                    <p class="card-category">Revenue</p>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">$ 34,245</h3>
                  </div>
                  
                </v-card>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <v-card class="card card-stats">
                  <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                      <v-icon> mdi-currency-usd </v-icon>
                    </div>
                    <p class="card-category">Profit</p>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">$ 50,709</h3>
                  </div>
                  <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div>
                </v-card>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <v-card class="card card-stats">
                  <div class="card-header card-header-rose card-header-icon">
                    <div class="card-icon">
                      <v-icon>mdi-finance</v-icon>
                    </div>
                    <p class="card-category">Cost</p>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">$ 110,555</h3>
                  </div>
                  <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div>
                </v-card>
              </div>
            </div> -->
            <div class="row">
              <div class="col-md-6">
                <v-card id="charts" class="card card-chart">
                  <highcharts
                    :options="chartOptions1"
                    :highcharts="graph1"
                  ></highcharts>
                </v-card>
              </div>

              <div id="charts" class="col-md-6">
                <v-card class="card card-chart">
                  <!-- <div class="card-header card-header-danger"> -->
                  <highcharts
                    :options="chartOptions4"
                    :highcharts="graph4"
                  ></highcharts>

                  <!-- </div> -->
                </v-card>
              </div>
            </div>
            <div class="row">
              <div id="charts" class="col-md-12">
                <v-card class="card card-chart" id="graph2">
                  <highcharts
                    :options="chartOptions3"
                    :highcharts="graph3"
                  ></highcharts>

                  <!-- <img v-if="images != null" width="100%" :src="images['final_predictions']" alt="img" /> -->
                  <!-- <v-img :src="images['final_predictions']"></v-img> -->
                </v-card>
                <!-- <v-img
                    src="image"
                    height="500"
                  ></v-img> -->
              </div>
            </div>
            <div class="row">
              <div id="charts" class="col-md-12">
                <v-card class="card card-chart" id="graph2">
                  <highcharts
                    :options="chartOptions5"
                    :highcharts="graph5"
                  ></highcharts>
                </v-card>
              </div>
            </div>
            <!-- <div clas="row"></div>
            <div class="row"></div> -->
          </template>
        </div>
      </v-main>
      <!-- <pre id="csv" style="display: none" ref="dataC">
Date,Prediction
2020-01-01,485554.0946642303
2020-02-01,495496.5098943882
2020-03-01,660261.2296798062
2020-04-01,739371.5669962771
2020-05-01,826975.0861533438
2020-06-01,854974.8093403798
2020-07-01,928174.3590219235
2020-08-01,830584.532009551
2020-09-01,739165.4594070568
2020-10-01,710256.731930126
2020-11-01,749823.0090925124
2020-12-01,541431.4915828642
2021-01-01,492544.757107191
2021-02-01,499841.89308962255
2021-03-01,668663.0442144112
2021-04-01,749923.1326546234
2021-05-01,840004.2668022434
2021-06-01,866431.984389926
2021-07-01,943128.0550420602
2021-08-01,843267.5156799211
2021-09-01,748317.8861363975
2021-10-01,720449.6310463671
2021-11-01,760925.86679889
2021-12-01,546941.0315304468
</pre
      >

      <pre id="csv2" style="display: none" ref="dataD">
        Date,Sales
2015-01-01,951442
2015-02-01,657202
2015-03-01,652006
2015-04-01,638453
2015-05-01,629430
2015-06-01,645584
2015-07-01,702639
2015-08-01,743621
2015-09-01,726835
2015-10-01,818522
2015-11-01,762594
2015-12-01,712417
2016-01-01,635897
2016-02-01,620276
2016-03-01,790881
2016-04-01,901950
2016-05-01,988730
2016-06-01,1022664
2016-07-01,1138718
2016-08-01,981494
2016-09-01,896831
2016-10-01,863637
2016-11-01,891448
2016-12-01,663411
2017-01-01,617306
2017-02-01,621369
2017-03-01,822667
2017-04-01,938862
2017-05-01,1020686
2017-06-01,1064624
2017-07-01,1171393
2017-08-01,1026403
2017-09-01,935263
2017-10-01,891160
2017-11-01,928837
2017-12-01,695170
2018-01-01,454904
2018-02-01,459417
2018-03-01,617382
2018-04-01,682274
2018-05-01,763242
2018-06-01,795597
2018-07-01,855922
2018-08-01,766761
2018-09-01,689907
2018-10-01,656587
2018-11-01,692643
2018-12-01,506607
2019-01-01,525987
2019-02-01,529117
2019-03-01,704301
2019-04-01,788914
2019-05-01,882877
2019-06-01,906842
2019-07-01,989010
2019-08-01,885596
2019-09-01,785124
2019-10-01,758883
2019-11-01,800783
2019-12-01,578048

      </pre> -->

      <!-- <pre id="csv1" style="display: none" ref="data1">
        Categories,Apples,Pears,Oranges,Bananas
John,8,4,6,5
      </pre> -->
    </div>
  </v-app>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";
import dataModule from "highcharts/modules/data";

import HC_exportData from "highcharts/modules/export-data";
HC_exportData(Highcharts);

dataModule(Highcharts);

export default {
  props: ["username", "results"],
  data() {
    return {
      image: "",

      errors: [],
      csvdata: null,
      have_results: "none",
      images: null,
      updatedImages: [],
      selectedItem: "",
      mySeries: [10, 20, 30, 40, 50, 60],

      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Input Data", icon: "mdi-forum" },
        { title: "Logout", icon: "mdi-exit-to-app" },
      ],

      graph1: Highcharts,
      chartOptions1: {
        plotOptions: {
          series: {
            // marker: {
            //   enabled: false,
            // },
          },
        },

        data: {
          csv: "",

          // enablePolling: true,
        },

        credits: {
          enabled: false,
        },

        chart: {
          type: "line",

          // backgroundColor: "transparent", //"#62ad53",

          // plotBorderColor: "black",
          //   selectionMarkerFill: "red",
        },
        title: {
          text: "Yearly Sales Trend",
        },

        subtitle: {
          text: "",
        },
        yAxis: {
          title: {
            text: "Number of Sales",
          },
        },
      },
      graph2: Highcharts,
      chartOptions2: {
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },
        series: [
          {
            lineWidth: 1,
          },
          {
            type: "areaspline",
            color: "#c4392d",
            negativeColor: "#5679c4",
            fillOpacity: 0.5,
          },
        ],
        data: {
          csv: "",

          //"https://demo-live-data.highcharts.com/vs-load.csv",
          complete: function (options) {
            options.series.push({
              name: "Trend",
              data: [
                { x: 1880, y: -0.4 },
                { x: 2014, y: 0.52 },
              ],
            });
          },

          enablePolling: true,

          //'https://demo-live-data.highcharts.com/vs-load.csv'

          // call back is needed because by default it will be undefined.
          // complete: function (options) {
          //   // Add another series to the output
          //   options.series.push({
          //     name: "Trend",
          //     data: [
          //       { x: 1880, y: -0.4 },
          //       { x: 2014, y: 0.52 },
          //     ],
          //     dashStyle: "dash",
          //   });
          // },
          // csvURL: window.location.origin + "/insight/data.csv",
        },
        chart: {
          type: "spline",
          // backgroundColor: "transparent", //"#62ad53",
          //   borderColor: "#273e60",
          plotBorderColor: "black",
          //   selectionMarkerFill: "red",
        },
        title: {
          text: "Global temperature change",
        },

        subtitle: {
          text:
            "Data module: options structure is modified before final rendering",
        },
      },
      graph3: Highcharts,
      chartOptions3: {
        plotOptions: {
          series: {
            color: "#318282",
          },
        },
        chart: {
          type: "line",
        },

        data: {
          csv: "",
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "Store performance",
        },
        yAxis: {
          title: {
            text: "Number of sales",
          },
        },
        xAxis: {
          type: "datetime",
          // tickInterval: 24 * 3600 * 1000,
        },
        series: [
          {
            type: "column",

            color: "#42c7aa",
          },
          {
            type: "line",
          },
        ],
        // series: [
        //   {
        //     pointRange: 24 * 3600 * 1000,
        //   },
        // ],
        tooltip: {
          crosshairs: true,
          shared: true,
          // valueSuffix: '°C'
        },
      },
      graph4: Highcharts,
      chartOptions4: {
        plotOptions: {
          series: {
            color: "#ffa500",
          },
        },
        chart: {
          type: "line",
        },
        credits: {
          enabled: false,
        },

        data: {
          csv: "",
          // complete: (options)=> {
          //   var csv = require('./jquery.csv.js');
          //   arrayData= $.csv.toArrays(this.$refs.dataD.innerHTML)
          //   options.series.push({
          //     name: "Trend",
          //     data: arrayData
          //   });
          // },
        },
        //  {data:{csv:""}},

        // {
        //   zoneAxis: "x",
        //   zones: [{ value: Date.UTC(2020, 12), color: "#ffa500" }],
        // },

        yAxis: {
          title: {
            text: "Number of sales",
          },
        },
        title: {
          text: "Sales prediction",
        },
      },
      graph5: Highcharts,
      chartOptions5: {
        plotOptions: {
          series: {
            color: "#273e60",
          },
        },
        chart: {
          type: "line",
        },
        data: {
          csv: "",
        },

        yAxis: {
          title: {
            text: "Number of transactions",
          },
        },
        title: {
          text: "Transactions per month",
        },
        credits: {
          enabled: false,
        },
      },
    };
  },

  methods: {
    goToPage(title) {
      if (title == "Input Data") {
        this.$router.push({
          name: "InputData",
          params: { username: this.username },
        });
      }
      if (title == "Logout") {
        this.$router.push({
          name: "Home"
          
        });
      }
      
    },

    updateData() {
      // this.images = this.results;
      // this.chartOptions1.series[0].data = this.mySeries;

      // this.chartOptions4.series[0].data.csv = this.$refs.dataC.innerHTML;

      // this.chartOptions4.data.csv = this.$refs.dataC.innerHTML;
      // this.chartOptions4.series[1].data.csv = this.$refs.dataD.innerHTML;
      // console.log(this.chartOptions4.series[0].data.csv);
      // console.log(this.chartOptions4.series[1].data.csv);
      // this.chartOptions2.data.csvURL =
      //   "http://localhost:8080/insight/#/data.csv";

      // axios
      //   .get("data.csv")
      //   .then((response) => {
      //     this.chartOptions1.data.csv = response.data;
      //     // console.log( "this is data.csv ==== "+response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      axios
        .get("backendFinal/prediction.csv")
        .then((response) => {
          this.chartOptions4.data.csv = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("backendFinal/sales.csv")
        .then((response) => {
          this.chartOptions1.data.csv = response.data;

          console.log("this is sales.csv ==== " + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("backendFinal/storeFile.csv")
        .then((response) => {
          this.chartOptions3.data.csv = response.data;

          console.log("this is storeFile.csv ==== " + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("backendFinal/transactions.csv")
        .then((response) => {
          this.chartOptions5.data.csv = response.data;

          console.log("this is transactions.csv ==== " + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // this.chartOptions3.data.csv = this.$refs.data1.innerHTML; // This is based on input data of csv data but not from csv file
    },
  },
  mounted: function () {
    this.updateData();
    // if (this.results != this.images) {
    //   this.images = this.results;
    // }
  },
};
</script>

<style>
#div1 {
  height: 100%;
  width: 20%;
  position: fixed;
  left: 0;
}

#div2 {
  width: 80%;
  position: absolute;
  right: 0;
  height: 100%;
  overflow: auto;
}

#main {
  margin: 3%;
}

#completedTasksChart {
  height: 15;
  margin: 10;
}

#graph2 {
  height: 500px;
}
</style>
