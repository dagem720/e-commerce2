<template>
  <!-- <div class="header">
    
    <v-navigation-drawer
      width="310" 
      dark 
       
      right 
      v-model="drawer" 
       
      fixed
    >
    <v-list>
    <v-list
    v-if="user.loggedIn"
    class="text-center"
    >
      <v-avatar 
                  size="100"
                  
          >
          <v-img
          :src="PP"
          alt="John"
          >
         
          </v-img>
           
          </v-avatar>
        <v-list-item-content class="text-center"><v-btn router to="/upload">{{cUser}}</v-btn></v-list-item-content>
    </v-list>
<hr>
<v-list-item
 router to="/"
 
        >
          <v-list-item-icon>
            <v-icon class="white--text">home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action class="white--text">
                    <template v-slot:activator>
                          <v-list-item-icon>
                          <v-icon class="white--text">home</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title class="white--text">Catagories</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item-group  class="white--text" >
                        <v-list-item v-for="(item, i) in Catagories" :key="i" router :to="item.link">

                            <v-list-item-content style="margin-left:10%">
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list-group>
      <v-list-item
        
       v-for="(item, index) in items"  :key="index"
        router :to="item.link"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      <v-list-item
        
       @click="signout"
        >
          <v-list-item-icon>
            <v-icon class="white--text">exit_to_app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">SignOut</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      color="indigo darken-2"
      dark
      
     
    >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>Dagi Online Market</v-toolbar-title>
  
     <v-btn text style="margin-top:7px;" router to="/" class="hidden-sm-and-down" >Home</v-btn>
     
     <v-menu bottom offset-y >

                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on" style="margin-top:7px;" class="hidden-sm-and-down">
                       Catagories
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item 
                    v-for="(item, index) in Catagories" 
                    :key="index" 
                    router :to="item.link"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>
      <v-btn text style="margin-top:7px;" router to="/user/additem" class="hidden-sm-and-down" v-if="user.loggedIn">Add item</v-btn>
     <v-btn text style="margin-top:7px;" router to="/user/myproducts" class="hidden-sm-and-down" v-if="user.loggedIn">my products</v-btn>
     
     <v-spacer></v-spacer>
      <v-btn
      router to="/upload"
      class="hidden-sm-and-down"
        text
         v-if="user.loggedIn"
         height="50px"
         
      >
      <v-avatar
      >
      <img
        :src="PP"
        alt="John"
      >
    </v-avatar>
        {{cUser}}
        
      </v-btn>
      
      <v-btn  text router to="/myaccount" class="hidden-sm-and-down"  style="margin-top:7px;" v-if="!user.loggedIn">
      My Account <v-icon right>person</v-icon> 
      </v-btn>
      <v-btn text class="hidden-sm-and-down" @click="signout" v-if="user.loggedIn"  style="margin-top:7px;">
        signout
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      

      
    </v-app-bar>
   
 </div> -->
 <div>
   <v-navigation-drawer
      width="310" 
      dark 
       
      right 
      v-model="drawer" 
       
      fixed
    >
    <v-list>
    <v-list
    v-if="user.loggedIn"
    class="text-center"
    >
      <v-avatar 
                  size="100"
                  
          >
          <v-img
          :src="UserDetail.PP"
          alt="John"
          >
         
          </v-img>
           
          </v-avatar>
         
        <v-list-item-content class="text-center"><v-btn router to="/upload"> <v-icon>mdi-account-circle</v-icon>{{UserDetail.fname}}</v-btn></v-list-item-content>
    </v-list>
