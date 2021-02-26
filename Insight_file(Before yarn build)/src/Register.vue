
<template >
  <v-app id= "container">
    <div class="Register" >
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="./assets/data-analytics.jpg"
        >
          <v-card-title>Registration form</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <template>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Agree with Terms & Conditions"
                required
              ></v-checkbox>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="createContact()"
                value="Add"
                href="index.html"
              >
                Submit
              </v-btn>

              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                href="index.html"
              >
                Cancel
              </v-btn>
            </v-form>
          </template>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>




<script>
import axios from "axios";
export default {
  name: "Register",

  data: () => ({
    users: [],
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    username: "",
    usernameRules: [(v) => !!v || "Username is required"],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },

    createContact: function () {
      if (this.name != "" && this.email != "") {
        console.log("Create user!");

        let formData = new FormData();
        console.log("name:", this.name);
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("username", this.username);
        formData.append("password", this.password);

        var user = {};
        formData.forEach(function (value, key) {
          user[key] = value;
        });

        axios({
          method: "post",
          url: "api/users.php",
          data: formData,
          config: {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        })
          .then(() => {
            //handle success
            console.log(user);
            this.users.push(user);

            this.resetForm();
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }
    },
  },
};
</script>

<style>
.Register {
  justify-content: center;
  margin-top: 2%;
  
  
  
  
}
#container {
  background: url("./assets/tech-fibre.jpg");
  background-size: cover;

}
</style>