<template>
    <div class="container">
        
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Add detail about Product</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Add pictures of product</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Finish</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-form ref="form">
         <v-card>
               
                <v-card-text>
                  <v-row >
                      <v-col class="col-xs-12  col-md-6">
                            <v-select
                    label="select catagory"
                    :items='items'
                     v-model="products.cProduct"
                    ></v-select>
                      </v-col>
                       <v-col class="col-xs-12  col-md-6" v-if="products.cProduct=='Electronics'">
                            <v-select 
                    label="select Type of Electronics"
                    :items="elecitems"
                    v-model="products.typeofCatagory"
                    ></v-select>
                      </v-col>
                      <v-col class="col-xs-12  col-md-6" v-if="products.cProduct=='Food'">
                            <v-select 
                    label="select Type of Food"
                  :items="fooditems"
                  v-model="products.typeofCatagory"
                    ></v-select>
                      </v-col>
                      <v-col class="col-xs-12  col-md-6" v-if="products.cProduct=='Furnitures'">
                            <v-select 
                    label="select Type of Furniture"
                    :items="furniitems"
                    v-model="products.typeofCatagory"
                    ></v-select>
                      </v-col>
                      <v-col class="col-xs-12  col-md-6" v-if="products.cProduct=='Clothes'">
                            <v-select 
                    label="select Type of Clothe"
                  :items="clotheitems"
                  v-model="products.typeofCatagory"
                    ></v-select>
                      </v-col>
                      <v-col class="col-xs-12  col-md-6">
                          <v-text-field
                    type="text"
                    label="Name of the product"
                    v-model="products.nProduct"
                    ></v-text-field>
                      </v-col>
                       <v-col class="col-xs-12  col-md-6">
                          <v-text-field
                    type="number"
                    label="Number of products on the stock"
                    v-model="products.noProduct"
                    ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                          <v-textarea
                    label="small discription"
                    v-model="products.dProduct"
                    ></v-textarea>
                      </v-col>
                     
                    </v-row>

                   
                    
                   
                    
                    <v-checkbox
                    v-model="products.onSale"
                    label="on sale?"
                    ></v-checkbox>
                    <v-row
                    v-if="products.onSale"
                    >
                        <v-col
                        cols="12"
                       
                       sm="3"
                        >
                            <v-text-field
                            v-model="products.cpProduct"
                                outlined
                                
                                type="number"
                                label="current price of single item"
                                ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="3"
                        >
                             <v-text-field
                             v-model="products.ppProduct"
                                outlined
                                label="Previous price of single item"
                                
                                type="number"
                                ></v-text-field>
                        </v-col>
                    </v-row>
                     <v-col
                        cols="12"
                        sm="3"
                        v-if="!products.onSale"
                        >
                             <v-text-field
                             v-model="products.cpProduct"
                                outlined
                                label="current price of single item"
                                
                                type="number"
                                ></v-text-field>
                        </v-col>
                    
                    
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                    class="indigo darken-2 white--text" 
                    @click="addDetail"
                    :loading="loading"

                    >Next</v-btn>
                </v-card-actions>
            </v-card>

      </v-form>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
         
          height="200px"
        >
        <v-form ref="imageform" >
                   <v-file-input
                            label="upload profile picture"
                            filled
                            prepend-icon="mdi-camera"
                            accept="image/*"
                            @change="upload"
                            >
                    </v-file-input>
                    <v-btn
          color="primary"
          @click="addImage"
        >
          Add Image
        </v-btn>
                 <v-progress-linear :value="uploadProgress" height="20" class="ma-2" striped>Upload is {{uploadProgress}}% done</v-progress-linear>   
                </v-form>
                <v-btn @click="next">Next</v-btn>
                
                
        </v-card>

        
    
        
      </v-stepper-content>

      <v-stepper-content step="3" >
        <v-card 
        v-if="!added"
         height="200px"

        >
        loading
        </v-card>
        
        <v-card
          
         v-else
          height="350px"
        >
          <v-row>
            <v-col class="col-xs-12 col-md-6" row>
          Product Name: {{loadProduct.product.nProduct}}<br>
          Product Catagory: {{loadProduct.product.cProduct}}<br>
          Product sub Catagory: {{loadProduct.product.typeofCatagory}}<br>
          Product Description: {{loadProduct.product.dProduct}}<br>
          product price:{{loadProduct.product.cpProduct}}<br>
            </v-col>
             <v-col class="col-xs-12 col-md-6">
            <v-carousel height="300px">
              <v-carousel-item v-for="(image,i) in loadProduct.images2" :key="i">
                <v-img
                :src="image"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
            </v-col>
          </v-row>
        </v-card>

        <v-btn
          color="primary"
          @click="finish"
          class="ma-1"
        >
          Finish
        </v-btn>
        <v-btn
          color="primary"
          @click="cancel"
          class="ma-1"
        >
          Cancel
        </v-btn>

        
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

       <v-snackbar
      v-model="snackbar"
      color="green"
      dense
    >
      Added Sucessfully

      
    </v-snackbar>  
     <v-snackbar
      v-model="snackbar2"
      color="red lighten-1"
      dense
    >
      Cenceled

      
    </v-snackbar>  
    </div>
