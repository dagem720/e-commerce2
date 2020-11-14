<template>
    <div class="container col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-6" >
            <h1>My acocunt</h1>
            <v-card>
                <v-alert v-model="alert" class="error" type="error" dismissible>{{error}}</v-alert>
                <v-card-title class="indigo darken-2 white--text">Login</v-card-title>
                <v-card-text>
                    <v-text-field label="Email" type="text" v-model="logindata.aEmail"></v-text-field>
                    <v-text-field label="Password" type="password" v-model="logindata.aPassword" ></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div><v-btn 
                        class="indigo darken-2" 
                        align="center"  
                        dark @click="login"
                        :loading="loading"
                        >
                        Login
                        </v-btn></div>  
                    </v-card-actions>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                       
                        <strong class="mt-9">
                             
                            <a >
                                <router-link to="./register">create account</router-link>
                            </a>
                        </strong>
                        
                    </v-card-actions>
                    
                </v-card-text>
                
            </v-card>
            
    </div>
</template>

<script>
    export default {
      
        data()
        {
            return{
                alert:false,
                logindata:{
                    aEmail:'',
                    aPassword:''
                }
            }
        },
        methods:{
            login()
            {
               const logindata={
                    aEmail:this.logindata.aEmail,
                    aPassword:this.logindata.aPassword
                }
                this.$store.dispatch('login',logindata)
            }
        },
        computed:{
             error()
            {
                return this.$store.getters.error
            },
            user()
            {
                return this.$store.getters.user2
            },
            loading()
            {
                return this.$store.getters.loading
            }
        },
        watch:{
            user(value)
            {
                if(value != null || value != undefined)
                {
                    this.$router.push('/')
                }
            },
             error(value)
                    {
                        if(value!=null|| value!=undefined)
                        {
                        this.alert=true
                        }
                    }
                            }
                        }
</script>

<style lang="scss" scoped>

</style>