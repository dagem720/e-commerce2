<template>
    
           <div class="container">
               <h3 class="container">My PRODUCTS</h3>
               
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-row>
            
            
          <v-col
            
            class="col-xs-4"
            v-for="(item,i) in itemss" :key='i'
            >
             <v-tab
             style="height:40px"
            
         
          >
            {{item}}
              </v-tab>
            </v-col>
           
        
            
            
          </v-row>
         
         
        </v-tabs>
      <v-tabs-items v-model="tab">
      <v-tab-item
        
      >
        <v-row>
                 <v-col
                 v-for="item in items" :key="item.id" 
                 class="col-md-6 col-sm-12 col-xs-12"
                 >
                  <v-card >
                    <v-card-title
                    class="blue lighten--2 white--text"
                    
                    >
                      {{item.nProduct}}
                    </v-card-title>
                    <v-card-text>
                      <v-img
                      height="200px"
                      :src="item.images[0]"
                      ></v-img>
                    </v-card-text>
                     <v-card-actions>
                    
                    <v-btn 
                    class="success white--text" 
                      router :to='"/user/myproduct/edit/"+item.id'
                    >Edit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                    class="error white--text" 
                      @click="deleteItem(item.id)"
                    >Delete</v-btn>
                </v-card-actions>
               </v-card>  
                 </v-col>
               </v-row>
      </v-tab-item>
       <v-tab-item
      
      >
        
            <v-row>
                 <v-col
                 v-for="item in rejectedProducts" :key="item.id" 
                 class="col-md-6 col-sm-12 col-xs-12"
                 >
                  <v-card >
                    <v-card-title
                    class="blue lighten--2 white--text"
                    
                    >
                      {{item.nProduct}}
                    </v-card-title>
                    <v-card-text>
                      <v-img
                      height="200px"
                      :src="item.images[0]"
                      ></v-img>
                    </v-card-text>
                     <v-card-actions>
                    
                    <v-btn 
                    class="success white--text" 
                      router :to='"/user/myproduct/edit/"+item.id'
                    >Edit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                    class="error white--text" 
                      @click="deleteItem(item.id)"
                    >Delete</v-btn>
                </v-card-actions>
               </v-card>  
                 </v-col>
               </v-row>
      
      </v-tab-item>
       <v-tab-item
       
      >
     
            <v-row>
                 <v-col
                 v-for="item in loadpendingproduct" :key="item.id" 
                 class="col-md-6 col-sm-12 col-xs-12"
                 >
                  <v-card >
                    <v-card-title
                    class="blue lighten--2 white--text"
                    
                    >
                      {{item.nProduct}}
                    </v-card-title>
                    <v-card-text>
                      <v-img
                      height="200px"
                      :src="item.images[0]"
                      ></v-img>
                    </v-card-text>
                     <v-card-actions>
                    
                    <v-btn 
                    class="success white--text" 
                      router :to='"/user/myproduct/edit/"+item.id'
                    >Edit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                    class="error white--text" 
                      @click="deleteItem(item.id)"
                    >Delete</v-btn>
                </v-card-actions>
               </v-card>  
                 </v-col>
               </v-row>
      
      </v-tab-item>
    </v-tabs-items>
              
                     

           </div>
        
           
</template>

<script>
    export default {
        data(){
            return{
              tab: 'Approved',
        itemss: [
          'Approved', 'Rejected', 'Approve Pending',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
               
         } },
        methods:{
           deleteItem(id)
           {
              // console.log(id)
              this.$store.dispatch('deleteItem',id)
           }
           
        },
        computed:{
          items()
          {
            return this.$store.getters.loadmyProducts
          },
          loadpendingproduct()
          {
            return this.$store.getters.loadpendingproduct
          },
          rejectedProducts()
          {
            return this.$store.getters.rejectedProducts
          },
        },
    }
</script>