</template>

<script>
/*es-lint disable*/
//import * as firebase from 'firebase'
    export default {
        data()
        {
            /*disable eslint*/
            return{
              added:false,
              snackbar:false,
              snackbar2:false,
                e1: 1,
               file:'',
                items:[
                    'Electronics',
                    'Food',
                    'Clothes',
                    'Furnitures'
                ],
                furniitems:[
                  'Sofa',
                  'Dining-Tables',
                  'Kitchen-Cabinates',
                  'Others'
                ],
                elecitems:[
                  'Tv',
                  'Mobiles',
                  'Laptops',
                  'Others'
                ],
                fooditems:[
                  'Vegetables',
                  'Beef',
                  'Others'
                ],
                clotheitems:[
                  'T-Shirts',
                  'Shoes',
                  'Jackets',
                  'Others'
                ],
                products:{
                     cProduct:'',
                    nProduct:'',
                    dProduct:'',
                    noProduct:'',
      
                    ppProduct:'',
                    cpProduct:'',
                    onSale:false,
                   typeofCatagory:''
                },
                
            }
        },
        methods:{
          next()
          {
                        
             this.$store.dispatch('loadaddedproduct').then(()=>{
                 this.added=true
                 this.e1= 3
             })
            
          },
            addDetail()
            {
              
                let addItem={
                    cProduct:this.products.cProduct,
                     typeofCatagory:this.products.typeofCatagory,
                    nProduct:this.products.nProduct,
                    dProduct:this.products.dProduct,
                    noProduct:this.products.noProduct,
              
                    cpProduct:this.products.cpProduct,
                    onSale:this.products.onSale,
                  
                }
                if(this.products.onSale)
                {
                     addItem={
                    cProduct:this.products.cProduct,
                    typeofCatagory:this.products.typeofCatagory,
                    nProduct:this.products.nProduct,
                    dProduct:this.products.dProduct,
                    noProduct:this.products.noProduct,
                    duct:this.products.duct,
                    cpProduct:this.products.cpProduct,
                    ppProduct:this.products.ppProduct,
                    onSale:this.products.onSale,
                    
                }
               
                }
                this.$store.dispatch('addDetail',addItem).then(()=>{
                  this.e1= 2
                })
                
                //console.log(addItem)
                
            },
            addImage()
            {
                
               
            
               this.$store.dispatch('addImage',this.file).then(()=>{
                 
               })
           
           
            },
            finish()
            {
                this.e1= 1
                this.snackbar=true
                this.$refs.form.reset()
                this.$refs.imageform.reset()
                this.products.onSale=false
            },
            cancel()
            {
                this.e1= 1
                this.snackbar2=true
                this.$store.dispatch('productCanceled')
                this.$refs.form.reset()
                this.$refs.imageform.reset()
                this.products.onSale=false
            },
           upload(e)
       {
         
           this.file=e
           
       },
           
               
                // }
                // this.files = e.target.files;
             
   
  

 
          
        },
        computed:{
            loading()
            {
                return this.$store.getters.loading
            },
            uploadProgress()
            {
              return Math.floor(this.$store.getters.uploadProgress)
            },
            loadProduct()
            {
              return this.$store.getters.loadaddedproduct
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>