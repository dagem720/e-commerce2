<template>
    <div class="container">
        
            <h2>Add Home page Carousel Images</h2>
        <v-form >
                   <v-file-input
                            label="Select Image"
                            filled
                            prepend-icon="mdi-camera"
                            multiple
                            @change="upload"
                            accept="image/*"
                            >
                    </v-file-input>
                    <v-btn
          color="primary"
          @click="addImage"
        >
          Add Image
        </v-btn>
               <v-divider></v-divider>     
                </v-form>
                <h2>Add Home page Catagories Images</h2>
        <v-form >
                    <v-select
                    label="select catagory"
                    :items='items'
                     v-model="c.catagory"
                    ></v-select>
                   <v-file-input
                            label="select image"
                            filled
                            prepend-icon="mdi-camera"
                            
                            @change="upload2"
                            >
                    </v-file-input>
                    <v-btn
          color="primary"
          @click="addImage2"
        >
          Add 
        </v-btn>
                    
                </v-form>
         

        
    
        
    

           
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
                items:[
                    'Electronics',
                    'Food',
                    'Clothes',
                    'Furnitures'
                ],
                c:{
                    catagory:'',
                    fileimage:''
                },
                e1: 1,
               file:[],
            }
        },
        methods:{
             upload(e)
       {
           this.file=e
     
       },
       upload2(e)
       {
           this.c.fileimage=e
     
       },
       
            addImage()
            {
                
               
           // console.log(this.file)
               //this.$store.dispatch('addHomeImages',this.file)
                    for(const f in this.file)
                    {
                       this.$store.dispatch('addHomeImages',this.file[f]) 
                    }
           
      
        },
        addImage2()
            {
                
               
            //console.log(this.c)
               //this.$store.dispatch('addHomeImages',this.file)
                    // for(const f in this.file)
                    // {
                        this.$store.dispatch('addHomeImages2',{catagory:this.c.catagory,file:this.c.fileimage}) 
                    // }
           
      
        },
        },
        computed:{
            addimageloader()
            {
                return this.$store.getters.addimageloader
            },
            
        }
    }
</script>

<style lang="scss" scoped>

</style>