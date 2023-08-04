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

<body class="">

  <?php echo "<h1> Welcome ". htmlspecialchars($_COOKIE['username']) . "</h1>";?>


  <form>
    
      <button class="btn btn-danger m-3" value="logout" type="submit" name="logoutbtn">Log Out</button>

  </form>
  

  <div class="container d-flex justify-content-center align-items-center">

  <div class="searchBars d-flex flex-column col-4 m-5">
  <h1>Find a book :</h1>

  <form method="GET" class="d-flex flex-column ">

 <label for="title">Title</label>
 <input onfocusout="focusOutEventTitle()" type="text" id="titlesearch" name="titleSearch" oninput="getTitle()">

 <label for="author">Author</label>
 <input onfocusout="focusOutEventAuthor()" type="text" id="authorsearch" name="authorSearch" oninput="getAuthor()">

 <label for="releaseDate">Release Date</label>
 <input onfocusout="focusOutEventReleaseDate()" type="text" id="releasedatesearch" name="releasedateSearch" oninput="getReleaseDate()">

 <label for="editor">Editor</label>
 <input onfocusout="focusOutEventEditor()" type="text" id="editorsearch" name="editorSearch" oninput="getEditor()">

</form>

<button id="btnSearch"  class="btn btn-success m-3" value="search" onclick="getFullBook()" name="searchBook">Search</button>
 

  <div class="result-menu result-menu-title flex-column"></div>
  <div class="result-menu result-menu-author  flex-column"></div>
  <div class="result-menu result-menu-releasedate  flex-column"></div>
  <div class="result-menu result-menu-editor  flex-column"></div>

  </div>


<div class="d-flex flex-column">
  <form method="GET" id="form" class="mt-5 col-6 card bg-light">
  <h1>Save a new book :</h1>
  <input required id="titlesave" placeholder="Title" type="text" name="titlesave" class="fs-4 m-3">
  <input required id="authorsave" placeholder="Author" type="text" name="authorsave" class="fs-4 m-3">
  <input required id="releasedatesave" placeholder="Release Date" type="number" min="1000" max="2100" name="releasedatesave" class="fs-4 m-3">
  <input required id="editorsave" placeholder="Editor" type="text" name="editorsave" class="fs-4 m-3">
  
</form>
<button class="btn btn-success m-3" value="save" onclick="saveNewBook()" name="saveBook">Save to Data Base</button>

</div>


  </div>

  <table id="result-table" class="table table-dark table-striped mt-4">
      <thead id="thead"></thead>
      <tbody id="tablebody"></tbody>
    </table>

<script src="main.js"></script>
<script>
window.addEventListener("load", (event) => {
  firstLoading();
});
</script>
</body>
</html>
