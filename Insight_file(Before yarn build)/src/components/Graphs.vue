
<template>
  <div>
    <v-form
      v-if="have_results === 'none' || have_results === 'processing'"
      @submit="checkForm"
    >
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <div class="alert alert-danger" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </div>
      <div>
        <label id="header" for="exampleFormControlTextarea1"
          >Please enter data in CSV format as shown below:</label
        >
        <p>date,target,profit,sales,transactions,item_name,unit_sold</p>
        <p>2015-01-01,77616,27467,97616,529,frozen meals,55</p>
        <p>2015-01-01,73116,23565,93116,224,whole milk,95</p>
        <br />

        <v-file-input
          label="Choose a file"
          outlined
          truncate-length="15"
          accept=".csv"
          v-model="chosenFile"
          @change="loadTextFromFile(e, $event)"
        ></v-file-input>

        <v-textarea
          outlined
          :disabled="have_results === 'processing'"
          v-model="csvdata"
          name="csvdata"
          id="csvdata"
          rows="23"
          shaped
        ></v-textarea>

        <!-- <v-btn
          large
          type="submit"
          style="background-color: #022140; color: white"
          v-bind="attrs"
          v-on="on"
        > -->
        <!-- <span v-if="have_results === 'none'">Submit</span> -->
        <!-- <div
          class="spinner-border"
          v-if="have_results === 'processing'"
          role="status"
        >
          <span>Loading...</span>
        </div> -->

        <div class="text-center">
          <v-btn
            v-if="have_results === 'none'"
            large
            type="submit"
            style="background-color: #022140; color: white"
            :disabled="dialog"
            :loading="dialog"
          >
            Submit
          </v-btn>
          <v-dialog
            v-if="have_results === 'processing'"
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
          >
            <v-card>
              <v-card-text align="center">Calculating ...</v-card-text>
              <v-card-text align="center">
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-form>

    <div v-if="have_results === 'finished'" class="container">
      <!-- <h1 style="color: Black">Trend of the data</h1> -->
      <!-- <img width="100%" v-bind:src="images['analysis']" alt="img" /> -->
      <hr />
      <br />
      <br />
      <!--<img width="100%" v-bind:src="images['analysis_deep']" alt="img"><hr>!-->
      <!-- <img width="100%" v-bind:src="images['analysis_validation']" alt="img" /> -->
      <hr />
      <!--<img width="100%" v-bind:src="images['analysis_advance']" alt="img"><hr>!-->
      <!-- <img width="100%" v-bind:src="images['final_predictions']" alt="img" /> -->
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:8000';
require("dotenv").config();
export default {
  props: {},
  name: "Graphs",
  data: function () {
    return {
      chosenFile: null,
      text: "",
      interval: {},
      value: 0,
      errors: [],
      csvdata: null,
      have_results: "none",
      images: null,
      dialog: false,
    };
  },
  methods: {
    loadTextFromFile(e, event) {
      // const file = ev.target.files[0];
      const reader = new FileReader();
      reader.readAsText(this.chosenFile);
      reader.onload = (e) => (this.csvdata = e.target.result);

      console.log(e, event);
    },
    checkForm: function (e) {
      e.preventDefault();

      this.errors = [];

      if (!this.csvdata) {
        this.errors.push("CSV Data required.");
      }

      if (this.csvdata) {
        this.csvdata.trim();
        var csv = this.csvdata.trim().split("\n");

        var header = csv[0];
        var element_len = header.split(",").length;
        if (element_len !== 7) {
          this.errors.push("CSV data must have 7 columns only !");
          return;
        }
        

        if(
          header.split(',')[0]!=='date' || 
          header.split(',')[1]!=='target' ||
          header.split(',')[2]!=='profit' || 
          header.split(',')[3]!=='sales' || 
          header.split(',')[4]!=='transactions' || 
          header.split(',')[5]!=='item_name' || 
          header.split(',')[6].includes('unit_sold') 
) {
          this.errors.push(
            "Please ensure that the labels of the CSV data header are in the correct format ! "
          );
          if (header.split(",")[0] == "date") {
            console.log(header.split(",")[0]);
          }
          if (header.split(",")[1] == "target") {
            console.log(header.split(",")[1]);
          }
          if (header.split(",")[2] == "profit") {
            console.log(header.split(",")[2]);
          }
          if (header.split(",")[3] == "sales") {
            console.log(header.split(",")[3]);
          }
          if (header.split(",")[4] == "transactions") {
            console.log(header.split(",")[4]);
          }
          if (header.split(",")[5] == "item_name") {
            console.log(header.split(",")[5]);
          }
          if (header.split(",")[6] == "unit_sold") {
            console.log(header.split(",")[6]);
          }
          console.log(header.split(",")[6] == "unit_sold");
          console.log(header.split(",")[6]);
          console.log(typeof header.split(",")[6]);
          console.log(typeof "unit_sold");

          return;
        }

        csv.shift();
        var BreakException = {};

        try {
          csv.forEach((element) => {
            if (element.split(",").length !== element_len) {
              this.errors.push(
                'CSV data not valid. There might be a missing "," or a value'
              );

              throw BreakException;
            }
            if (
              !element
                .split(",")[0]
                .match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/)
            ) {
              this.errors.push(
                "CSV data not valid. date column must be like this '2017-01-12'"
              );
              throw BreakException;
            }
          });
        } catch (e) {
          if (e !== BreakException) throw e;
          return;
        }

        if (csv.length < 50) {
          this.errors.push(
            "CSV data not enough to predict the future sales. Enter atleast 3 years data to make accurate prediction"
          );
          return;
        }
        this.dialog = true;
        this.have_results = "processing";

        axios
          .post("/api/posting/", { csv: this.csvdata })
          .then((response) => {
            let results = response["data"]["results"];
            this.have_results = "finished";
            this.images = results;
            if (this.have_results === "finished") {
              this.$router.push({
                name: "DashboardPage",
                params: { username: this.username },
              });
            }

            console.log(window.location.href);
          })
          .catch(function (error) {
            this.have_results = "none";
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
          });
      }
    },
  },
  mounted() {
    console.log("this is new Path of origin : " + process.env.VUE_APP_APIURL);
    console.log("this is new Path of origin : " + process.env.NODE_ENV);
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 5;
    }, 1000);
  },
};
</script>

<style>
#header {
  color: black;
  font-weight: bold;
}
</style>

