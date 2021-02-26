
<template>
  <div>
    <form
      v-if="have_results === 'none' || have_results === 'processing'"
      @submit="checkForm"
    >
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <div class="alert alert-danger" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </div>

      <div class="form-group">
        <label id="header" for="exampleFormControlTextarea1"
          >Please enter data in CSV format as shown below:</label
        >
        <p>date,target,profit,sales,transactions</p>
        <p>2015-01-01,80000,114991,90921,483</p>
        <p>2015-01-01,90000,129355,93116,224</p>
        <br />

        <textarea
          class="form-control"
          :disabled="have_results === 'processing'"
          v-model="csvdata"
          name="csvdata"
          id="csvdata"
          rows="23"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary mb-2">
        <span v-if="have_results === 'none'">Submit</span>
        <div
          class="spinner-border"
          v-if="have_results === 'processing'"
          role="status"
        >
          <span>Loading...</span>
        </div>
      </button>
    </form>

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
    return { errors: [], csvdata: null, have_results: "none", images: null };
  },
  methods: {
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
        if (element_len !== 5) {
          this.errors.push("CSV data must have 5 columns only !");
          return;
        }

        if (
          header.split(",")[0] !== "date" ||
          header.split(",")[1] !== "target" ||
          header.split(",")[2] !== "profit" ||
          header.split(",")[3] !== "sales" ||
          header.split(",")[4] !== "transactions"
        ) {
          this.errors.push(
            "Please ensure that the labels of the CSV data header are in the correct format ! "
          );
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
        this.have_results = "processing";

        axios
          .post("/api/posting/", { csv: this.csvdata })
          .then((response) => {
            let results = response["data"]["results"];
            this.have_results = "finished";
            this.images = results;
            if (this.have_results === "finished") {
              // this.$router.push({
              //   name: "DashboardPage",
              //   params: { results: results },
              // });
              this.$router.push("/DashboardPage");
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
  },
};
</script>

<style>
#header {
  color: black;
  font-weight: bold;
}
</style>

