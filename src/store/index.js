import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

//import product from './product/product.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    //product:product
  },
  state: {
    images:[],
    Keyid:{
      id:'sjhdshb'
    },
    user:{
      loggedIn:false,
      data:null,
      
    },
    cUser:'',
    user2:null,
    PP:null,
    items:[
      
    ],
    homeimages:[],
    catagoryimages:[],
    addimageloader:false,
    Elecitems:[],
    Furniitems:[],
    Clotheitems:[],
    Fooditems:[],
    loading:false,
    myItems:[],
    next:null,
    UserDetail:'',
    uploadProgress:0,
    windowLoad:false,
    notapproveditems:[],
    error:'',
    loadaddedproduct:'',
    users:[]
  },
  getters:{
    next(state)
    {
      return state.next
    },
    user(state){
      return state.user
    },
    user2(state)
    {
      return state.user2
    },
  
    items(state)
    {
      return state.items.sort((a, b) => (a.Date < b.Date) ? 1 : -1)
     
    },
    
    homeimages(state)
    {
      return state.homeimages.slice(1,4)
    },
    catagoryimages(state)
    {
      return state.catagoryimages
    },
   
    loading(state)
    {
      return state.loading
    },
   
    featuredItems ( state) {
      return state.items.slice(0,15)
    },
    loadProduct (state) {
      return (productId) => {
        return state.items.find((item) => {
          return item.id === productId
        })
      }
    },
    loadmyProduct (state) {
      return (productId) => {
        return state.myItems.find((item) => {
          return item.id === productId
        })
      }
    },

   
    loadmyProducts(state)
    {
      return state.myItems.filter((item)=>{
       return item.status=='approved'
      })
      
    },
    rejectedProducts(state)
    {
      return state.myItems.filter((item)=>{
       return item.status=='rejected'
      })
      
    },
  
    images(state)
    {
      return state.images
    },
    addimageloader(state){
      return state.addimageloader
    },
    UserDetail(state)
    {
      return state.UserDetail
    },
    UserDetailmyitems(state)
    {
      return state.UserDetail.myitems.sort((a, b) => (a.date < b.date) ? 1 : -1)
    },
    uploadProgress(state)
    {
      return state.uploadProgress
    },
    windowLoad(state)
    {
      return state.windowLoad
    },
    mostsolditems(state){
      return state.items.sort((a,b)=>(b.numberofSale - a.numberofSale)).slice(0,15)
    },
    ElecitemsDate(state)
    {
      return state.items.sort((a, b) => (a.Date < b.Date) ? 1 : -1)
    },
    ElecitemsPricehightolow(state)
    {
      return state.items.sort((a, b) => (b.cpProduct - a.cpProduct))
    },
    ElecitemsPricelowtohigh(state)
    {
      return state.items.sort((a, b) => (a.cpProduct - b.cpProduct))
    },
    Elecitemsmostsold(state)
    {
      return state.items.sort((a, b) => (b.numberofSale - a.numberofSale))
    },
    FooditemsDate(state)
    {
      return state.items.sort((a, b) => (a.Date < b.Date) ? 1 : -1)
    },
    FooditemsPricehightolow(state)
    {
      return state.items.sort((a, b) => (b.cpProduct - a.cpProduct))
    },
    FooditemsPricelowtohigh(state)
    {
      return state.items.sort((a, b) => (a.cpProduct - b.cpProduct))
    },
    Fooditemsmostsold(state)
    {
      return state.items.sort((a, b) => (b.numberofSale - a.numberofSale))
    },
    FurniitemsDate(state)
    {
      return state.items.sort((a, b) => (a.Date < b.Date) ? 1 : -1)
    },
    FurniitemsPricehightolow(state)
    {
      return state.items.sort((a, b) => (b.cpProduct - a.cpProduct))
    },
    FurniitemsPricelowtohigh(state)
    {
      return state.items.sort((a, b) => (a.cpProduct - b.cpProduct))
    },
    Furniitemsmostsold(state)
    {
      return state.items.sort((a, b) => (b.numberofSale - a.numberofSale))
    },
    ClotheitemsDate(state)
    {
      return state.items.sort((a, b) => (a.Date < b.Date) ? 1 : -1)
    },
    ClotheitemsPricehightolow(state)
    {
      return state.items.sort((a, b) => (b.cpProduct - a.cpProduct))
    },
    ClotheitemsPricelowtohigh(state)
    {
      return state.items.sort((a, b) => (a.cpProduct - b.cpProduct))
    },
    Clotheitemsmostsold(state)
    {
      return state.items.sort((a, b) => (b.numberofSale - a.numberofSale))
    },
    notapproveditems(state)
    {
        return state.notapproveditems.sort((a,b)=>(a.Date<b.Date) ? 1 : -1)
    },
    error(state)
    {
      return state.error
    },
    loadaddedproduct(state)
    {
      return state.loadaddedproduct
    },
    loadpendingproduct(state)
    {
      
     return state.myItems.filter((item)=>{
       return item.status=='pending'
      })
    },
    users(state){
      return state.users 
    }
   
  },
 
  mutations: {
    setAddimageloader(state,value)
    {
      state.addimageloader=value
    },
    setImages(state,value)
    {
      state.images=value
    },
    setUser(state,value)
    {
        state.data=value
        state.user2=value
    },
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
      
    },
    cUser(state,value)
    {
      state.cUser=value
    },
   
  setItems(state,value)
  {
    state.items=value
  },
  setHomeImages(state,value)
  {
    state.homeimages=value
  },
  setCatagoryimage(state,value)
  {
    state.catagoryimages=value
  },
  setLoading(state,value)
  {
      state.loading=value
  },
  setmyItems(state,value)
  {
    state.myItems=value
  },
 
  setNext(state,value)
  {
    state.next=value
  },
  setUserDetail(state,value)
  {
    state.UserDetail=value
  },
  setuploadProgress(state,value)
  {
    state.uploadProgress=value
  },
  setwindowLoad(state,value)
  {
    state.windowLoad=value
  },
  
  setnotapproveditems(state,value)
  {
    state.notapproveditems=value
  },
  setError(state,value)
  {
    state.error=value
  },
  setloadaddedproduct(state,value)
  {
    state.loadaddedproduct=value
  },
  setUsers(state,value)
  {
    state.users=value
  }



 
 
},
actions: {
fetchuserDetail({commit,getters}){
  const userId=getters.user2.id
  firebase.database().ref('/users2/' + userId).on('value',data,err)
  function data(data){
    var userDetail
      const mycart=[]
      const myitems=[]
      firebase.database().ref('/users2/' + userId+'/myitems').once('value').then((data2)=>{
      
      const obj=data2.val()
        //console.log(obj)
        
      for(const key in obj)
      {
        myitems.push({
          id: obj[key].id,
          date: obj[key].date,
          datestring: obj[key].datestring,
          nProduct:obj[key].nProduct,
        })
      }
    
 
      })
     firebase.database().ref('/users2/' + userId+'/mycart').once('value').then((data1)=>{
      
      const obj=data1.val()
        //console.log(obj)
       
      for(const key in obj)
      {
        firebase.database().ref('/users2/' + userId+'/mycart/'+key+'/images/').once('value').then((imagedata)=>{
          const imageobj=imagedata.val()
          const images=[]
          for(let id in imageobj)
          {
            images.push(imageobj[id].imageUrl)
          }
          mycart.push({
            cProduct: obj[key].cProduct,
            cpProduct: obj[key].cpProduct,
            dProduct: obj[key].dProduct,
            images: images,
            nProduct: obj[key].nProduct,
            id:key,
            idproduct:obj[key].id,
          })
        })
        
        
        //console.log(mycart)
      }
    
 
      })
    
      userDetail ={
      email:data.val().aEmail,
      fname:data.val().aFname,
      lname:data.val().aLname,
      type:data.val().aTcustomer,
      uname:data.val().aUname,
      cart:data.val().cart,
      wishlist:data.val().wishlist,
      mycart:mycart,
      PP:data.val().pp,
      myitems:myitems
  }
  
    commit('setUserDetail',userDetail)
    //console.log(userDetail)
      }
    function err(error){
      console.log(error)
    }},

  fetchUser({ dispatch,commit}, user) {
    commit("setLoggedIn", user !== null);
   
   
   
    if (user) {
      commit("setUser", {
        
        id: user.uid,   
      });
   
        dispatch('fetchuserDetail')
        dispatch('fetchmyItems')
        var userId = firebase.auth().currentUser.uid;


        console.log(userId)



        
        
    } 
    else {
      commit("setUser", null);
     
    }
  },
  register({commit},payload)
  {
   commit('setLoading',true)
  firebase.auth().createUserWithEmailAndPassword(payload.aEmail,payload.aPassword).then((newid)=>{
    const newuser={
      id:newid.user.uid
      
    }
   let signupdata={
      aFname:payload.aFname, 
      aLname:payload.aLname,
      aUname:payload.aUname,
      aEmail:payload.aEmail,
      aTcustomer:payload.aTcustomer,
      cart:0,
      wishlist:0
    }
    if(payload.aTcustomer=='seller'){
       signupdata={
        aFname:payload.aFname, 
        aLname:payload.aLname,
        aUname:payload.aUname,
        aEmail:payload.aEmail,
        aOrganazation:payload.aOrganazation,
        aTcustomer:payload.aTcustomer
        
    }
  }
      firebase.database().ref('/users2/').child(newid.user.uid).set(signupdata ).then(()=>{
       
      })
      .catch((error)=>{
        
        console.log(error)
      })
    
    
    commit('setUser',newuser)
    console.log(newuser.id)
  })
  
  .catch((error)=>{
    console.log(error)
    commit('setError',error)
    commit('setLoading',false)
  })
  },
  signout({commit}){
    firebase.auth().signOut().then(()=>{
     
    commit('setUser',null)
    commit("cUser",null)
   
    commit('setmyItems',null)
    commit('setUserDetail',{
      type:null
    })
  })
  .catch(error=>{
    console.log(error)
  })
},
login({commit},payload)
{
  commit("setLoading",true)
firebase.auth().signInWithEmailAndPassword(payload.aEmail,payload.aPassword).then(()=>{
    
    commit("setLoading",false)
    

})
.catch((error)=>{
  console.log(error)
  commit("setLoading",false)
  commit('setError',error)
})
},
upload({getters},payload)
{

  console.log(payload)
          let file=payload
          let uid2=getters.user2.id
          var uploadTask = firebase.storage().ref('profilePictures/' + uid2).put(file)
         


uploadTask.on('state_changed', function(snapshot){
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');

}, function() {

}, function() {

uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  console.log('File available at', downloadURL);
  firebase.database().ref('/users2/'+uid2 ).update({pp:downloadURL})
 
         
});

}
);
},


