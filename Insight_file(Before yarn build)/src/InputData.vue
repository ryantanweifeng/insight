
    <template>
  <v-app>
    <div id="div1">
      <v-card height="100%" elevation="24">
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
              color="#BAB2B5"
              elevation="24"
            >
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content style="color: white">
                  <v-list-item-title
                    active
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
import HC_exportData from "highcharts/modules/export-data";

HC_exportData(Highcharts);

dataModule(Highcharts);

export default {
  props: ["username"],

  data() {
    return {
      csvInput: undefined,
      color: "",
      data: null,
      errors: [],
      selectedItem: 0,
      items: [
        { title: "Input Data", icon: "mdi-forum" },
        { title: "Sales Dashboard", icon: "mdi-view-dashboard" },
        { title: "Warehouse Dashboard", icon: "mdi-forum" },
        { title: "Logout", icon: "mdi-exit-to-app" },
      ],
    };
  },
  components: {
    InputData,
  },
  methods: {
    loadTextFromFile() {
      // const file = ev.target.files[0];
      const reader = new FileReader();
      reader.readAsText(this.chosenFile);
      reader.onload = (e) => (this.text = e.target.result);

      console.log(event);
    },
    submitCsv() {
      // console.log("This is the file: "+text);
      const file = this.csvInput.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => console.log(e.target.result);
      reader.readAsText(file);
    },
    goToPage(title) {
      axios("backendFinal/prediction.csv")
        .then((response) => {
          console.log("this is response value" + response);
          if (response !== null && title == "Sales Dashboard") {
            this.$router.push({
              name: "DashboardPage",
              params: { username: this.username },
            });
          }
          if (title == "Warehouse Dashboard") {
            this.$router.push({
              name: "WarehouseM",
              params: { username: this.username },
            });
          }
        })
        .catch((error) => {
          console.log(error);

          error = this.data;

          if (title == "Sales Dashboard") {
            alert("Please enter CSV data to view the dashboard !");
            this.selectedItem = false;
            // this.$router.push({
            //   name: "InputData",
            //   params: { username: this.username },
            // });
          }
        });

      if (title == "Logout") {
        this.$router.push({
          name: "Home",
        });
      }
    },
    updateData() {
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

.selectedItem {
  color: #bab2b5;
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
</style>