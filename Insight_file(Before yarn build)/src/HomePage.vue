<template>
  <v-app id="background">
      
    <v-main >
      <v-card id="card1" elevation="100" width="900" height="700"> </v-card>
      <v-card id="card2" elevation="80" width="600" height="500"></v-card>
      <div id="laptop" >
      <img 
          width="750"
          src="./assets/laptop.png"
        >
      </div>
      <div id="laptop-screen">
      <img  src="./assets/insight_dashboard.png" width="524" height="313">
      
      </div>   
      
    </v-main>
    
  </v-app>
</template>


<style>
#background {
  /* background-image: linear-gradient(#004d9b, #013031); */
  background-image: linear-gradient(#004d9b, #013031);
  /* #013031 */
    
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
#laptop{
   
    margin-right: 500px;
    top:-1255px;
    right: -90px;
    position: relative;
    
    
}
#laptop-screen{
    top:-1807px;
    
    left: 203px;
    position: relative;
}
</style>