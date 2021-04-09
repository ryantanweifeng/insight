
    <template>
  <v-app>
    <div id="div1">
      <v-card height="100%" elevation="24" id="sideBar">
        <v-navigation-drawer style="background-color: #022140">
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img
                  src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title style="color: white">{{
                  username
                }}</v-list-item-title>
                <v-list-item-subtitle style="color: white"
                  >Logged In</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-divider></v-divider>
          <v-list rounded>
            <v-subheader></v-subheader>
            <v-list-item-group
              v-model="selectedItem"
              active-class="#BAB2B5"
              color="#BAB2B5"
              elevation="24"
            >
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content style="color: white">
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
            <div class="row">
              <div class="col-md-12">
                <v-card id="charts" class="card card-chart">
                  <highcharts
                    :options="chartOptions1"
                    :highcharts="graph1"
                  ></highcharts>
                </v-card>
              </div>
            </div>
            <div class="row">
              <div id="charts" class="col-md-12">
                <v-card class="card card-chart">
                  <highcharts
                    :options="chartOptions2"
                    :highcharts="graph2"
                  ></highcharts>
                </v-card>
              </div>
            </div>
            <!-- <div><h2>Decomposition Graph for Sales</h2></div> -->
            <div class="row">
              <div id="charts" class="col-md-12">
                <v-card class="card card-chart" id="graph2">
                  <highcharts
                    :options="chartOptions3"
                    :highcharts="graph3"
                  ></highcharts>
                </v-card>
              </div>
            </div>
          </template>
        </div>
      </v-main>
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
      errors: [],
      csvdata: null,
      have_results: "none",

      selectedItem: 2,
      mySeries: [10, 20, 30, 40, 50, 60],

      items: [
        { title: "Input Data", icon: "mdi-forum" },
        { title: "Sales Dashboard", icon: "mdi-view-dashboard" },
        { title: "Warehouse Dashboard", icon: "mdi-forum" },
        { title: "Logout", icon: "mdi-exit-to-app" },
      ],

      graph1: Highcharts,
      chartOptions1: {
        plotOptions: {
          series: {},
        },

        data: {
          csv: "",
        },

        credits: {
          enabled: false,
        },

        chart: {
          type: "line",
        },
        series: [
          {
            type: "column",
            yAxis: 1, // have to include y-axis for the values of first y-axis to appear
            color: "#42c7aa",
          },
          {
            type: "line",
          },
        ],
        title: {
          text: "Item, Unit And Sales",
        },

        subtitle: {
          text: "",
        },
        // yAxis: {
        //   title: {
        //     text: "Number of Sales",
        //   },
        // },
        yAxis: [
          {
            // Primary yAxis
            labels: {
              format: "RM{value}",
              style: {
                color: "#42c7aa",
              },
            },
            title: {
              text: "Number of unit sold",
              style: {
                color: "#42c7aa",
              },
            },
            opposite: true,
          },
          {
            // Secondary yAxis
            gridLineWidth: 0,
            title: {
              text: "Number of sales",
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
            labels: {
              format: "RM{value}",
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
          },
        ],
        tooltip: {
          crosshairs: true,
          // shared: true,
        },
      },

      graph2: Highcharts,
      chartOptions2: {
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
          text: "Stock Prediction",
        },
        yAxis: {
          title: {
            text: "Number of stocks",
          },
        },
        xAxis: {
          type: "datetime",
        },
      },
      graph3: Highcharts,
      chartOptions3: {
        plotOptions: {
          column: {
            stacking: "normal",
          },
        },

        data: {
          csv: "",
        },
        title: {
          text: "Warehouse Stock List Per Year",
        },
        chart: {
          type: "column",
        },
        yAxis: {
          title: {
            text: "Number of item units",
          },
        },

        credits: {
          enabled: false,
        },
      },
    };
  },

  methods: {
    goToPage(title) {
      if (title == "Sales Dashboard") {
        this.selectedItem = true;
        this.$router.push({
          name: "DashboardPage",
          params: { username: this.username },
        });
      }
      if(title == "Warehouse Dashboard"){
        this.$router.push({
          name: "WarehouseM",
          params: { username: this.username },
        });
      }
      if(title == "Input Data"){
        this.$router.push({
          name: "InputData",
          params: { username: this.username },
        });
      }

      if (title == "Logout") {
        this.$router.push({
          name: "HomePage",
        });
      }
    },

    updateData() {
      // for warehouse manager
      axios
        .get("backendFinal/ItemAndUnitAndSales.csv")
        .then((response) => {
          this.chartOptions1.data.csv = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("backendFinal/StockPredicition.csv")
        .then((response) => {
          this.chartOptions2.data.csv = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("backendFinal/warhouseStockListPerYear.csv")
        .then((response) => {
          // break the textblock into an array of lines
          var lines = response.data.split("\n");
          // remove one line, starting at the first position
          lines.splice(0, 1);
          // join the array back into a single string
          var newtext = lines.join("\n");
          this.chartOptions3.data.csv = newtext;
          console.log(newtext);
        })
        .catch((error) => {
          console.log(error);
        });

      // this.chartOptions3.data.csv = this.$refs.data1.innerHTML; // This is based on input data of csv data but not from csv file
    },
  },
  mounted: function () {
    this.updateData();
  },
};
</script>

<style>
#div1 {
  height: 100%;
  width: 20%;
  position: fixed;
  left: 0;
  background-color: #022140;
}
#sideBar {
  background-color: #022140;
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
