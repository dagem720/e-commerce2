<template>
    <div class="pa-3">
        <!-- <p class="display-2 text-uppercase my-4 container">Electronics</p>
        
  <v-row class="text-end background-color: blue lighten-2">
      <v-col style="margin-right:25px">        
              Catagories/Electronics
      </v-col>
  </v-row>
  <v-card style="margin:10px; ">
                 <v-card-text>
               <v-row>
    <v-col
    v-for="(item,i) in items" :key="i"
      cols="12"
      sm="6"
      md="3"
      lg="3"
      
    >
      <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
        class="light-blue "
        
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto "
          
         
        >
         <v-img
      class="white--text align-end"
      height="200px"
      :src="item.images[0]"
      router
      @click="loadProduct(item.id)"
      style="cursor:pointer"
      >
 
      <v-card-title class="white--text">{{item.nProduct}}</v-card-title>
    </v-img>
    

    <v-card-subtitle class="pb-0 texe-center white--text">Provider {{item.cProduct}}</v-card-subtitle>

    <v-card-text class="text--primary ">
      

      <div class="white--text">{{item.dProduct}}</div>
    </v-card-text>

    <v-card-actions v-if="hover" >
      <v-btn
        color="green darken-3"
        class="text-center"
        dark
      >
        Add to Cart
      </v-btn> 

    </v-card-actions >
    <v-card-actions v-if="hover">
        <v-btn
        color="green darken-3"
        dark
      >
        Price
      </v-btn> 
    </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
  </v-card-text>
               </v-card> -->
  <v-row>
    <v-col cols="12"
    sm="12" md="3"
    >
    <v-card
    class="mx-auto"
    width="300"
    
  >
  <v-card-title>Food</v-card-title>
    <v-list
    
    >
      

        

        <v-list-group
          sub-group
          no-action
         
         value="true"
          >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>Type</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            
            v-for="(crud, i) in side"
            :key="i"
            router :to="crud.to"
          
            
          >
            <v-list-item-title v-text="crud.title" ></v-list-item-title>
          </v-list-item>
        </v-list-group>
       
      
    </v-list>
    
    </v-card >
      </v-col>
      <router-view></router-view>
    </v-row>
  
    </div>
</template>

<script>

 
    export default {
  
        data(){
            return{
              
              type:'',
               item: 1,
      side: [
        { title:'Sofa',to:'../../catagories/furnitures/sofa'  },
        { title: 'Dining Tables' ,to:'../../catagories/furnitures/diningtables'},
        { title: 'Kitchen Cabinets',to:'../../catagories/furnitures/kitchencabinets'},
        { title: 'Others',to:'../../catagories/furnitures/others'},
      ],

      
         } },
       
    
       
    }
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>