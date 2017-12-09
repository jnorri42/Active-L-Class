/********************************
 * This is where firebase was	* 
 * being used and this is the 	*
 * template for a web app.		*
 * This is not the best place 	*
 * to use firebase. It should 	*
 * be in server.				*
 ********************************/ 
// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

//variables for firebase and the reference to the "tables"
let ref = firebase.database().ref();
let retrev = ref.child('Classroom/6112/Activity/One/Group');
let retrev1 = ref.child('Classroom/6112/Activity/One/Group/Users');
//text used at the message layer
var textInput = document.querySelector('#text');
var data = {};
var name, z;
var imageURL = getCookie("imageURL");
var email = getCookie("email");
// will be used for google signin email
var profileEmail;
var emailNow, userEmail;
console.log(email);


let messageCount = 0;
// Sets the basic structure of the DB. Need to ad/create multiple groups.
let store = ref.child('Classroom/6112/Activity/One/Group');
let store1 = ref.child('Classroom/6112/Activity/One/Group/Users');
let message = {};
let wow;
let thisEmail;
let k, indexOfThisEmail = 0, atCount = 0;
let notThere = false;
let ref1 = firebase.database().ref();
let retrev2 = ref1.child('Classroom/6112/Activity/One/Group/Users');
//Checks if cookie exists and if not redirects to login page.
function myFunc() {
  
  thisEmail = checkCookie();
  
  if ( thisEmail === "" || typeof(thisEmail) === 'undefined') {
    
    window.location.href='https://anode-jnorri42.c9users.io/login.html';  
  
  } else {
    window.location.href='https://anode-jnorri42.c9users.io/login.html';
  } 
  
}
/********************Google Sign In Section***********************/
//Gets google user profile info
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;
  
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  console.log(id_token);
  //signInCallback(profile.getName(), profile.getEmail(),id_token);
  console.log("Sent to server");
  this.name = profile.getName();
  this.imageURL = profile.getImageUrl();
  this.profileEmail = profile.getEmail();
  
  console.log(imageURL);
 
  setCookie("imageURL", profile.getImageUrl(), 1);
  setCookie("email", profile.getEmail(), 1);
  addUser();
  //window.location.href = "https://anode-jnorri42.c9users.io/main.html";
}
// Handles google sign-out
function signOut() {
  gapi.auth2.init();
  gapi.auth2.signOut();
  if ( getCookie("email") )
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "https://anode-jnorri42.c9users.io/login.html";
  console.log('User logged out.');
}
// Function to add users to the database. Non-functional needs repair.
function addUser() {
 retrev2.on("value", function(snapshot) {
      k = snapshot.key;
      wow = (snapshot.val());
      let retrev3 = retrev2.child(k);
      retrev3.child(k).on("child_added", function(snapshot) {
        if ( wow === null ) {
        storeRef2 = store1.push();
        storeRef2.set({
        
          email: profileEmail,
          name: name,
          imageURL: imageURL
                        
        });
        window.location.href = "https://anode-jnorri42.c9users.io/main.html"; 
      } else  {
        //for ( indexOfThisEmail = 0; indexOfThisEmail < atCount; indexOfThisEmail++) {
        //k = snapshot.key;
        //wow = snapshot.val();
        //atCount = snapshot.numChildren();
          if ( wow.email === profileEmail ) {
            window.location.href = "https://anode-jnorri42.c9users.io/main.html";
          } else {
            storeRef2 = store1.push();
            storeRef2.set({
        
              email: profileEmail,
              name: name,
              imageURL: imageURL
                        
            });
            window.location.href = "https://anode-jnorri42.c9users.io/main.html";
          }
        } 
      });
      
    window.location.href = "https://anode-jnorri42.c9users.io/main.html";
  });
  window.location.href = "https://anode-jnorri42.c9users.io/main.html";
}

// Function that retrieves the messages and stores in DB.
function getValues() {
  let storeRef = store.push();
  let timeDate = new Date().toDateString();
  let timeTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  let time = timeDate.toString() +" "+ timeTime.toString();
  
  // Sanitizes input from user before going to DB.
  let m = encodeURIComponent(document.getElementById("btn-input").value).replace(/\./g, '%2E');
 
      storeRef.set({
        email: email,
        avatar: imageURL,
        message: m,
        timeStamp: time
      });
      checkCookie();
      console.log(imageURL);
}


// Retrieves curerent data from DB and any new entries
  retrev.on("child_added", function(snapshot) {
    message = (snapshot.val());
    messageCount++;
    // Distributes messages to right and left fields.
    let htmlLeft = "<li class='left clearfix msgList' id = '" + snapshot.key + "'><span class='chat-img pull-left'><img src='' alt='Avatar' class='message-avatar'></span><div class='chat-body clearfix'><div class='header'><strong class='primary-font' ng-bind='msg.name'></strong> <small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span><span class='time'> </span></small></div><p class='msgTextofFB' id='msgtext' data-ng-model='messageText'></p></div></li>";
    let htmlRight = "<li class='right clearfix msgList' id = '" + snapshot.key + "'><span class='chat-img pull-right'><img src='' alt='Avatar' class='message-avatar'></span><div class='chat-body clearfix'><div class='header'><strong class='primary-font' ng-bind='msg.name'></strong> <small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span><span class='time' > </span></small></div><p class='msgTextofFB' id='msgtext' data-ng-model='messageText' style='float:right; margin-right: 30px;'></p></div></li>";
      if( message.email === email ) {
        console.log("Same email");
        $('.chat').append(htmlRight);
        $('.chat').find($('#' +snapshot.key)).find('img').attr("src", message.avatar);
        $('.chat').find($('#' +snapshot.key )).find('.msgTextofFB').html(decodeURIComponent(message.message).replace('%2E', '.')); // Decodes sanitized storage.
        $('.chat').find($('#' +snapshot.key )).find('.time').html(message.timeStamp);  
      } else {
        console.log("Not same");
        $('.chat').append(htmlLeft);
        $('.chat').find($('#' +snapshot.key)).find('img').attr("src", message.avatar);
        $('.chat').find($('#' +snapshot.key )).find('.msgTextofFB').html(decodeURIComponent(message.message).replace('%2E', '.')); // Decodes sanitized storage.
        $('.chat').find($('#' +snapshot.key )).find('.time').html(message.timeStamp);   
      //console.log(message.message);
      }
  }, function (errorObject) {
    console.log("the read failed: " + errorObject.code);  
  
});
// To be used in future.
function escapeEmailAddress(email) {
  if (!email) return false

  // Replace '.' (not allowed in a Firebase key) with ',' (not allowed in an email address)
  email = email.toLowerCase();
  email = email.replace(/\./g, ',');
  return email;
}
//**************Cookie Functions***********************///
// Set Cookie
function setCookie(cemail, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cemail + "=" + cvalue + ";" + expires + ";path=/";
}
// Get cookie.
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Check Cookie.
function checkCookie() {
    var email = getCookie("email");
    if (email != "") {
        return email;
    } else {
        console.log(email);
        return email = "";
        
    }
}

