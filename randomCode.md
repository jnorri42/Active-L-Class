// Builds the firebase credentials from the Google account info

// // Build Firebase credential with the Google ID token.
// var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

// // Sign in with credential from the Google user.
// firebase.auth().signInWithCredential(credential).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// This is supposed to sign out a user
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });



// pull in requirejs
// var requirejs = require("requirejs");
// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require
// });
//   //Intialize admin sdk
//  let admin = require("firebase-admin");
//  //   import * as admin from "firebase-admin";
//  let serviceAccount = require("");


// admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount),
//  databaseURL: ""
// });

// admin.initializeApp({
// credential: admin.credential.cert({
// projectId: "<PROJECT_ID>",
// clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
// privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
// }),
// databaseURL: ""
// });

// Retrive services for authentication
// let defaultAuth = ac.auth();

// // Use gmail for sign in
// let provider = new firebase.auth.GoogleAuthProvider();

// // Use OAuth2.0 scopes commented out because not sure if we need but maybe in future.
// //provider.addScope('https://www.googleapis.com/auth/readonly');


// Check to make sure user not already signed in
// function isUserEqual(googleUser, firebaseUser) {
//   if (firebaseUser) {
//     var providerData = firebaseUser.providerData;
//     for (var i = 0; i < providerData.length; i++) {
//       if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
//           providerData[i].uid === googleUser.getBasicProfile().getId()) {
//         // We don't need to reauth the Firebase connection.
//         return true;
//       }
//     }
//   }
//   return false;
// }









//let appAng = angular.module()


//  function addMessageToDisplay(messages) {
//     /*let el = document.getElementById('response');
//      .innerHTML = message;*/
//      $('#msgtext').text(messages.message);
//      console.log(messages.message); //this contains all DB data
   
//  }



// //Initialize Firebase
// var config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: ""
//   };
// firebase.initializeApp(config);



// function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//         setCookie("loggedIn", "true", 365);
//         location.href="../index.html";
//     } else {
//         user = usernameVariable;
//         if (user != "" && user != null) {
//             setCookie("username", user, 365);
            
//         }
//     }
// }

// let variableCookie;
// $(document).ready(function() {
//   // $.get("js/login.js",  function(data, status) {
//   //   //variableCookie = getCookie(cname);
//   //   //console.log(variableCookie);
//   //   //alert("Data: " + data + "/\nStatus: " + status);
//   // });
//   console.log("One document ready");
// });

// let ref = firebase.database().ref();

// let store = ref.child('Classroom/6112/Activity/One');
// let message = {};

// function getValues() {
//   let storeRef = store.push();
//   let timeDate = new Date().toDateString();
//   let timeTime = new Date().toTimeString();
//   let time = timeDate.toString() +" "+ timeTime.toString();
//   let m = document.getElementById("btn-input").value;
//   storeRef.set({
//     message: m,
//     //name: variableCookie,
//     timeStamp: time
//   });
//   //timeRef.set({Time: new Date()});
// }

// let retrev = ref.child('Classroom/6112/Activity/One');
// // Retrieves curerent data from DB and any new entries
//   retrev.on("child_added", function(snapshot) {
//     message = (snapshot.val());
    
//     //let messages = message;
//     console.log(message);
//   }, function (errorObject) {
//     console.log("the read failed: " + errorObject.code);
// });