addDetail({commit,getters},payload)
{
  commit('setuploadProgress',0)
    let uid2=getters.user2.id
  let onSale=payload.onSale
  let addItem={
    cProduct:payload.cProduct,
    nProduct:payload.nProduct,
    dProduct:payload.dProduct,
    noProduct:payload.noProduct,
    typeofCatagory:payload.typeofCatagory,
    cpProduct:payload.cpProduct,
    onSale:payload.onSale,
    Date:new Date().toISOString(),
    creatorID:uid2,
    numberofSale:0,
    status:'pending'
  }
  if(onSale)
  {
     addItem={
      cProduct:payload.cProduct,
      nProduct:payload.nProduct,
      dProduct:payload.dProduct,
      noProduct:payload.noProduct,
      typeofCatagory:payload.typeofCatagory,
      ppProduct:payload.ppProduct,
      cpProduct:payload.cpProduct,
      onSale:payload.onSale,
      Date:new Date().toISOString(),
      creatorID:uid2,
      numberofSale:0,
      status:'pending'
    }
  }
  
  firebase.database().ref('items/newitems').push(addItem).then((data)=>{
    const key=data.key
   // console.log(key)
    
    commit('setNext',key)
    console.log(data.key)
  })
},

addImage({getters,commit},payload)
{
  
  commit('setuploadProgress',0)
 let Kiyi=getters.next
 console.log(Kiyi)
  
  let file=payload
  console.log(file)
  var uploadTask= firebase
  .storage()
  .ref('final/'+Kiyi+'/'+file.name)
  .put(file);


uploadTask.on('state_changed', function(snapshot){
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');
commit('setuploadProgress',progress)
}, 
function() {

}, function() {

uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
console.log('File available at', downloadURL);
var newPostKey = firebase.database().ref('items/newitems'+Kiyi).push().key;

return firebase.database().ref('items/newitems/'+Kiyi+'/images/'+newPostKey).update({imageUrl:downloadURL});

})

}
)
},
addHomeImages({commit},payload)
{

 
 commit('setAddimageloader',true)
  
  let file=payload
  //console.log(file)
  var uploadTask= firebase
  .storage()
  .ref('HomeImages/'+file.name)
  .put(file);


uploadTask.on('state_changed', function(snapshot){
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');

}, 
function() {

}, function() {

uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
console.log('File available at', downloadURL);
var newPostKey = firebase.database().ref('HomeImages/').push().key;
 firebase.database().ref('HomeImages/carousel/'+newPostKey).update({imageUrl:downloadURL,fileName:file.name});
 commit('setAddimageloader',false)
}
)
}
)

},
addHomeImages2(NULL,payload)
{

 

  
  let file=payload.file
  let catagory=payload.catagory
 
  var uploadTask= firebase
  .storage()
  .ref('HomeImages/catagories'+file.name)
  .put(file);


uploadTask.on('state_changed', function(snapshot){
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');

}, 
function() {

}, function() {

uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
console.log('File available at', downloadURL);
var newPostKey = firebase.database().ref('HomeImages/catagories').push().key;
 firebase.database().ref('HomeImages/catagories/'+newPostKey).update({imageUrl:downloadURL,fileName:file.name,catagory:catagory});

}
)
}
)

},
addItem(payload)
{
  const file=payload
  let key=Math.floor(Math.random()*900000000)+1;
  //console.log(payload)
  var uploadTask=firebase.storage().ref('newpdo/'+key).put(file)
  uploadTask.on('state_changed', function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  })

  
},
fetchItems({commit})
{
commit('setwindowLoad',true)
  
     
  firebase.database().ref("items/newitems").on('value',data,err)
  function data(data) {
    const item = []

    //const Images=[]
    const obj = data.val()
   // console.log(obj)
    for(let key in obj){
      if(obj[key].status=='approved')
      {
        firebase.database().ref("items/newitems/"+key+"/images").once('value')
        .then((imagedata) => {
           const imageobj = imagedata.val()
           let images=[]
          
          for (let id in imageobj) {
        
            images.push(imageobj[id].imageUrl)
          }
          
          let id=key
        
      item.push({
        id: id,
        images:images,
        cProduct:obj[key].cProduct,
        nProduct:obj[key].nProduct,
        dProduct:obj[key].dProduct,
        noProduct:obj[key].noProduct,
       
        ppProduct:obj[key].ppProduct,
        cpProduct:obj[key].cpProduct,
        onSale:obj[key].onSale,
        Date:obj[key].Date,
        typeofCatagory:obj[key].typeofCatagory,
        numberofSale:obj[key].numberofSale,
        status:obj[key].status
      }
      
      )
     

      
    })
        
      
      //commit('setImages',null)
    }
      }
     
     
  
    commit('setItems', item)
  
    commit('setwindowLoad',false)
  }
  function err(error){
    commit('setwindowLoad',false)
      console.log(error)
     
    }
  
  
},


