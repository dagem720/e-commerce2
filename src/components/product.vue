<template>
    <div class="container my-5">
           <v-row>
               <v-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <p>Name: {{Product.nProduct}}</p>
                    <p>Description: {{Product.dProduct}}</p>
                    <p>Current Proce: {{Product.cpProduct}}</p>
                    <p>Catagory: {{Product.cProduct}}</p>
                    <p>Number of Sale: {{Product.numberofSale}}</p>
                    <div row>
                        <v-btn class="success ma-1" @click="addtoCart(Product.id)">Add to Cart</v-btn>
                        <v-btn class="info ma-1" @click="Buy(Product.nProduct,Product.id)">Buy</v-btn>
                    </div>
               </v-col>
               <v-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <v-carousel
                    height="400px"
                    >
                        <v-carousel-item
                        v-for="item in Product.images" :key="item"
                        >
                           <v-img
                           :src="item"
                           >

                           </v-img>
                            
                        </v-carousel-item>
                    </v-carousel>
               </v-col>
           </v-row>
           <v-snackbar
      v-model="snackbar"
      timeout=3000
      color="green"
      top
    >
      Item will be delivered

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      v-model="snackbar1"
      color="green"
      dense
    >
      Added to Cart Sucessfully

      
    </v-snackbar> 
    
    </div>
</template>

<script>
    export default {
        data()
        {
            return{
                dialog: false,
                snackbar1:false,
                snackbar:false
            }
        },

        props:['id'],
        computed:{
            user(){
              return this.$store.getters.user
                  },
            Product()
            {
               return this.$store.getters.loadProduct(this.id)
               //console.log(this.id)
            }
        },
        methods:{
              addtoCart(detail)
              {
                if(this.user.loggedIn)
                {
                     this.$store.dispatch('addtoCart',detail)
                     this.snackbar1=true

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
             Buy(nProduct,idproduct)
            {
                this.snackbar=true
               // console.log(idProduct)
                this.$store.dispatch('Buy',{nProduct:nProduct,idproduct:idproduct})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>