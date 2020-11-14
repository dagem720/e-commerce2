
export default{

// //getQuote()
  getQuote()
 {
var admin = require("firebase-admin");

var serviceAccount = require("../../../e-commerce-704a2-firebase-adminsdk-saemj-670b6488be.json");

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      
  });
}
  
  admin.auth().getUser('4KDhaq9YHQRGqqDCAuKyNKXWCmm1')
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
console.log(userRecord)
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
  });
   console.log('admin')
 }


 
}