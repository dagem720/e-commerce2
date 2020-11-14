import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import * as firebase from 'firebase'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



Vue.config.productionTip = false


var firebaseConfig = {
    apiKey: "AIzaSyB2OmGTYd24xZnoAky8knpcvXL-yyAm9T8",
    authDomain: "e-commerce-704a2.firebaseapp.com",
    databaseURL: "https://e-commerce-704a2.firebaseio.com",
    projectId: "e-commerce-704a2",
    storageBucket: "e-commerce-704a2.appspot.com",
    messagingSenderId: "1063049426591",
    appId: "1:1063049426591:web:518458e918962d109d14aa",
    measurementId: "G-3HFYLRZ339"
};


firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");

let app;
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app=new Vue({
      router,
      vuetify,
      store,
      render: h => h(App),
      created() {
         this.$store.dispatch('fetchItems')
         this.$store.dispatch('fetchHomeImages')
         this.$store.dispatch('fetchnotapproveditems')
         

      },
    }).$mount('#app')
  }
})