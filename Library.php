<?php

require_once ('./ConnectDataBase.php');

class Library extends ConnectDataBase{


public function searchTitle(){

  $title = $_GET['titleSearch'];


  $recipesStatement = $this->connectToDB()->prepare("SELECT title FROM library WHERE lower(title) like '%$title%' ORDER BY title ASC");
  $recipesStatement->execute();
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}
public function searchAuthor(){

  $author = $_GET['authorSearch'];

  $recipesStatement = $this->connectToDB()->prepare("SELECT author FROM library WHERE lower(author) like '%$author%' GROUP BY author ");
  $recipesStatement->execute();
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}
public function searchReleasedate(){

  $releasedate = $_GET['releasedateSearch'];


  $recipesStatement = $this->connectToDB()->prepare("SELECT release_date FROM library WHERE release_date = $releasedate GROUP BY release_date ");
  $recipesStatement->execute();
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}
public function searchEditor(){

  $editor = $_GET['editorSearch'];

  $recipesStatement = $this->connectToDB()->prepare("SELECT editor FROM library WHERE lower(editor) like '%$editor%' GROUP BY editor ");
  $recipesStatement->execute();
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}
public function searchBook(){

  $title = isset($_GET['titleSearch']) ? $_GET['titleSearch'] : null;
  $author = isset($_GET['authorSearch']) ? $_GET['authorSearch'] : null;
  $releasedate = isset($_GET['releasedateSearch']) ? $_GET['releasedateSearch'] : null;
  $editor = isset($_GET['editorSearch']) ? $_GET['editorSearch'] : null;

  $query = "SELECT * FROM library WHERE 1=1" ;


$params = array();

if (!empty($title)){
  $query .= " AND (lower(title) = :title OR lower(title) LIKE :liketitle)";
  $params[':title'] = strtolower($title);
  $params[':liketitle'] = "%" . strtolower($title) . "%";
}
if (!empty($author)){
  $query .= " AND (lower(author) = :author OR lower(author) LIKE :likeauthor)";
  $params[':author'] = strtolower($author);
  $params[':likeauthor'] = "%" . strtolower($author) . "%";
}
if (!empty($releasedate)){
  $query .= " AND release_date = :releasedate";
  $params[':releasedate'] = $releasedate;
}
if (!empty($editor)){
  $query .= " AND (lower(editor) = :editor OR lower(editor) LIKE :likeeditor)";
  $params[':editor'] = strtolower($editor);
  $params[':likeeditor'] = "%" . strtolower($editor) . "%";

}

  $recipesStatement = $this->connectToDB()->prepare($query);
  $recipesStatement->execute($params);
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}
public function searchallBook(){

  $query = "SELECT * FROM library ORDER BY author, release_date" ;

  $recipesStatement = $this->connectToDB()->prepare($query);
  $recipesStatement->execute();
  $entries = $recipesStatement->fetchAll();
  
  return json_encode($entries);

}


  public function saveNewBook(){

      $title = $_POST['titlesave'];
      $author = $_POST['authorsave'];
      $release_date = $_POST['releasedatesave'];
      $editor = $_POST['editorsave'];

    $query = "INSERT INTO library (title, author, release_date, editor) VALUES ('$title', '$author','$release_date','$editor'); ";
    $stmt = $this->connectToDB()->prepare($query);
    $stmt->execute();
    $confirm = "new book added";
    return $confirm;
}


public function checkNewBook(){

  $title = $_POST['titlesave'];
  $author = $_POST['authorsave'];
  $release_date = $_POST['releasedatesave'];
  $editor = $_POST['editorsave'];

  $query = "SELECT * FROM library WHERE title = '$title' AND author ='$author' AND release_date = '$release_date ' AND editor = '$editor'  ";
  $stmt = $this->connectToDB()->prepare($query);
  $stmt->execute();
  $result = $stmt->fetch();

  if($result){
       return "true";
  } else{
       return "false";
  }
}
}
