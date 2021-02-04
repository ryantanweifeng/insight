<template>
  
      
      <router-view />
 
  
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods:{
    goToRegister(){
      this.$router.push('/Register');
    }
  }
};
</script>
