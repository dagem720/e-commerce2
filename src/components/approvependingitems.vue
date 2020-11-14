<template>
    
           <div class="container">
               <h3 class="container">Approval Requests</h3>
               <v-card  v-for="item in items" :key="item.id" class="my-3">
                  <v-row >
                    <v-col
                 
                 class="col-md-6 col-sm-12 col-xs-12"
                 >
                  <div class="text-h5 ma-3">
                               <div >Name: {{item.nProduct}}</div>
                                    <div >Description: {{item.dProduct}}</div>
                                    <div>Current Price:{{item.cpProduct}}</div>
                                    <div>Catarory:{{item.cProduct}}</div>
                                
                                    
                            </div>
                            
                  <v-btn 
                    class="success white--text ma-2" 
                      @click="Approve(item.id)"
                    >Approve</v-btn>
                    
                    <v-btn 
                    class="error white--text  ma-2" 
                      @click="Decline(item.id)"
                    >Decline</v-btn>
                 </v-col>
                 
                 <v-col
                 
                 class="col-md-6 col-sm-12 col-xs-12"
                 > 

                      <v-carousel
                      height="300px"
                      >
                          <v-carousel-item
                          v-for="(img,i) in item.images" :key="i"
                          >
                                 <v-img
                                 :src="img"
                                 height="300px"
                                 ></v-img>
                          </v-carousel-item>
                      </v-carousel>
                    
                    
               
                 </v-col>
                  
                 
               </v-row>
               </v-card>
               
                     

           </div>
        
           
</template>

<script>
    export default {
        data(){
            return{
               
         } },
        methods:{
        
           Decline(id)
           {
               this.$store.dispatch('Decline',id)
           },
           Approve(id)
           {
              // console.log(id)
               this.$store.dispatch('Approve',id)
           }
        },
        computed:{
          items()
          {
            return this.$store.getters.notapproveditems
          },
        },
    }
</script>

