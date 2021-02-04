
    <template>
  <v-app>
    <div id="div1">
      <v-card height="100%" elevation="24">
        <v-navigation-drawer>
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Jane Smith</v-list-item-title>
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
                  <v-list-item-title v-text="item.title"></v-list-item-title>
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
                      <!-- <small>QTY</small> -->
                    </h3>
                  </div>
                  <!-- <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons text-danger">warning</i>
                    <a href="javascript:;">Need to replenish stocks...</a>
                  </div>
                </div> -->
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
                  <!-- <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div> -->
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
                  <!-- <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div> -->
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
                  <!-- <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div> -->
                </v-card>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card card-chart">
                  <div class="card-header card-header-success">
                    <highcharts
                      :options="chartOptions1"
                      :highcharts="graph1"
                    ></highcharts>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Transaction Trends</h4>
                    <p class="card-category">
                      <span class="text-success"
                        ><i class="fa fa-long-arrow-up"></i> 55%
                      </span>
                      increase in today sales.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i> updated 4
                      minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-chart">
                  <div class="card-header card-header-warning">
                    <highcharts
                      :options="chartOptions2"
                      :highcharts="graph2"
                    ></highcharts>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Store Performance</h4>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i> updated 2 days
                      ago
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-chart">
                  <div class="card-header card-header-danger">
                    <div class="ct-chart" id="completedTasksChart"></div>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Predicted Product Sales</h4>
                    <!-- <p class="card-category">Last Campaign Performance</p> -->
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i> updated 2 days
                      ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </v-main>
    </div>
    <!-- <template>
      <v-card height="100%">
        <v-navigation-drawer absolute permanent left>
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Jane Smith</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
       
            <v-main>
            <div>Hello</div>
            </v-main>
        
      </v-card>
    </template> -->
  </v-app>
</template>

<script>
import Highcharts from "highcharts";

export default {
  data() {
    return {
      mySeries: [10,20,30,40,50,60],
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],

      graph1: Highcharts,
      chartOptions1: {
        series: [
          {
            data: [1, 2, 3],
            colors: "green",
          },
        ],
        plotOptions: {
          series: {
            color: "white",
            backgroundColor: "white",
            pointStart: 2010,
          },
        },
        credits: {
          enabled: false,
        },
        chart: {
          backgroundColor: "transparent", //"#62ad53",
          //   borderColor: "blue",
          plotBorderColor: "black",
          //   selectionMarkerFill: "red",
          height: 210,
        },
      },
      graph2: Highcharts,
      chartOptions2: {
        series: [
          {
            data: [1, 2, 3],
            colors: "green",
          },
        ],
        plotOptions: {
          series: {
            color: "white",
            backgroundColor: "white",
            pointStart: 2010,
          },
        },
        credits: {
          enabled: false,
        },
        chart: {
          backgroundColor: "transparent", //"#62ad53",
          //   borderColor: "blue",
          plotBorderColor: "black",
          //   selectionMarkerFill: "red",
          height: 210,
        },
      },
    };
  },
  methods: {
      updateData(){
          this.chartOptions1.series[0].data= this.mySeries;
      }
  },
  mounted: function(){
      this.updateData();
  }
};
</script>

<style>
#div1 {
  height: 100%;
  width: 20%;
  position: absolute;
  left: 0;
}

#div2 {
  width: 80%;
  position: absolute;
  right: 0;
}

#main {
  margin: 3%;
}

#completedTasksChart {
  height: 20;
}
</style>