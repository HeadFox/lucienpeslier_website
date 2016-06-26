<html>
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
    <style>
    body{
      height: 100vh;
      width: 100vw;
      background-color:#1DE9B6;
      font-family: 'Varela Round', sans-serif;
    }
    div{
      padding: 10px;
      text-align: center;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 2px;
      color:#212121;
      width: 50vw;
      height: 50vh;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
      p{

      }
    </style>
  </head>
  <body>
<?php
    $to = "lucien.headfox@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['prenom'];
    $last_name = $_POST['nom'];
    $subject = "Message depuis lucienpeslier.xyz";
    $subject2 = "Copie de votre message";
    $message = $first_name . " " . $last_name . " à écrit :" . "\n\n" . $_POST['message'];
    $message2 = "Voici une copie de votre message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    header('refresh: 5; url=index.html'); // redirect the user after 10 seconds
    #exit; // note that exit is not required, HTML can be displayed.
?>
<div>
  <p>Message envoyé ! Merci <?php echo $first_name ?>, je vous contacterai prochainement.</p>
  <p>Vous allez être redirigé(e) dans <span id="counter">5</span> second(s).</p>
</div>
  <script type="text/javascript">
  function countdown() {
      var i = document.getElementById('counter');
      if (parseInt(i.innerHTML)<=0) {
          location.href = 'http://www.lucienpeslier.xyz';
      }
      i.innerHTML = parseInt(i.innerHTML)-1;
  }
  setInterval(function(){ countdown(); },1000);
</script>
</body>
</html>
