import React, { Component } from "react"


export default class extends Component {
  render () {
    return (
 <> <head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <link href="../styles/blog.css" rel="stylesheet"/>
 <link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css" rel="stylesheet" type="text/css" />
 <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
</head>

<body>
    
  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="text false" href="/books">books</a><a class="text" href="/projects">projects</a><a class="here false" href="#">internet</a><a class="text false" href="/tools">tools</a><a class="text false" href="/me">me</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
  <header class="mx-auto max-w-3xl px-10 space-y-5"><div><h1 class="font-am text-4xl">PHP Mailer</h1></div></header>
  <article class="prose mx-auto max-w-3xl p-10"><p>Many PHP developers need to send email from their code. The only PHP function that supports this directly is mail(). However, it does not provide any assistance for making use of popular features such as encryption, authentication, HTML messages, and attachments.</p>
<p>The PHP mail() function usually sends via a local mail server, typically fronted by a sendmail binary on Linux, BSD, and macOS platforms, however, Windows usually doesn't include a local mail server; PHPMailer's integrated SMTP client allows email sending on all platforms without needing a local mail server. Be aware though, that the mail() function should be avoided when possible; it's both faster and safer to use SMTP to localhost.</p>
<br/>
<div class="mockup-code">
<pre data-prefix="//"><code>STEP 1</code></pre> 
  <pre data-prefix="$"><code>composer require phpmailer/phpmailer
</code></pre> 
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
<br/><br/>
<div class="mockup-code">
<pre data-prefix="//"><code>STEP 2: Require and include all the tools needed </code></pre> 
<pre><code></code></pre>
<pre><code>use PHPMailer\PHPMailer\PHPMailer;
</code></pre>
<pre><code>use PHPMailer\PHPMailer\Exception;</code></pre>
<pre><code>require 'path/to/PHPMailer/src/Exception.php';</code></pre>
<pre><code>require 'path/to/PHPMailer/src/PHPMailer.php';</code></pre>
<pre><code>require 'path/to/PHPMailer/src/SMTP.php';</code></pre>
</div>
<br/><br/>
<div class="mockup-code">
<pre data-prefix="//"><code>STEP 3: Import PHPMailer classes into the global namespace </code></pre> 
<pre data-prefix="//"><code>STEP 3: These must be at the top of your script, not inside a function </code></pre> 

<pre><code></code></pre>
<pre><code>use PHPMailer\PHPMailer\PHPMailer;
</code></pre>
<pre><code>use PHPMailer\PHPMailer\Exception;</code></pre>
<pre><code>require 'path/to/PHPMailer/src/Exception.php';</code></pre>
<pre><code>require 'path/to/PHPMailer/src/PHPMailer.php';</code></pre>
<pre><code>require 'path/to/PHPMailer/src/SMTP.php';</code></pre>
<pre><code>require 'vendor/autoload.php';</code></pre>
<pre><code></code></pre>
<pre data-prefix="//"><code>Create an instance; passing `true` enables exceptions </code></pre>
<pre><code></code></pre>
<pre><code>$mail = new PHPMailer(true);</code></pre>
<pre><code>try &#123; </code></pre>
<pre data-prefix="//"><code>Server settings</code></pre>
<pre><code></code></pre>

<pre><code></code></pre>
<pre><code>$mail-{">"}SMTPDebug = SMTP::DEBUG_SERVER;            //Enable verbose debug output;</code></pre>
<pre><code>$mail-{">"}isSMTP();                                  //Send using SMTP</code></pre>
<pre><code>$mail-{">"}Host = 'smtp.example.com';                 //Set the SMTP server to send through</code></pre> 
<pre><code>$mail-{">"}SMTPAuth   = true;                         //Enable SMTP authentication
</code></pre>
<pre><code>$mail-{">"}Username   = 'user@example.com';           //SMTP username
</code></pre>
<pre><code>$mail-{">"}Password   = 'secret';                     //SMTP password
</code></pre>
<pre><code>$mail-{">"}SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  //Enable implicit TLS encryption
</code></pre>
<pre><code>mail-{">"}Port = 465;                                 //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
</code></pre>
<pre><code></code></pre>
<pre data-prefix="//"><code>Recipients</code></pre>
<pre><code></code></pre>

<pre><code>$mail-{">"}setFrom('from@example.com', 'Mailer');</code></pre>
<pre><code>$mail-{">"}addAddress('joe@example.net', 'Joe User'); //Add a recipient</code></pre>
<pre><code>$mail-{">"}addAddress('ellen@example.com');           //Name is optional
</code></pre>
<pre><code>mail-{">"}addReplyTo('info@example.com', 'Information');
</code></pre>
<pre><code>$mail-{">"}addCC('cc@example.com');</code></pre>
<pre><code>$mail-{">"}addBCC('bcc@example.com');</code></pre>
<pre><code></code></pre>
<pre data-prefix="//"><code>Attachments</code></pre>
<pre><code></code></pre>
<pre><code>$mail-{">"}addAttachment('/var/tmp/file.tar.gz');     //Add attachments</code></pre>
<pre><code>$mail-{">"}addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name</code></pre>
<pre><code></code></pre>
<pre data-prefix="//"><code>Content</code></pre>
<pre><code></code></pre>
<pre><code>$mail-{">"}isHTML(true);                                  //Set email format to HTML</code></pre>
<pre><code>$mail-{">"}Subject = 'Here is the subject';</code></pre>
<pre><code>$mail-{">"}Body = 'This is the HTML message body {"<b>"}in bold!{"</b>"}';</code></pre>
<pre><code>$mail-{">"}AltBody = 'This is the body in plain text for non-HTML mail clients';</code></pre>
<pre><code>$mail-{">"}send()            //send the email;</code></pre>
<pre><code>echo 'Message has been sent';</code></pre>
<pre><code>{"}"} catch (Exception $e) {"{"}</code></pre>
<pre><code>     echo "Message could not be sent. Mailer Error: {"{"}$mail-{">"}ErrorInfo{"}"}";</code></pre>
<pre><code>{"}"}</code></pre>


</div><br/>
<p>With all that set up correctly, you'd be able to send an email via php without bothering about encriptions.</p>
<br/><hr/>
<p><strong>Further Reading:</strong> <a href="https://github.com/PHPMailer/PHPMailer">The GitHub Repository for PhPMailer</a></p></article>
    <nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="https://anthonymorris.dev/">Inspired by amorriscode</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>

</body></>

    )
  }
}