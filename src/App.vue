<template>
<v-app >
<v-overlay :value="overlay" v-if="loading">
  <v-img
  src="./assets/pngegg.png"
  height="75px"
  width="75px"
  ></v-img>
      <v-progress-circular indeterminate size="75" ></v-progress-circular>
    </v-overlay>
 
 
<v-main v-else> 
 <router-view></router-view>
</v-main>

  </v-app>
</template>
<script>
/*disable-eslint*/

export default {
  data(){return{
    
    overlay: true,
      
  }},

computed:{
  loading()
  {
    return this.$store.getters.windowLoad
  },
 
},

}
</script>

<style lang="">
 
</style>