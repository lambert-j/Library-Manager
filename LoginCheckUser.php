<?php

require_once ('./ConnectDataBase.php');

class LoginCheckUser extends ConnectDataBase{

  public function loginCheck(){

    $user = $_GET['user'];
    $password = $_GET['password'];
  
    $query = "SELECT * FROM login WHERE user = '$user' ";
    $stmt = $this->connectToDB()->prepare($query);
    $stmt->execute();
    $result = $stmt->fetch();

    if( $result AND $result[2] ==  sha1($password)){

      setcookie(
        "username",
        $value = $user,
         $expires_or_options =0,
         $path = "/",
         $domain = "localhost",
         $secure = false,
         $httponly = false
      ) ;

      header('Location: '. 'connected.php');
    } else{
         header('Location: '. 'badaccount.php');
    }
  }

  public function registerUser(){
    $user = $_GET['newuser'];
    $password = $_GET['newpassword'];
  
    $querycheck = "SELECT * FROM login WHERE user = '$user' ";
    $stmtcheck = $this->connectToDB()->prepare($querycheck);
    $stmtcheck->execute();
    $result = $stmtcheck->fetch();

if($result){
      echo 'Ce compte existe déjà';
  } else {
    $hashPassword = sha1($password);
    $query = "INSERT INTO login (user, password) VALUES ('$user', '$hashPassword'); ";
    $stmt = $this->connectToDB()->prepare($query);
    $stmt->execute();
    echo "<h1 id='title'>Account Registered !</h1>";
    sleep(3);
    header('Location: '. 'index.php');
  };
}
}