<hr>
<v-list-item
 router to="/"
 
        >
          <v-list-item-icon>
            <v-icon class="white--text">home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action class="white--text">
                    <template v-slot:activator>
                          <v-list-item-icon>
                          <v-icon class="white--text">home</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title class="white--text">Catagories</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item-group  class="white--text" >
                        <v-list-item v-for="(item, i) in Catagories" :key="i" router :to="item.link">

                            <v-list-item-content style="margin-left:10%">
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list-group>
      <v-list-item
        
       v-for="(item, index) in items"  :key="index"
        router :to="item.link"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item
       v-if="user.loggedIn"
       router to="/user/mycart"
        >

          <v-list-item-icon>
            <v-badge
          :content="UserDetail.mycart.length"
          value="2"
          color="green"
          overlap
        >
          
            <v-icon class="white--text">mdi-cart</v-icon>
            </v-badge>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">My Cart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
      v-if="user.loggedIn"
       router to="/user/notifications"
        >

          <v-list-item-icon>
            <v-badge
          :content="UserDetail.myitems.length"
          value="2"
          color="green"
          overlap
        >
          
            <v-icon class="white--text">mdi-bell</v-icon>
            </v-badge>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Notification</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      <v-list-item
        
       @click="signout"
        >
          <v-list-item-icon>
            <v-icon class="white--text">exit_to_app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">SignOut</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
       <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title
        style="width: 350px"
      >
        <v-btn  class="white--text" style="text-decoration: none" text><v-img src="../assets/pngegg.png" height="50px" width="50px"></v-img>&nbsp;GetIt</v-btn>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      
       
       
        
       
      <v-btn text  v-if="user.loggedIn">
        <v-icon>mdi-account-circle</v-icon>{{UserDetail.fname}}
      </v-btn>
      <v-btn  icon v-if="user.loggedIn"
      router to="/user/notifications"
      >
        <v-badge
          :content="UserDetail.myitems.length"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn   icon router to='/user/mycart' v-if="user.loggedIn">
        <v-badge
          :content="UserDetail.mycart.length"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
     

        <v-btn
        v-if="user.loggedIn"
          icon @click="signout"
        >
        <v-icon>
      exit_to_app
    </v-icon>
        </v-btn>
 
    
    <div v-if="!user.loggedIn">
       <v-btn  text router to="/myaccount" class="hidden-sm-and-down"  style="margin-top:7px;" v-if="!user.loggedIn">
      Login <v-icon right>person</v-icon> </v-btn >
      <v-btn  text router to="/register" class="hidden-sm-and-down"  style="margin-top:7px;" v-if="!user.loggedIn">
      Register <v-icon right>person</v-icon> </v-btn >
      </div>
    </v-app-bar>
    <v-bottom-navigation
       
        color="primary"
        horizontal
        >
       <v-btn
       router
       to='/'
       >
         Home
       </v-btn>
        <v-menu bottom offset-y >

                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on"  class="hidden-sm-and-down">
                       Catagories
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item 
                    v-for="(item, index) in Catagories" 
                    :key="index" 
                    router :to="item.link"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>
      <v-btn
        v-if="user.loggedIn && UserDetail.type=='seller'"
       router
       to='/user/myproducts'
       >
         My Products
       </v-btn>
        <v-btn
        v-if="user.loggedIn && UserDetail.type=='seller'"
       router
       to='/user/additem'
       >
         Add Item
       </v-btn>
       
       <v-btn
        v-if="user.loggedIn && UserDetail.type=='Admin'"
       router
       to='/admin/addhomeimages'
       >
         Add Home Images
       </v-btn>
       <v-btn
        v-if="user.loggedIn && UserDetail.type=='Admin'"
       router
       to='/admin/approverequest'
       >
         Approve Requests
       </v-btn>
        <v-btn
        v-if="user.loggedIn && UserDetail.type=='Admin'"
       router
       to='/admin/users'
       >
         Users
       </v-btn>
      </v-bottom-navigation>
    <router-view/>
    <Footer/>
   
  </div>
</template>


<script>
import Footer from './Footer'
export default {
  
  components:{
    Footer
  },
  
  data()
  {
    return{
     
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      drawer:false,
      
            
      Catagories:[
        {title:'Electronics',link:'/catagories/electronics/tv'},
        {title:'Clothes',link:'/catagories/clothes/t-shirts'},
        {title:'Furnitures',link:'/catagories/furnitures/sofa'},
        {title:'Food',link:'/catagories/food/vegetables'}
        ],
        items:[
          {name:'My Account',icon:'person',link:'/myaccount'},
          
          ]
    }
  },
  methods:{
    signout(){
      this.$store.dispatch('signout').then(()=>{
        this.$router.push('/')
      })
    }
  },
  computed:{
    user(){
      return this.$store.getters.user
    },
    
    UserDetail()
    {
      
      return this.$store.getters.UserDetail
    }
  }
}
</script>
