  <?php require_once 'function.php';?>




<html>
  <head>

  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>Let me IN</title>
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />


</head>

<?php
if (isset($_COOKIE['username']) && $_COOKIE['username'] != ''){
  header('Location: '. 'connected.php');
}
?>
<body class="container d-flex justify-content-center align-items-center bg-dark">
  <section class="row  ">
 
<form method="GET" id="form" class="mt-5 col-6 card bg-light">
  <input placeholder="Username" type="text" id="" name="user" class="fs-4 m-3">
  <input placeholder="Password" type="password" id="" name="password" class="fs-4 m-3">
  <button class="btn btn-success m-3" value="login" type="submit" name="loginbtn">Login</button>
  <button class="btn btn-success m-3" value="register" type="submit" name="registerbtn">Register</button>

</form>



</section>



</body>
</html>






