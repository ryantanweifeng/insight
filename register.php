<!DOCTYPE html>
<html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
</head>

<body>
  <div id="app">
    <v-app>
      <template>
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Registration form</v-card-title>
          </v-img>



          <v-card-text class="text--primary">
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>

                <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>


                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Agree with Terms & Conditions" required></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="createContact()" value="Add">
                  Submit
                </v-btn>



                <v-btn color="error" class="mr-4" @click="reset">
                  Cancel
                </v-btn>


              </v-form>
            </template>
          </v-card-text>


        </v-card>
      </template>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <!-- Routing -->
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript" src="js/vue-router.js"></script>
  <script>
    new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data: {
        users: [],
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',

        ],
        username: '',
        usernameRules: [
          v => !!v || 'Username is required'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        checkbox: false,
      },

      methods: {
        validate() {
          this.$refs.form.validate()
        },
        reset() {
          this.$refs.form.reset()
        },
        createContact: function() {

          if (this.name != "" && this.email != "") {
            console.log("Create user!")



            let formData = new FormData();
            console.log("name:", this.name)
            formData.append('name', this.name)
            formData.append('email', this.email)
            formData.append('username', this.username)
            formData.append('password', this.password)




            var user = {};
            formData.forEach(function(value, key) {
              user[key] = value;
            });



            axios({
                method: 'post',
                url: 'api/users.php',
                data: formData,
                config: {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
              })
              .then(function(response) {
                //handle success
                console.log(user);
                app.users.push(user);

                app.resetForm();
              })
              .catch(function(response) {
                //handle error
                console.log(response)
              });

          }
        },
      },


    })
  </script>

</body>

</html>