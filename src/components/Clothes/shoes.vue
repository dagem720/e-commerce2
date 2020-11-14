<template>
  
      <v-col cols="12"
      sm="12" md="9"
      >
    <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
      
       <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Showing 1-12 of 200 products</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
            </v-col>
          </v-row>
          <v-divider class="my-1"></v-divider>
          <div class="row text-center">
            
            <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in clotheitems">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="pro.images[0]"
                  >
                    <div class="text-center mt-2">
                      <v-btn   text>{{pro.nProduct}} </v-btn>
                    </div>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn  class="" outlined @click="loadProduct(pro.id)">VIEW</v-btn>
                      </div>
                      

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                   <div   ><v-btn class="green--text" dense outlined small @click="addtoCart(pro.id)">Add to cart</v-btn></div>
                    <div>${{pro.cpProduct}}</div>{{pro.Date}}
                  </v-card-text>

                </v-card>
              </v-hover>
            </div>
          </div>
         <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      
    >
      
      <v-card>
        <v-card-title class="headline">
          You are not Logged In
        </v-card-title>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="login"
          >
            Login
          </v-btn>
         <v-btn
            color="error darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        
     

       <v-snackbar
      v-model="snackbar"
      color="green"
      dense
    >
      Added to Cart Sucessfully

      
    </v-snackbar> 
              </v-col>
</template>

<script>
    export default {
      data(){
        return{
           select:'Date',
          dialog:false,
          snackbar:false,
          options: [
                'Date',
                'Most Sold',
                'Price: Low to High',
                'Price: High to Low',
            ],
             breadcrums: [
                {
                    text: 'Catagories',
                    disabled: false,
                   
                },
                {
                    text: 'Clothes',
                    disabled: false,
                   
                },
                {
                    text: 'Shoes',
                    disabled: true,
                    
                },
            ],
        }
      },
         methods:{
   
  
        loadProduct(id) {
                this.$router.push('../../product/'+ id)
              },
             addtoCart(detail)
              {
                if(this.user.loggedIn)
                {
                     this.$store.dispatch('addtoCart',detail)
                     this.snackbar=true

                }
                else{
                    this.dialog=true
                }
                  
                //console.log(detail)
               
              },
              login()
              {
                this.dialog = false
                this.$router.push('/myaccount')
              },
              
 
         
     
        },
        computed: {
          clotheitems()
          {
            if(this.select == 'Price: High to Low'){
              return this.$store.getters.ClotheitemsPricehightolow.filter((item)=>{
            return item.typeofCatagory === 'Shoes' && item.cProduct==='Clothes'
          })
            }
            if(this.select == 'Price: Low to High'){
              return this.$store.getters.ClotheitemsPricelowtohigh.filter((item)=>{
            return item.typeofCatagory === 'Shoes' && item.cProduct==='Clothes'
          })
            }
            if(this.select == 'Most Sold'){
              return this.$store.getters.Clotheitemsmostsold.filter((item)=>{
            return item.typeofCatagory === 'Shoes' && item.cProduct==='Clothes'
          })
            }
        
           return this.$store.getters.ClotheitemsDate.filter((item)=>{
            return item.typeofCatagory === 'Shoes' && item.cProduct==='Clothes'
          })
         
            
             },
       user(){
              return this.$store.getters.user
                  },
            Product()
            {
               return this.$store.getters.loadProduct(this.id)
               //console.log(this.id)
            }


        },
    }
</script>

<style lang="scss" scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>