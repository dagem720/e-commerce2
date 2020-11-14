<template>
    <div class="container col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-6" >
            <h1>My acocunt</h1>
            <v-card>
                <v-alert type="error" dismissible v-model="alert">{{error}}</v-alert>
                <v-card-title class="indigo darken-2 white--text">Register</v-card-title>
                <v-card-text>
                    <v-text-field label="First Name" type="text" v-model="signupdata.aFname" :rules="nameRules"></v-text-field>
                    <v-text-field label="Last Name" type="text" v-model="signupdata.aLname" :rules="nameRules"></v-text-field>
                    <v-text-field label="User Name" type="text" v-model="signupdata.aUname" :rules="nameRules"></v-text-field>
                    
                    choose type of customer
                    <v-radio-group row v-model="signupdata.aTcustomer" :rules="nameRules">
                        <v-radio label="seller" class="col-xs-3" value="seller"></v-radio>
                        <v-radio label="Buyer" class="col-xs-3" value="buyer"></v-radio>
                        
                    </v-radio-group >
                    <v-text-field
                    v-if="signupdata.aTcustomer=='seller'"
                    label="Organization"
                    type="text"
                    v-model="signupdata.aOrganazation"
                    :rules="nameRules"
                    ></v-text-field>
                    <v-text-field label="Email" type="text" v-model="signupdata.aEmail" :rules="nameRules"></v-text-field>
                    <v-text-field label="Password" type="password" v-model="signupdata.aPassword" :rules="passwordrules"></v-text-field>
                    <v-text-field label="Confirm Password" type="password" v-model="signupdata.aCpassword" :rules="cPasswordrules"></v-text-field>
                    {{ddd}}
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div><v-btn class="indigo darken-2" align="center"  dark @click="register" :loading="loading">register</v-btn></div>  
                    </v-card-actions>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <strong class="mt-9">
                             
                            <a >
                                <router-link to="/myaccount">Login</router-link>
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
                signupdata:{
                    aFname:'',
                    aLname:'',
                    aUname:'',
                    aTcustomer:'',
                    aEmail:'',
                    aPassword:'',
                   
                    aOrganazation:''

                },
                nameRules:[
                    v => !!v || 'required'
                ],
                passwordrules:[
                        v => !!v || 'Password is required',
                            v => v.length >=8 || 'minimum 8 character',
                        ],
                        cCpasswordrules:[
                        v => v != this.signupdata.aPassword || 'Password doesn\'t match',
                            
                        ],
                        ddd:this.cPasswordrules
            }
        },
        methods:{
            register()
            {
                const signupdata={
                        aFname:this.signupdata.aFname, 
                        aLname:this.signupdata.aLname,
                        aUname:this.signupdata.aUname,
                        aTcustomer:this.signupdata.aTcustomer,
                        aEmail:this.signupdata.aEmail,
                        aPassword:this.signupdata.aPassword,
                        aCpassword:this.signupdata.aCpassword,
                        aOrganazation:this.signupdata.aOrganazation,
       }
                this.$store.dispatch('register',signupdata)
            }
        },
        computed:{
            cPasswordrules(){
                    return this.signupdata.aPassword !=this.signupdata.aCpassword ? "Password do not match" : ''
            },
           

            user()
            {
                return this.$store.getters.user2
            },
            loading()
            {
                return this.$store.getters.loading
            },
            error()
            {
                return this.$store.getters.error
            }
        },
        watch:{
            user(value)
            {
                if(value!=null || value!=undefined)
                {
                    this.$router.push('/')
                }
            },
            error(value)
            {
                if(value!=null||value!=undefined)
                {
                    this.alert=true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>