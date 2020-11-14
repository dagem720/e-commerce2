<template>
    <div class="container">
       
           <v-card>
               <v-card-title>Edit Item</v-card-title>
               <v-card-text class="text-h5 ma-3"> 
                   <v-row>
                       <v-col
                        class="col-md-6 col-sm-6 col-xs-12"
                       >
                       
                         <p class="text-md-body-1 font-weight-black" row>Name: {{Product.nProduct}}</p>
                         
                        <v-row
                         v-if="editName"
                        >
                            <v-col
                         
                         >
                         <v-text-field
                        v-model="newName"
                        label="Enter New Name"
                       ref="editplace"
                        ></v-text-field>
                         </v-col>
                         <v-col
                         cols="4"
                         >
                         <v-btn class="primary" @click="edit('nProduct')">Edit</v-btn>
                         </v-col>
                        </v-row>
                         <v-checkbox label="Edit Name" v-model="editName"></v-checkbox>
                        <p class="text-md-body-1 font-weight-black">Current Price: {{Product.cpProduct}} </p> <v-row
                         v-if="editcP"
                        >
                            <v-col
                         cols="8"
                         >
                         <v-text-field
                         ref="editplace"
                        v-model="newcP"
                        label="Enter New Price"
                       
                        ></v-text-field>
                         </v-col>
                         <v-col
                         cols="4"
                         >
                         <v-btn class="primary" @click="edit('cpProduct')">Edit</v-btn>
                         </v-col>
                        </v-row>
                         <v-checkbox label="Edit Price" v-model="editcP"></v-checkbox>
                        <p class="text-md-body-1 font-weight-black">Catagory: {{Product.cProduct}}</p> <v-row
                         v-if="editCatagory"
                        >
                            <v-col
                         cols="8"
                         >
                         <v-text-field
                         ref="editplace"
                        v-model="newCatagory"
                        label="Enter New Catagory"
                       
                        ></v-text-field>
                         </v-col>
                         <v-col
                         cols="4"
                         >
                         <v-btn class="primary" @click="edit('cProduct')">Edit</v-btn>
                         </v-col>
                        </v-row>
                         <v-checkbox label="Edit Catagory" v-model="editCatagory"></v-checkbox>
                        <p class="text-md-body-1 font-weight-black">Description: {{Product.dProduct}}</p> <v-row
                         v-if="editDesc"
                        >
                            <v-col
                         cols="8"
                         >
                         <v-text-field
                         ref="editplace"
                        v-model="newDesc"
                        label="Enter New Description"
                       
                        ></v-text-field>
                         </v-col>
                         <v-col
                         cols="4"
                         >
                         <v-btn class="primary" @click="edit('dProduct')">Edit</v-btn>
                         </v-col>
                        </v-row>
                         <v-checkbox label="Edit Description" v-model="editDesc"></v-checkbox>
                       </v-col>
                       <v-col class="col-md-6 col-sm-6 col-xs-12">
                            <v-carousel height="300px"
                            
                            >
                                <v-carousel-item
                                v-for="(image,i) in Product.images" :key="i"
                                
                                >
                                        <v-img
                                        :src="image"
                                        ></v-img>
                                </v-carousel-item>
                            </v-carousel>
                       </v-col>
                   </v-row>
               </v-card-text>
           </v-card>
              <v-snackbar
      v-model="snackbar"
      color="green"
      dense
    >
      Edited Sucessfully

      
    </v-snackbar> 
    </div>
</template>

<script>
    export default {
        data(){
            return{
                snackbar:false,
                newName:'',
                newcP:'',
                newCatagory:'',
                newDesc:'',
                editName:false,
                editDesc:false,
                editcP:false,
                editCatagory:false
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
            edit(type)
            {
                let editItem={
                            newName:this.newName,
                            id:this.id,
                            type:type         
                }
                if(type=='cpProduct')
                {
                     editItem={
                            newName:this.newcP,
                            id:this.id,
                            type:type         
                }
                }
                if(type=='dProduct')
                {
                     editItem={
                            newName:this.newDesc,
                            id:this.id,
                            type:type         
                }
                }
                if(type=='cProduct')
                {
                     editItem={
                            newName:this.newCatagory,
                            id:this.id,
                            type:type         
                }
                }
                 this.$store.dispatch('Edit',editItem)
                //console.log(editItem)
                this.$refs.editplace.reset()
                this.snackbar=true
                this.editName=false
                this.editDesc=false
                this.editcP=false
                this.editCatagory=false
               
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>