fetchHomeImages({commit})
{
  firebase.database().ref('HomeImages/carousel').on('value',data,err)
  
    function data(data)
    {
      const homeimages=[]
      const obj=data.val()
      for( let key in obj)
      {
        homeimages.push({
          imageUrl:obj[key].imageUrl,
          fileName:obj[key].fileName
        })
      }
      commit('setHomeImages',homeimages)
      //console.log(homeimages)
    }
    function err(err)
    {
      console.log(err)
    
  }
  firebase.database().ref('HomeImages/catagories').on('value',data2,err2)
  
    function data2(data)
    {
      const homeimages=[]
      const obj=data.val()
      for( let key in obj)
      {
        homeimages.push({
          imageUrl:obj[key].imageUrl,
          fileName:obj[key].fileName,
          catagory:obj[key].catagory,
          link:obj[key].link
        })
      }
      commit('setCatagoryimage',homeimages)
      
    }
    function err2(err)
    {
      console.log(err)
    
  }
},
 fetchmyItems({commit,getters})
 {
     let uid=getters.user2.id
  firebase.database().ref("items/newitems").on('value',data,err)
  function data(data) {
    const item = []
    const obj = data.val()
    for (let key in obj) {
      if(obj[key].creatorID==uid)
      {
        firebase.database().ref("items/newitems/"+key+"/images").once('value')
        .then((imagedata) => {
           const imageobj = imagedata.val()
           let images=[]
          
          for (let id in imageobj) {
        
            images.push(imageobj[id].imageUrl)
          }
          
          let id=key
        
      item.push({
        id: id,
        images:images,
        cProduct:obj[key].cProduct,
        nProduct:obj[key].nProduct,
        dProduct:obj[key].dProduct,
        noProduct:obj[key].noProduct,
        duct:obj[key].duct,
        ppProduct:obj[key].ppProduct,
        cpProduct:obj[key].cpProduct,
        onSale:obj[key].onSale,
        Date:obj[key].Date,
        status:obj[key].status,
       
      }
      
      )
        })
        
       
      }
        
     
    }
   // console.log(item)
    commit('setmyItems', item)
  
  }
  function err(error){
    
      console.log(error)
     
    }
 },
 //addHomeImages2
 addHomeImage(payload)
 {
  
 //let Kiyi=getters.next
 //console.log(Kiyi)
  
 
  let file=payload
  //console.log(file)
  var uploadTask= firebase
  .storage()
  .ref('final/'+file.name)
  .put(file);


uploadTask.on('state_changed', function(snapshot){
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');

}, 
function() {

}, function() {

uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
console.log('File available at', downloadURL);

})
}
)
 },

 addtoCart({getters},payload)
 {
console.log(payload)
firebase.database().ref('items/newitems/'+payload).once('value').then((data)=>{
  console.log(data.val())
  console.log(data.key)
     const userId=getters.user2.id
   
      var newPostKey = firebase.database().ref('users2/'+userId+'/mycart/').push().key;
   firebase.database().ref('users2/'+userId+'/mycart/'+newPostKey+'/').update(data.val()).then(()=>{
    firebase.database().ref('users2/'+userId+'/mycart/'+newPostKey+'/').update({id:payload})
     console.log('done')
   })
})

//  const additem= getters.items.find((item)=>{
//    return item.id===payload
//   })
//   console.log(payload)
//   console.log(additem)
//    const itemDetail={
//      nProduct:additem.nProduct,
//      dProduct:additem.dProduct,    
//      cpProduct:additem.cpProduct,
//      cProduct:additem.cProduct,
//      id:additem.id,
//      images:additem.images     
//    }
   
//    const userId=getters.user2.id
   
//     //console.log(itemDetail)
//     var newPostKey = firebase.database().ref('users2/'+userId+'/mycart/').push().key;
//    firebase.database().ref('users2/'+userId+'/mycart/'+newPostKey+'/').update(itemDetail).then(()=>{
//    //  console.log('done')
//    })
 },
 deleteItem(Null,payload)
 {
  
   firebase.database().ref('items/newitems/'+payload).remove()
 },
 Edit(NULL,payload)
 {

    //console.log(payload)
    const type=payload.type
    const newName=payload.newName
    const id= payload.id
    
    if(type=='nProduct'){
      firebase.database().ref('items/newitems/'+id).update({nProduct:newName,status:'pending'})
    }
    if(type=='cpProduct'){
      firebase.database().ref('items/newitems/'+id).update({cpProduct:newName ,status:'pending'})
    }
    if(type=='cProduct'){
      firebase.database().ref('items/newitems/'+id).update({cProduct:newName ,status:'pending'})
    }
    if(type=='dProduct'){
      firebase.database().ref('items/newitems/'+id).update({dProduct:newName,status:'pending'})
    }
    
 },
 deletefromcart({getters},payload)
 {
  
   const uid=getters.user2.id
   const id=payload
  // console.log(uid+'  '+id)
    firebase.database().ref('users2/'+ uid +'/mycart/'+id).remove()
 },
 Buy({getters},payload)
 {
   console.log(payload)
  const uid=getters.user2.id
   const id=payload.idproduct
   const nProduct=payload.nProduct
  // console.log(id)
   var newPostKey = firebase.database().ref('users2/'+uid+'/myitems').push().key;
  // console.log(newPostKey)
    firebase.database().ref('users2/'+uid+'/myitems/'+newPostKey).update({id:id,datestring:new Date().toDateString(),date:new Date().toISOString(),nProduct:nProduct})
    firebase.database().ref("items/newitems/"+id).once('value').then((data)=>{
      
      const numberofSale=data.val().numberofSale+1
     // console.log(numberofSale)
       firebase.database().ref('items/newitems/'+id).update({numberofSale:numberofSale})
    })
    
    
 },
 fetchnotapproveditems({commit})
 {

   firebase.database().ref("items/newitems").on('value',data,err)
  
   function data(data) {
    const notapproveditems = []

    //const Images=[]
    const obj = data.val()
   // console.log(obj)
    for(let key in obj){
      if(obj[key].status=='pending')
      {
        firebase.database().ref("items/newitems/"+key+"/images").once('value')
        .then((imagedata) => {
           const imageobj = imagedata.val()
           let images=[]
          
          for (let id in imageobj) {
        
            images.push(imageobj[id].imageUrl)
          }
          
          let id=key
        
          notapproveditems.push({
        id: id,
        images:images,
        cProduct:obj[key].cProduct,
        nProduct:obj[key].nProduct,
        dProduct:obj[key].dProduct,
        noProduct:obj[key].noProduct,
       
        ppProduct:obj[key].ppProduct,
        cpProduct:obj[key].cpProduct,
        onSale:obj[key].onSale,
        Date:obj[key].Date,
        typeofCatagory:obj[key].typeofCatagory,
        numberofSale:obj[key].numberofSale,
      }
      
      )
     

      
    })
      }
      
        
      
      //commit('setImages',null)
    }
     
  
    commit('setnotapproveditems', notapproveditems)
  
    
  }
  function err(error){
   
      console.log(error)
     
    }
  
    
},
Approve(NULL,payload)
{
  //console.log(payload)
  const id=payload
 
    firebase.database().ref('items/newitems/'+id).update({status:'approved'})
 
},
Decline(NULL,payload)
{
  //console.log(payload)
  const id=payload
 
    firebase.database().ref('items/newitems/'+id).update({status:'rejected'})
 
},
loadaddedproduct({commit,getters})
{
  commit('setLoading',true)
  let Kiyi=getters.next
  //console.log(Kiyi)
  firebase.database().ref('items/newitems/'+Kiyi).once('value').then((data)=>{
    const product=data.val()
    let images2=[]
  console.log(product)
    firebase.database().ref('items/newitems/'+Kiyi+'/images').once('value').then((imagedata=>{
      const imageobj=imagedata.val()
      for (let id in imageobj) {
        //console.log(imageobj[id].imageUrl)
        images2.push(imageobj[id].imageUrl)
      }
      const product1={images2,product}
    commit('setloadaddedproduct',product1)
  // console.log(product)
  commit('setLoading',false)
    }))
    
  })
},
productCanceled({getters})
{
  const kiyi=getters.next
  firebase.database().ref('items/newitems/'+kiyi).remove()
},
users({commit})
{
  firebase.database().ref('users2/').once('value').then((data)=>{
    const obj=data.val()
    let users=[]

    for(let key in obj)
    {
      
      users.push({
        name:obj[key].aFname,
        email:obj[key].aEmail,
        type:obj[key].aTcustomer,
        username:obj[key].aUname,
      })
    }
   // console.log(users)
    commit('setUsers',users)
  })
},
// disableUser()
// {
//   admin.auth().getUser('vn4Pvzq2S7RYDiPkK2TfRoUfzKb2')
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully fetched user data:', userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log('Error fetching user data:', error);
//   });
// }
}

})
