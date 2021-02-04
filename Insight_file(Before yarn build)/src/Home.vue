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
                <v-dialog v-model="dialog" persistent max-width="290">
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
                  <!-- /* action="/insight/api/verifyUser.php"*/ -->
                  <!-- method="post" -->
                  <!-- @submit="checkForm" -->
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card>
                      <v-card-title class="headline"> Sign In </v-card-title>
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>
                        <!-- <v-btn color="green darken-1" text type="submit">
                          Sign in
                        </v-btn> -->
                        <v-btn
                          color="green darken-1"
                          text
                          @click="verifyUser()"
                        >
                          Sign in
                        </v-btn>
                      </v-card-actions>
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
              this.password === element.password
            ) {
              this.$router.push("/DashboardPage");
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