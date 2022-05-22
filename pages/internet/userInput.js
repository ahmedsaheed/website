import React, { Component } from "react"
import { CopyBlock, dracula } from "react-code-blocks";
import ReactMarkdown from 'react-markdown'

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
  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="text false" href="/books">books</a><a class="text" href="/projects">projects</a><a class="here false" href="#">internet</a><a class="text false" href="/uses">tools</a><a class="text false" href="/me">me</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
  <header class="mx-auto max-w-3xl px-10 space-y-5"><div><h1 class="font-am text-4xl">Regex & Input Purification</h1></div></header>
  <article class="prose mx-auto max-w-3xl p-10"><p>I lost so much marks while learning PHP because i never validated and sanitized the users input, so if there was to be an sql injection i'd deeply pay for it.</p>
<p>Ideally whenever I use PHP and i have to collect sensitive input data from the users, there's a very simple and reliable trick i learnt from my friend Mauricio, It's the pass_input() and Preg Match() sanitation.</p>
<p>Let's take a look!</p><br/><p>1. The Pass_Input()</p>
<CopyBlock
          language="php"
          text={` 
          /*The pass input function trims, removes tags and remove 
            slashed from the users input. Making it free from 
            injections */
          function pass_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = strip_tags($data);
            return $data;
          }
          
          `}
          theme={dracula}
          wrapLines={true}
          onCopy={() => alert("Copied code block!")}
          codeBlock        
        /> 
<br/>
 <p>2. Regex & Preg Match(): Our Lord and Saviour</p>
 <CopyBlock
          language="php"
          text={` 
          /*The preg_match() function returns whether a match was found in a string. 
          The below preg_match function verifies that the users input is nothing 
          but a real email.*/
          preg_match('/^[^0-9][_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/'
          
          /*The Below preg_match validates that a password is between 8-12 alphanumeric,
           include at least 1 number and exactly 1 special character*/

           preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/'
          `}
          theme={dracula}
          wrapLines={true}
          onCopy={() => alert("Copied code block!")}
          codeBlock        
        /> 
<br/>

<p>3. Finally, let's see how to combine both to validate a user upon login.</p>
<CopyBlock
          language="php"
          text={` 
          <?php 
          $pageTitle="Login";
          function customPageHeader(){?>
          <!--arbitrary HTML tags -->
          
          <?php }
          include_once('subHeader.php');
          ?>
          <!-------------------------- this is body  ---------------->
          <!------------php basics----------->
          <?php 
          //variables to help output error messages
          $mailSet = false;
          $passwordSet = false;
          
          
          //Function to sanitize user input
          function pass_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = strip_tags($data);
            return $data;
          }
          
          
          //Declaring variables that will store final database values
          $mail = '';
          $password = '';
          
          ?>
<!------------Form Box----------->
<br><br><br>

<section class="main">
<div class="login-box">
  <h2>Login</h2>
  <form action="login.php" method="post">
    <div class="user-box">
      <label for="mail">Email:</label><br>
            <input type="email" id="mail" name="mail" 
            value="<?php
            
            if (isset($_POST['mail']) && preg_match('/^[^0-9][_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', Pass_Input($_POST['mail']))){
                $mail = Pass_input($_POST['mail']);
                echo $mail;
                $mailSet = true;
            }?>">
            
                <?php 
                if (!empty($_POST)){
                    if(!$mailSet)echo'<p style="color: red;">Invalid email Input!</p>';
                }?>
            
    </div>
    <div class="user-box">
      <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" 
            value="<?php
            //Between 8-12 alphanumeric, include at least 1 number and exactly 1 special character
            if (isset($_POST['password']) && preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/', Pass_Input($_POST['password']))){
                $password = Pass_input($_POST['password']);
                echo $password;
                $passwordSet = true;
            }?>">
                <?php 
                if (!empty($_POST)){
                    if(!$passwordSet)echo'<p style="color: red;">Invalid password Input!</p>';
                }?>
            
    </div>    

      <span></span><button type="submit" class="hero-btn">Login</button>
   <center><a href="registration.php"><span></span><span></span><span></span><span></span><p style="color:white;">No account yet?<br> Click here to register </p></a></center>
  </form>
  <!------------Database interaction----------->
  <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){

            //check if ALL user data is ready to go to database                
            if($mailSet && $passwordSet){
                
                //statement to insert user data into database
                $query = "SELECT * FROM foo WHERE email='$mail'
                AND password='$password';";
                $result = @mysqli_query($conn, $query);

                if(mysqli_num_rows($result) == 1) {
                    $row = mysqli_fetch_array($result);
                    // set session variables...
                    $_SESSION['user_email'] = $row['email'];
                    $_SESSION['fName'] = $row['first_name'];
                    $_SESSION['name'] = $row['first_name'].' '.$row['last_name'];
                    echo '<center><p style="color:white;">
                     Logged In successfully as ' .$_SESSION['name']. '</p><center>';
                    $emailLogged = $_SESSION['user_email'];                  
                } 
                else {
                echo '<p style="color: red;">Error The username and password are incorrect!</p>';
                }
               // <!------------END Database interaction----------->
            }
        }
        ?>
</div>
          `}
          theme={dracula}
          wrapLines={true}
          onCopy={() => alert("Copied code block!")}
          codeBlock        
        /> 
<br/>
        <br/>
<hr/>
<br/>
<p><strong>Further Reading:</strong> <a href="https://www.php.net/manual/en/function.preg-match.php">PHP Official Preg_match() documentation</a></p></article>
    <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="https://anthonymorris.dev/">Inspired by amorriscode</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>

</body></>

    )
  }
}