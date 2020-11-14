<template>
    <div class="container">
                <p class="display-2">my cart </p>
                <v-card
               
                v-for="(mycart,i) in UserDetail.mycart" :key="i"
                class="ma-1"
                height="300px"
                >
                    
                    <v-card-text>
                        <v-row>
                            <v-col
                            class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            >
                            <v-card-title>{{mycart.nProduct}}</v-card-title>
                            <div class="text-h5">
                               
                                    <div >Description: {{mycart.dProduct}}</div>
                                    <div>Current Price:{{mycart.cpProduct}}</div>
                                    <div>Catarory:{{mycart.cProduct}}</div>
                                
                                    
                            </div>
                            
                                    <div>
                                        <v-btn class="info ma-1" @click="Buy(mycart.nProduct,mycart.idproduct)">Buy</v-btn>
                                        <v-btn class="error ma-2" @click="deletefromcart(mycart.id)">Delete from my cart</v-btn>
                                    </div>
                            </v-col>
                            <v-col
                            class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            >
                        
                            <v-carousel height="250px">
                                <v-carousel-item v-for="(img,i) in mycart.images" :key="i">
                                        <v-img
                                        :src="img"
                                        ></v-img>
                                </v-carousel-item>
                            </v-carousel>
                            </v-col>
                        </v-row>
                    </v-card-text>

                </v-card>
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
  
    </div>
</template>

<script>
    export default {
        data(){return{
                snackbar:false,
        }},
        computed:{
            
            UserDetail()
            {
                return this.$store.getters.UserDetail
            }
        },
        methods:{
            deletefromcart(id)
            {
                console.log(id)
                this.$store.dispatch('deletefromcart',id)
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