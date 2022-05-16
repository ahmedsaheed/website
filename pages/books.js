import React, { Component } from "react"
import {Helmet} from "react-helmet";

//================================================================================================================================
var GoogleAuth;
  var SCOPE = 'https://www.googleapis.com/auth/books';
  function handleClientLoad() {
    alert("loading");
    gapi.load('client:auth2', initClient);
    
  }

  function initClient() {
    gapi.load('client:auth2', initClient);
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
        'apiKey': 'YOUR_API_KEY',
        'clientId': 'YOUR_CLIENT_ID',
        'discoveryDocs': [discoveryUrl],
        'scope': SCOPE
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#sign-in-or-out-button').click(function() {
        handleAuthClick();
      });
      $('#revoke-access-button').click(function() {
        revokeAccess();
      });
    });
  }

  function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked "Sign out" button.
      GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
    }
  }

  function revokeAccess() {
    GoogleAuth.disconnect();
  }

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      $('#sign-in-or-out-button').html('Sign out');
      $('#revoke-access-button').css('display', 'inline-block');
      $('#auth-status').html('You are currently signed in and have granted ' +
          'access to this app.');
          console.log('You are now signed in');
    } else {
      $('#sign-in-or-out-button').html('Sign In/Authorize');
      $('#revoke-access-button').css('display', 'none');
      $('#auth-status').html('You have not authorized this app or you are ' +
          'signed out.');
    }
  }

  function updateSigninStatus() {
    setSigninStatus();
  }

//================================================================================================================================





export default class extends Component {
  render () {
    return (
 <> <head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <link href="../styles/blog.css" rel="stylesheet"/>
 <link rel="icon" type="image/x-icon" href="./favicon.ico"/>

</head>



<body>
  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="false" href="/books">books</a><a class="text-am-green-light" href="/projects">projects</a><a class="false" href="/internet/internetHome">internet</a><a class="false" href="#">tools</a><a class="false" href="/me">me</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
  <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-4xl font-am px-10" style = {{fontfamily: "ui-serif"}}>Tools 🛠️</h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    In science fiction which was published around the 1920s, "It is always expected that future human beings would have enormous heads because they would have very big brains and they would be very wise. It didn't work that ways, what happened is the human race is building a brain outside its body. That is to say an interlocking electronic network of telephonic, television, radionic communication which is rapidly intelocked with computers, so that you will within a few years be able to plug your brain into a computer".</p></div></header>
   <br/><br/><br/><br/> <br/><br/>

   <button id="sign-in-or-out-button"
        style={{marginLeft: "25px"}}>Sign In/Authorize</button>
<button id="revoke-access-button"
        style={{display: "none", marginLeft: "25px"}}>Revoke access</button>


    <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="https://anthonymorris.dev/">Inspired by amorriscode</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
<div> <Helmet>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script async defer src="https://apis.google.com/js/api.js"
        onload="this.onload=function(){};handleClientLoad"
        onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>
</Helmet></div>
</body></>

    )
  }
}