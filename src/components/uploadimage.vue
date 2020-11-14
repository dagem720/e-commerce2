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
                            accept="image/*"
                            @change="upload"
                            >
                    </v-file-input>
                    
                </v-form>
            </v-card-text>
         </v-card>
    
</template>

<script>
//import * as firebase from 'firebase'
export default {
    data(){
        return{
            file:null
        }
    },
    methods:{
       upload(e)
       {
            this.$store.dispatch('upload',e)
       }

    },
    computed:{
        user()
        {
            return this.$store.getters.user2
        }
    }
}
</script>