<template>
  <v-app>
    <template>
      <v-parallex>
        <v-img
          src="./assets/business.jpg"
          max-width="100%"
          max-height="100%"
        ></v-img>
        <v-overlay absolute color="#036358">
          <div style="margin-bottom: 50%">
            <h1
              style="text-align: center; font-family: Tahoma; font-size: 50pt"
            >
              Do more
            </h1>
            <h1 style="font-family: Tahoma; font-size: 50pt">with your data</h1>
            <h2
              style="font-family: Tahoma; font-size: 20pt; margin-bottom: 10%"
            >
              Get a better insight of your business
            </h2>

            <v-row justify="center">
              <template>
                <div style="margin-right: 50pt">
                  <v-btn color="blue-grey" dark x-large @click="goToRegister()">
                    Sign UP
                  </v-btn>
                </div>
              </template>

              <!--Sign in button with dialog-->
              <template>
                <v-dialog v-model="dialog" persistent max-width="320">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
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
                          :append-icon="
                            showPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
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
        </v-overlay>
      </v-parallex>
    </template>
  </v-app>
</template>


<script>
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    showPassword: false,
    valid: true,
    dialog: false,
    dialog2: false,
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
  mounted: function () {
    console.log(this.usertype);
  },
};
</script>
<style>
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