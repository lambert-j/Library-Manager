<?php 
require_once 'ConnectDataBase.php';
require_once 'Library.php';

$connectInstance = new Library();

if (isset($_GET['action']) && $_GET['action'] === 'searchTitle') {
  
  $result = $connectInstance->searchTitle();

  echo $result;
}


if (isset($_GET['action']) && $_GET['action'] === 'searchAuthor') {
  
  $result = $connectInstance->searchAuthor();

  echo $result;
}

if (isset($_GET['action']) && $_GET['action'] === 'searchReleasedate') {
  
  $result = $connectInstance->searchReleasedate();

  echo $result;
}

if (isset($_GET['action']) && $_GET['action'] === 'searchEditor') {
  
  $result = $connectInstance->searchEditor();

  echo $result;
}

if (isset($_GET['action']) && $_GET['action'] === 'search') {
  
  $result = $connectInstance->searchBook();

  echo $result;
}

if (isset($_GET['action']) && $_GET['action'] === 'searchall') {
  
  $result = $connectInstance->searchallBook();

  echo $result;
}

if (isset($_GET['action']) && $_GET['action'] === 'save') {
  
  $result = $connectInstance->saveNewBook();

  echo $result;
}


if (isset($_GET['action']) && $_GET['action'] === 'bookexistcheck') {
  
  $result = $connectInstance->checkNewBook();

  echo $result;
}

