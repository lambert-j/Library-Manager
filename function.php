<?php
require_once ('./LoginCheckUser.php');
require_once('./Library.php');

if (isset($_GET['loginbtn']) && $_GET['loginbtn'] == "login") {
  $login = new LoginCheckUser();
  $login->loginCheck();
};

if (isset($_GET['registerbtn']) && $_GET['registerbtn'] == "register") {
  header('Location: '. 'register.php');
};

if (isset($_GET['newregisterbtn']) && $_GET['newregisterbtn'] == "register") {
  $register = new LoginCheckUser();
  $register->registerUser();
};


if (isset($_GET['logoutbtn']) && $_GET['logoutbtn'] == "logout") {
  setcookie('username', '', time() - 3600, '/');
  header('Location: '. 'index.php');
};