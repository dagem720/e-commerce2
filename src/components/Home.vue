<template>
   <div>
     <div
     v-if='loading'
     
     >
        <v-card
        height='400px'
        >
          <v-card-text
          class="fill-height"
                      align="center"
                      justify="center"
          >
            <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary lighten-5"></v-progress-circular>
                    </v-row>
          </v-card-text>
        </v-card>
     </div>
     <div v-else>
            
           <v-carousel hide-delimiters>
      <v-carousel-item
      v-for="item in homeimages" :key="item.id"
        
      >
      <v-row
      
      >
        <v-col
        justify="center"
         align="center"
        >
             <v-img
         :src='item.imageUrl'
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
       
         >
         <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
         </v-img>
        </v-col>
        </v-row>  
        
       
      </v-carousel-item>
     

    </v-carousel>
   <div class="container"><h1>shop by Catagory</h1></div>
    <div class="pl-4 pr-4 row">
      
      <div
       class="col-md-6 col-sm-6 col-xs-12"
       v-for="item in catagoryimages"
       :key='item.imageUrl'
       >
        <v-card>

          <v-img
            :src="item.imageUrl"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
            height="400px"
          >
           <h1 class="text-center font-size">{{item.catagory}}</h1>
            <div class="text-center">
              <v-btn  class="white--text " outlined routet :to='item.link'>SHOP NOW</v-btn>
            </div>

          </v-img>
        </v-card>

      </div>
      
      </div>
      <div class="pl-4 pr-4 row">
        <h1 class="container">New Arrivals</h1> 
      <div
       class="col-md-4 col-sm-4 col-xs-12"
       v-for="(item,i) in featuredItems" :key="i"
        >
        <v-card outlined>
          <v-img
            :src="item.images[0]"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">{{item.nProduct}}</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"   text @click="loadProduct(item.id)">SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      </div>
      
      <div>
       <h1 class="container">Most Sold</h1> 
         <v-slide-group
      v-model="model"
      class="pa-2"
      show-arrows
     
    >
      <v-slide-item
        v-for="(item,i) in mostsold"
        :key="i"
        
      >
        <v-card
          
          class="ma-4"
          height="250"
          width="200"
          @click="loadProduct(item.id)"
          center-active
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img
            :src="item.images[0]"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
           height="250"
          width="200"
          >
            
            <div class="text-center mt-2">
              <v-btn class="white--text caption"   text>{{item.nProduct}} <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
      </div>
      </div>
      
           <!-- <div >
               <h3 class="container">FEATURED PRODUCTS</h3>
               <v-card v-if="loading" class="text-center" flat>
              
        <v-progress-circular
          indeterminate
          class="blue--text"
          :width="7"
          :size="70"></v-progress-circular>
     
    </v-card >
    
               <v-card style="margin:10px; " v-else>
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
         @click="loadProduct(item.id)"
         style="cursor:pointer"
      class="white--text align-end"
      height="200px"
      :src="item.images[0]"
      >
 
      <v-card-title class="white--text">{{item.nProduct}}</v-card-title>
      <v-chip
      v-if="item.onSale"
      class="ma-2"
      color="success"
    >
      OnSale
    </v-chip>
    </v-img>
    
    <v-card-subtitle class="pb-0 texe-center white--text">Provider {{item.cProduct}}</v-card-subtitle>
    
    <v-card-text class="text--primary ">
      

      <div class="white--text">{{item.nProduct}}</div>
    </v-card-text>

    <v-card-actions v-if="hover" >
      <v-btn
        color="green darken-3"
        class="text-center"
        dark
        @click="addtocarrt"
      >
        Add to Cart
      </v-btn> 

    </v-card-actions >
    <v-card-actions v-if="hover">
        <v-btn
        color="green darken-3"
        dark
      >
        Price {{item.cpProduct}}
      </v-btn> 
    </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
    </v-row>
    </v-card-text>
               </v-card>
  
  
           </div> -->
    </div>

           
</template>

<script>
    export default {
        data(){
            return{
              model:[],
                
                    
         } },
        methods:{
            loadProduct(id) {
                
                this.$router.push('../product/'+ id)
              },
              addtocarrt()
              {
                console.log('added to cart')
              }
        },
        computed:{
          mostsold()
          {
            return this.$store.getters.mostsolditems
          },
          items()
          {
            return this.$store.getters.items
          },
          homeimages()
          {
            return this.$store.getters.homeimages
          },
           catagoryimages()
          {
            return this.$store.getters.catagoryimages
          },
          featuredItems()
          {
            return this.$store.getters.featuredItems
          },
          loading()
          {
            return this.$store.getters.loading
          }
        },


    }
</script>

