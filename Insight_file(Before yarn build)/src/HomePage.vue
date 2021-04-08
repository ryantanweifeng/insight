<template>
  <v-app id="background">
    <v-main>
      <v-card id="card1" elevation="100" width="900" height="700"> </v-card>
      <v-card id="card2" elevation="80" width="600" height="500"></v-card>
      <div id="laptop">
        <img width="750" src="./assets/laptop.png" />
      </div>
      <div id="laptop-screen">
        <img src="./assets/insight_dashboard.png" width="524" height="313" />
      </div>
      <div id="mainPageHeader">
        <h1 style="text-align: center; font-family: Tahoma; font-size: 40pt">
          Do more
        </h1>
        <h1 style="text-align: center; font-family: Tahoma; font-size: 40pt">
          with your data
        </h1>
        <h2
          style="
            text-align: center;
            font-family: Tahoma;
            font-size: 16pt;
            margin-bottom: 10%;
          "
        >
          Get a better insight of your sales report
        </h2>
      </div>
      <div id="actionBtn">
        <v-row>
          <div id="signUp">
            <v-btn
              elevation="20"
              color="#022140"
              rounded
              dark
              x-large
              @click="goToRegister()"
            >
              Sign UP
            </v-btn>
          </div>
          <!--Sign in button with dialog-->
          <template>
            <v-dialog v-model="dialog" persistent max-width="320">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  id="loginBtn"
                  elevation="20"
                  color="#022140"
                  rounded
                  dark
                  v-bind="attrs"
                  v-on="on"
                  x-large
                >
                  Sign in
                </v-btn>
              </template>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                style="margin-bottom: 0; border-radius: 30px"
              >
                <v-card id="cardContainer">
                  <div id="headerContainer">
                    <div style="height: 50px"></div>
                    <h2 id="headerTitle">
                      <v-icon large color="white darken-2">
                        mdi-google-analytics
                      </v-icon>
                      INSIGHT
                    </h2>
                    <div style="height: 50px"></div>
                  </div>

                  <v-card-text>
                    <v-text-field
                      v-model="username"
                      type="text"
                      name="username"
                      value=""
                      placeholder="username"
                      :rules="usernameRules"
                      required
                      outlined
                    >
                    </v-text-field>

                    <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      name="password"
                      value=""
                      placeholder="password"
                      :rules="passwordRules"
                      required
                      outlined
                      @click:append="showPassword = !showPassword"
                      autocomplete="off"
                    >
                    </v-text-field>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-col cols="12">
                      <div>
                        <v-btn
                          block
                          large
                          id="signInBtn"
                          text
                          @click="verifyUser()"
                        >
                          Sign in
                        </v-btn>
                      </div>
                      <div style="height: 15px"></div>
                      <div>
                        <v-btn
                          block
                          id="cancelBtn"
                          large
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>
                      </div>
                    </v-col>
                  </v-card-actions>
                  <div style="height: 30px"></div>
                </v-card>
              </v-form>
            </v-dialog>
          </template>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";

export default {
    name: "HomePage",
  data: () => ({
    showPassword: false,
    valid: true,
    dialog: false,

    users: [],
    username: "",
    password: "",
    verification: false,
    usernameRules: [(v) => !!v || "Username is required"],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    verifyUser: function () {
      axios
        .get("api/users.php")
        .then((response) => {
          this.contacts = response.data;
          response.data.forEach((element) => {
            if (
              this.username === element.username &&
              this.password === element.password &&
              element.usertype === "sales manager"
            ) {
              this.$router.push({
                name: "InputData",
                params: { username: this.username },
              });
            } else {
              if (
                this.username === element.username &&
                this.password === element.password &&
                element.usertype === "warehouse manager"
              )
                this.$router.push("/WarehouseM");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToRegister() {
      this.$router.push("/Register");
    },
    checkForm: function (e) {
      if (this.username && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.username) {
        this.$refs.form.validate();
      }
      if (!this.password) {
        this.errors.push("Age required.");
      }

      e.preventDefault();
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
#background {
  /* background-image: linear-gradient(#004d9b, #013031); */
  background-image: linear-gradient(#004d9b, #004d9b);
  
  /* #013031 */
    background-size: cover;
  border-bottom-left-radius: 100px;

  /* linear-gradient(to bottom right, #004d9b, #1a5394); */
}

#card1 {
  transform: rotate(45deg);
  transform-origin: 85% 20%;
  border-radius: 30px;
  box-shadow: 5px 4px 6px 8px rgba(0, 0, 0, 0.5),
    0 5px 8px 0px rgba(0, 0, 0, 0.5);
}

#card2 {
  transform: rotate(135deg);
  transform-origin: 178% 15%;
  border-radius: 30px;
  box-shadow: 7px 4px 8px 0 rgba(0, 0, 0, 0.5), 0 10px 50px 0 rgba(0, 0, 0, 0.5);
}
#laptop {
  margin-right: 500px;
  top: -1255px;
  right: -90px;
  position: relative;
}
#laptop-screen {
  top: -1807px;

  left: 203px;
  position: relative;
}
#mainPageHeader {
  position: relative;
  color: azure;
  top: -80%;
  right: -58%;
  width: 45%;
}
#signUp {
  position: relative;
  right: -70%;
}
#actionBtn {
  top: -80%;
  position: relative;
}

#loginBtn {
  right: -73%;
  position: relative;
}
#headerContainer {
  background-color: #022140;
  border-bottom-left-radius: 200px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#headerTitle {
  text-align: center;
  color: white;
  font-family: Elianto;
  font-size: 30pt;
}
#cardContainer {
  border-radius: 30px;
}

/* Dialog buttons for sign in dialog card */
#signInBtn {
  background-color: #022140;
  color: white;
  width: 40%;
}

#cancelBtn {
  width: 40%;
}
</style>