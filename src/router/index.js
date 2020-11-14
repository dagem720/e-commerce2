import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import myaccount from '../components/myaccount.vue'
import register from '../components/register.vue'
import electronics from '../components/electronics.vue'
import food from '../components/food.vue'
import furnitures from '../components/furnitures.vue'
import clothes from '../components/clothes.vue'
import additem from '../components/additem.vue'
import myproducts from '../components/myproducts.vue'
import upload from '../components/uploadimage.vue'
import product from '../components/product.vue'
import myproduct from '../components/myproduct.vue'
import uploads from '../components/uploads.vue'
import notifications from '../components/notifications.vue'
import Header from '../views/Header.vue'
import tv from '../components/Electronics/tv.vue'
import mobile from '../components/Electronics/mobile.vue'
import Laptop from '../components/Electronics/laptop.vue'
import addHomeImages from '../components/addHomeimages.vue'
import mycart from '../components/mycart.vue'
import editProduct from '../components/editProduct.vue'
import vegetables from '../components/Food/vegetable.vue'
import beef from '../components/Food/beef.vue'
import others from '../components/Food/others.vue'
import othersClothes from '../components/Clothes/others.vue'
import tshirts from '../components/Clothes/t-shirt.vue'
import jackets from '../components/Clothes/jackets.vue'
import shoes from '../components/Clothes/shoes.vue'
import diningTable from '../components/furnitures/diningTable.vue'
import kitchencabinets from '../components/furnitures/kitchencabinets.vue'
import othersfurni from '../components/furnitures/others.vue'
import sofa from '../components/furnitures/sofa.vue'
import approverequest from '../components/approvependingitems.vue'
import users from '../components/users.vue'

import * as firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  
    {
      path:'',
      component:Header,
      children:[
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/admin/approverequest',
          name: 'approverequest',
          component: approverequest,
          meta:{
            requireAuth:true,
            requireAdmin:true
          }
        },
        {
          path: '/admin/addhomeimages',
          name: 'addhomeimages',
          component: addHomeImages,
          meta:{
            requireAuth:true,
            requireAdmin:true
          }
        },
        {
          path: '/admin/users',
          name: 'users',
          component: users,
          meta:{
            requireAuth:true,
            requireAdmin:true
          }
        },
        {
          path: '/uploads',
          name: 'uploads',
          component: uploads,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/upload',
          name: 'upload',
          component: upload,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/user/notifications',
          name: 'notifications',
          component: notifications,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/register',
          name: 'register',
          component: register,
          meta:{
            requireGuest:true
          }
        },
        {
          path:'/myaccount',
          name: 'myaccount',
          component: myaccount,
          meta:{
            requireGuest:true
          }
        },
        {
          path:'',
          name: 'electronics',
          component: electronics,
          children:[
                  {
                    component:tv,
                    path:'/catagories/electronics/tv',
                    name: 'tv',
                  },
                   {
                    component:mobile,
                    path:'/catagories/electronics/mobile',
                    name: 'mobile',
                  },
                  {
                    component:Laptop,
                    path:'/catagories/electronics/laptop',
                    name: 'Laptop',
                  }
          ]
        },
        {
          path:'',
          name: 'food',
          component: food,
          children:[
                  {
                    component:vegetables,
                    path:'/catagories/food/vegetables',
                    name: 'Vegetables',
                  },
                  {
                    component:beef,
                    path:'/catagories/food/beef',
                    name: 'beef',
                  },
                  {
                    component:others,
                    path:'/catagories/food/others',
                    name: 'others',
                  },
                   
          ]
        },
        {
          path:'',
          name: 'furnitures',
          component: furnitures,
          children:[
                  {
                    component:diningTable,
                    path:'/catagories/furnitures/diningtables',
                    name: 'diningTable',
                  },
                  {
                    component:kitchencabinets,
                    path:'/catagories/furnitures/kitchencabinets',
                    name: 'kitchencabinets',
                  },
                  {
                    component:sofa,
                    path:'/catagories/furnitures/sofa',
                    name: 'sofa',
                  },
                  {
                    component:othersfurni,
                    path:'/catagories/furnitures/others',
                    name: 'othersfurni',
                  },
                   
          ]
        },
        {
          path:'',
          name: 'clothes',
          component: clothes,
          children:[
                  {
                    component:tshirts,
                    path:'/catagories/clothes/t-shirts',
                    name: 't-shirts',
                  },
                  {
                    component:jackets,
                    path:'/catagories/clothes/jackets',
                    name: 'jackets',
                  },
                  {
                    component:othersClothes,
                    path:'/catagories/clothes/others',
                    name: 'others',
                  },
                  {
                    component:shoes,
                    path:'/catagories/clothes/shoes',
                    name: 'shoes',
                  },
                   
          ]
        },
        
        {
          path:'/user/additem',
          name: 'additem',
          component: additem,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/user/myproducts',
          name: 'myproducts',
          component: myproducts,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/user/myproduct/edit/:id',
          name: 'editProduct',
          component: editProduct,
          props:true,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/product/:id',
          name: 'product',
          component: product,
         props:true
        },
        {
          path:'/user/mycart',
          name: 'mycart',
          component: mycart,
          meta:{
            requireAuth:true
          }
        
        },
        {
          path:'/user/myproducts/:id',
          name: 'product',
          component: myproduct,
         props:true,
         meta:{
          requireAuth:true
        }
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
      ]
    }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//const uid=firebase.auth().currentUser.uid

router.beforeEach((to,from,next)=>{  
    window.scrollTo(0, 0);
   
    
if(to.matched.some(record=>record.meta.requireAuth))
  {
    if(!firebase.auth().currentUser)
  {
    
    next({
      path:'/myaccount',
      query:{
        redirect:to.fullpath
      }
    })
  }
  
  else
  {
    if(to.matched.some(record=>record.meta.requireAdmin))
    {
    let type=''
    const userid=firebase.auth().currentUser.uid
   firebase.database().ref('users2/'+userid).once('value').then((data)=>{
      type=data.val().aTcustomer
  console.log(type)
  
   
     if(type=='Admin')
     {
       next()

     }
     else{
      next({
        path:'/',
        query:{
          redirect:to.fullpath
        }
      })
     }
    })  
  }
   else{
     next()
   }
  
   // eslint-disable-next-line no-inner-declarations
  
  
  

}}
  else if(to.matched.some(record=>record.meta.requireGuest))
  {
    if(firebase.auth().currentUser)
  {
   
    next({
      path:'/',
      query:{
        redirect:to.fullpath
      }
    })
  }
  else{
    next()
  }
  }
  else{
    next()
  }
 
 
}


)


export default router
