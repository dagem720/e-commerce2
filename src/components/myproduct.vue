<template>
    <div class="container my-5">
            <v-card >
                
                <v-card-text>
                    <v-row>
                       
                        <v-col
                        cols="2"
                        
                        >
                           <v-row> 
                               <v-col
                               
                        cols="12"
                        v-for="(img,index) in Product.images" :key="index"
                       
                        >
                        
                            <v-img
                            
                            @click="changeImage(index)"
                             :src="Product.images[index]"
                            style="cursor:pointer"
                            width="100px"
                    ></v-img>
                        </v-col>
                           </v-row>
                        </v-col>
                        <v-col
                        cols="5"
                        
                        >
                        
                            <v-img
                            height="300px"
                             :src="Product.images[i]"
                             
                    ></v-img>
                    
                        </v-col>
                        <v-col
                        cols="5"
                        
                        >

                            <h3 class="font-weight-black my-1 detail">Name of Item: <span class="blue--text lighten-3">{{Product.nProduct}}</span></h3>
                            <h3 class="font-weight-black my-1 detail">Catagory of Item: <span class="blue--text lighten-3">{{Product.cProduct}}</span></h3>
                            <h3 class="font-weight-black my-1 detail">Description of Item: <span class="blue--text lighten-3">{{Product.dProduct}}</span></h3>
                            <h3 class="font-weight-black my-1 detail">Current Price of Item: <span class="blue--text lighten-3">{{Product.cpProduct}}</span></h3>
                            <span v-if="Product.onSale">
                                <h3  class="blue--text lighten-3 font-weight-black my-1 detail">The item is OnSale </h3>
                            <h3 class="font-weight-black my-1 detail">Previous Price of Item: <span class="blue--text lighten-3">{{Product.ppProduct}}</span></h3>
                             </span>
                              <h3 class="font-weight-black my-1 detail">Number of products on the stock: <span class="blue--text lighten-3">{{Product.noProduct}}</span></h3>
                            <v-row
                            justify='center'
                            >
                                <v-col
                                
                                align="end"
                                >
                                <v-btn class="primary--text" text>Edit Item</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
    </div>
</template>

<script>
    export default {
        data()
        {
            return{
                
                i:0 
            }
        },

        props:['id'],
        computed:{
           
            Product()
            {
               return this.$store.getters.loadmyProduct(this.id)
               //console.log(this.id)
            }
        },
        methods:{
            changeImage(i)
        {
            this.i=i
        }
        }
    }
</script>

<style lang="scss" scoped>
.detail{
    font-family: Arial, Helvetica, sans-serif;
}
</style>