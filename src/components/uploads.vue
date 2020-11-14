<template>
    
        <v-card>
            <v-card-title
            class="blue white--text text-center"
            
            >
                Add profile picture
                <v-spacer></v-spacer>
                <v-btn
                    class="red lighten-1"
                >
                    <span>Delete</span>
                    <v-icon right>delete</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form >
                   <v-file-input
                            label="upload profile picture"
                            filled
                            prepend-icon="mdi-camera"
                            multiple
                            @change="upload"
                            accept="image/*"
                            >
                    </v-file-input>
                    <v-btn @click="add" >add</v-btn>
                    
                </v-form>
            </v-card-text>
         </v-card>
    
</template>

<script>
//import * as firebase from 'firebase'
export default {
    data(){
        return{
            file:[]
        }
    },
    methods:{
       upload(e)
       {
           this.file=e
            
       },
       add()
       {
          
           for(const f of this.file)
           {
              //let key= f.name+Math.floor(Math.random()*9999999999)
               this.$store.dispatch('add',{file:f})
              
           }
          // console.log(this.file.length)
       }

    },
    computed:{
        user()
        {
            return this.$store.getters.user2
        },
        next()
        {
            return this.$store.getters.next
        }
    }
}
</script>