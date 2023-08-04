<?php require_once 'function.php';?>


<html>
  <head>

  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>I'm IN</title>
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />


</head>


    
<body class="container d-flex justify-content-center align-items-center bg-dark">

<h1 id='debile'>C'est pas ton compte !</h1>
  
<form>
    
    <button class="btn btn-danger m-3" value="back" type="submit" name="goback">GO BACK</button>

</form>
<?php
if (isset($_GET['goback']) && $_GET['goback'] == "back") {
  header('Location: '. 'index.php');
};
?>
</body>
</html>