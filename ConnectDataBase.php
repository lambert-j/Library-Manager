<?php

class ConnectDataBase {

  protected function connectToDB(){
    try{
  $pdo = new PDO(
    'mysql:host=localhost;dbname=acs_php_login;charset=utf8',
    'root',
    ''
  );
  return $pdo;
    }
  catch(PDOException $e){
    die('Erreur de connexion DB' . $e->getMessage());
  }
  }


}


