
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
                <v-list-item-title>{{username}}</v-list-item-title>
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
                  <v-icon v-text="item.icon" ></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" @click="goToPage(item.title)"></v-list-item-title>
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
          <InputData />
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";
import dataModule from "highcharts/modules/data";
import InputData from "./components/Graphs";

// import csvPath from './studies/test.csv';

// import csvPath from "./studies/test.csv";
import HC_exportData from "highcharts/modules/export-data";
HC_exportData(Highcharts);

dataModule(Highcharts);

export default {
  props: ["username"],

  data() {
    return {
      selectedItem: "",
       items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Input Data", icon: "mdi-forum" },
      ],
    };
  },
  components: {
    InputData,
  },
  methods: {
    goToPage(title) {
      if (title == "Dashboard") {
        this.$router.push({name:"DashboardPage",params:{username:this.username}});
      }
    },
    updateData() {
      

      axios
        .get("data.csv")
        .then((response) => {
          this.chartOptions2.data.csv = response.data;
          // console.log( "this is data.csv ==== "+response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // axios
      //   .get("backendFinal/salesFile.csv")
      //   .then((response) => {
      //     this.chartOptions1.data.csv = response.data;

      //     console.log("this is salesFile.csv ==== " + response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
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
  height: 15;
  margin: 10;
}
</style>