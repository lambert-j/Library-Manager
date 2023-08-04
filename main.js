// Les fonctions qui lance les requetes quand on tape du texte dans les barres de recherches
function getTitle() {
  let titleLength = document.getElementById("titlesearch");

  if (titleLength.value.length > 2) {
    let xhr = new XMLHttpRequest();
    let title = document.getElementById("titlesearch").value;

    let url =
      "endpoint.php?action=searchTitle&titleSearch=" +
      encodeURIComponent(title);
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        let data = JSON.parse(this.responseText);

        let resultMenu = document.querySelector(".result-menu-title");
        resultMenu.innerHTML = "";
        for (let i in data) {
          let anchor = document.createElement("div");
          let span = document.createElement("span");
          let str = data[i].title;
          let anchoridreplace = str.replace(/\s/g, "-");
          anchor.id = anchoridreplace;
          anchor.onclick = function () {
            fillTextTitle(anchoridreplace);
          };

          span.innerHTML = str;

          anchor.appendChild(span);
          resultMenu.appendChild(anchor);
        }

        console.log(data);
      }
    };
    xhr.send();
  }
}

function getAuthor() {
  let authorLength = document.getElementById("authorsearch");

  if (authorLength.value.length > 2) {
    let xhr = new XMLHttpRequest();
    let author = document.getElementById("authorsearch").value;

    let url =
      "endpoint.php?action=searchAuthor&authorSearch=" +
      encodeURIComponent(author);

    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        let data = JSON.parse(this.responseText);
        let resultMenu = document.querySelector(".result-menu-author");
        resultMenu.innerHTML = "";
        for (let i in data) {
          let anchor = document.createElement("div");
          let span = document.createElement("span");
          let str = data[i].author;
          let anchoridreplace = str.replace(/\s/g, "-");
          anchor.id = anchoridreplace;
          anchor.onclick = function () {
            fillTextAuthor(anchoridreplace);
          };
          span.innerHTML = str;
          anchor.appendChild(span);
          resultMenu.appendChild(anchor);
        }
        console.log(data);
      }
    };
    xhr.send();
  }
}

function getReleaseDate() {
  let releasedateLength = document.getElementById("releasedatesearch");

  if (releasedateLength.value.length > 2) {
    let xhr = new XMLHttpRequest();
    let releasedate = document.getElementById("releasedatesearch").value;

    let url =
      "endpoint.php?action=searchReleasedate&releasedateSearch=" +
      encodeURIComponent(releasedate);

    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        let data = JSON.parse(this.responseText);

        let resultMenu = document.querySelector(".result-menu-releasedate");
        resultMenu.innerHTML = "";
        for (let i in data) {
          let anchor = document.createElement("div");
          let span = document.createElement("span");
          let str = data[i].release_date;
          let anchoridreplace = str.replace(/\s/g, "-");
          anchor.id = anchoridreplace;
          anchor.onclick = function () {
            fillTextReleaseDate(anchoridreplace);
          };

          span.innerHTML = str;

          anchor.appendChild(span);
          resultMenu.appendChild(anchor);
        }

        console.log(data);
      }
    };
    xhr.send();
  }
}

function getEditor() {
  let editorLength = document.getElementById("editorsearch");

  if (editorLength.value.length > 2) {
    let xhr = new XMLHttpRequest();
    let editor = document.getElementById("editorsearch").value;

    let url =
      "endpoint.php?action=searchEditor&editorSearch=" +
      encodeURIComponent(editor);

    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        let data = JSON.parse(this.responseText);

        let resultMenu = document.querySelector(".result-menu-editor");
        resultMenu.innerHTML = "";
        for (let i in data) {
          let anchor = document.createElement("div");
          let span = document.createElement("span");
          let str = data[i].editor;
          let anchoridreplace = str.replace(/\s/g, "-");
          anchor.id = anchoridreplace;
          anchor.onclick = function () {
            fillTextEditor(anchoridreplace);
          };

          span.innerHTML = str;

          anchor.appendChild(span);
          resultMenu.appendChild(anchor);
        }

        console.log(data);
      }
    };
    xhr.send();
  }
}

// La fonction qui lance la grosse requetes quand on clic sur SEARCH, affiche les résultats dans le tableau principal
function getFullBook() {
  let titleLength = document.getElementById("titlesearch");
  let authorLength = document.getElementById("authorsearch");
  let releasedateLength = document.getElementById("releasedatesearch");
  let editorLength = document.getElementById("editorsearch");

  let url = "endpoint.php?action=search";

  let xhr = new XMLHttpRequest();

  if (titleLength.value.length > 2) {
    let title = document.getElementById("titlesearch").value;
    url = url + "&searchTitle&titleSearch=" + encodeURIComponent(title);
  }
  if (authorLength.value.length > 2) {
    let author = document.getElementById("authorsearch").value;
    url = url + "&searchAuthor&authorSearch=" + encodeURIComponent(author);
  }
  if (releasedateLength.value.length > 2) {
    let releasedate = document.getElementById("releasedatesearch").value;
    url =
      url +
      "&searchReleasedate&releasedateSearch=" +
      encodeURIComponent(releasedate);
  }
  if (editorLength.value.length > 2) {
    let editor = document.getElementById("editorsearch").value;
    url = url + "&searchEditor&editorSearch=" + encodeURIComponent(editor);
  }

  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);

      const tableau = document.getElementById("thead");
      tableau.innerHTML = "";
      const tableauBody = document.getElementById("tablebody");
      tableauBody.innerHTML = "";
      const trElement = document.createElement("tr");
      const thId = document.createElement("th");
      thId.textContent = "Title";
      const thNom = document.createElement("th");
      thNom.textContent = "Author";
      const thDescription = document.createElement("th");
      thDescription.textContent = "Release Date";
      const thDateLimite = document.createElement("th");
      thDateLimite.textContent = "Editor";

      trElement.appendChild(thId);
      trElement.appendChild(thNom);
      trElement.appendChild(thDescription);
      trElement.appendChild(thDateLimite);

      tableau.appendChild(trElement);

      for (let i in data) {
        let trackrow = document.createElement("tr");
        let trackitem1 = document.createElement("td");
        let trackitem2 = document.createElement("td");
        let trackitem3 = document.createElement("td");
        let trackitem4 = document.createElement("td");

        trackitem1.innerHTML = data[i].title;
        trackitem2.innerHTML = data[i].author;
        trackitem3.innerHTML = data[i].release_date;
        trackitem4.innerHTML = data[i].editor;

        trackrow.appendChild(trackitem1);
        trackrow.appendChild(trackitem2);
        trackrow.appendChild(trackitem3);
        trackrow.appendChild(trackitem4);

        tableauBody.appendChild(trackrow);
      }
      console.log(data);
    }
  };
  xhr.send();
}

// Fonction qui affiche la div avec les suggestions de recherches quand on tape du texte dans les champs de saisie
const titleFocus = document.querySelector("#titlesearch");
const authorFocus = document.querySelector("#authorsearch");
const releasedateFocus = document.querySelector("#releasedatesearch");
const editorFocus = document.querySelector("#editorsearch");

titleFocus.addEventListener("focus", focusEventTitle);
authorFocus.addEventListener("focus", focusEventAuthor);
releasedateFocus.addEventListener("focus", focusEventReleaseDate);
editorFocus.addEventListener("focus", focusEventEditor);

function focusEventTitle() {
  const searchWindow = document.querySelector(".result-menu-title");
  searchWindow.style.display = "flex";
}
function focusOutEventTitle() {
  const searchWindow = document.querySelector(".result-menu-title");
  setTimeout(() => {
    searchWindow.style.display = "none";
  }, 100);
}

function focusEventAuthor() {
  const searchWindow = document.querySelector(".result-menu-author");
  searchWindow.style.display = "flex";
}
function focusOutEventAuthor() {
  const searchWindow = document.querySelector(".result-menu-author");
  setTimeout(() => {
    searchWindow.style.display = "none";
  }, 100);
}

function focusEventReleaseDate() {
  const searchWindow = document.querySelector(".result-menu-releasedate");
  searchWindow.style.display = "flex";
}
function focusOutEventReleaseDate() {
  const searchWindow = document.querySelector(".result-menu-releasedate");
  setTimeout(() => {
    searchWindow.style.display = "none";
  }, 100);
}

function focusEventEditor() {
  const searchWindow = document.querySelector(".result-menu-editor");
  searchWindow.style.display = "flex";
}
function focusOutEventEditor() {
  const searchWindow = document.querySelector(".result-menu-editor");
  setTimeout(() => {
    searchWindow.style.display = "none";
  }, 100);
}

function fillTextTitle(element) {
  let field = document.querySelector("#titlesearch");
  let str = element.replace(/-/g, " ");
  item = document.querySelector("#" + element);
  field.value = str;
}
function fillTextAuthor(element) {
  let field = document.querySelector("#authorsearch");
  let str = element.replace(/-/g, " ");
  item = document.querySelector("#" + element);
  field.value = str;
}
function fillTextReleaseDate(element) {
  let field = document.querySelector("#releasedatesearch");
  let str = element.replace(/-/g, " ");
  item = document.querySelector("#" + element);
  field.value = str;
}
function fillTextEditor(element) {
  let field = document.querySelector("#editorsearch");
  let str = element.replace(/-/g, " ");
  item = document.querySelector("#" + element);
  field.value = str;
}

function checkNewBook() {
  return new Promise((resolve, reject) => {
    let url = "endpoint.php?action=bookexistcheck";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let titlesave = encodeURIComponent(
      document.querySelector("#titlesave").value
    );
    let authorsave = encodeURIComponent(
      document.querySelector("#authorsave").value
    );
    let releasedatesave = encodeURIComponent(
      document.querySelector("#releasedatesave").value
    );
    let editorsave = encodeURIComponent(
      document.querySelector("#editorsave").value
    );

    xhr.onload = function () {
      if (this.status == 200) {
        let responseIfExist = this.responseText;
        resolve(responseIfExist);
      } else {
        reject("erreur de requête!");
      }
    };

    let data = `titlesave=${titlesave}&authorsave=${authorsave}&releasedatesave=${releasedatesave}&editorsave=${editorsave}`;
    xhr.send(data);
  });
}

// Fonction qui vérifie si le livre ajouté existe déjà dans la base de données

function saveNewBook() {
  checkNewBook()
    .then((response) => {
      console.log(response);
      if (response == "false") {
        let urlsave = "endpoint.php?action=save";
        let xhrsave = new XMLHttpRequest();
        xhrsave.open("POST", urlsave, true);
        xhrsave.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );

        let titlesave = encodeURIComponent(
          document.querySelector("#titlesave").value
        );
        let authorsave = encodeURIComponent(
          document.querySelector("#authorsave").value
        );
        let releasedatesave = encodeURIComponent(
          document.querySelector("#releasedatesave").value
        );
        let editorsave = encodeURIComponent(
          document.querySelector("#editorsave").value
        );

        xhrsave.onload = function () {
          if (this.status == 200) {
            const tableauBody = document.getElementById("tablebody");

            let trackrow = document.createElement("tr");
            let trackitem1 = document.createElement("td");
            let trackitem2 = document.createElement("td");
            let trackitem3 = document.createElement("td");
            let trackitem4 = document.createElement("td");

            trackitem1.innerHTML = titlesave;
            trackitem2.innerHTML = authorsave;
            trackitem3.innerHTML = releasedatesave;
            trackitem4.innerHTML = editorsave;

            trackrow.appendChild(trackitem1);
            trackrow.appendChild(trackitem2);
            trackrow.appendChild(trackitem3);
            trackrow.appendChild(trackitem4);

            tableauBody.appendChild(trackrow);
            alert("New Book Added !");
          }
        };

        let datasave = `titlesave=${titlesave}&authorsave=${authorsave}&releasedatesave=${releasedatesave}&editorsave=${editorsave}`;

        xhrsave.send(datasave);
      } else {
        alert("This Book is already in the DataBase !");
      }
    })
    .catch((error) => {
      alert("This Book is already in the DataBase !");
    });
}

function firstLoading() {
  let url = "endpoint.php?action=searchall";

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);

      const tableau = document.getElementById("thead");
      tableau.innerHTML = "";
      const tableauBody = document.getElementById("tablebody");
      tableauBody.innerHTML = "";
      const trElement = document.createElement("tr");
      const thId = document.createElement("th");
      thId.textContent = "Title";
      const thNom = document.createElement("th");
      thNom.textContent = "Author";
      const thDescription = document.createElement("th");
      thDescription.textContent = "Release Date";
      const thDateLimite = document.createElement("th");
      thDateLimite.textContent = "Editor";

      trElement.appendChild(thId);
      trElement.appendChild(thNom);
      trElement.appendChild(thDescription);
      trElement.appendChild(thDateLimite);

      tableau.appendChild(trElement);

      for (let i in data) {
        let trackrow = document.createElement("tr");
        let trackitem1 = document.createElement("td");
        let trackitem2 = document.createElement("td");
        let trackitem3 = document.createElement("td");
        let trackitem4 = document.createElement("td");

        trackitem1.innerHTML = data[i].title;
        trackitem2.innerHTML = data[i].author;
        trackitem3.innerHTML = data[i].release_date;
        trackitem4.innerHTML = data[i].editor;

        trackrow.appendChild(trackitem1);
        trackrow.appendChild(trackitem2);
        trackrow.appendChild(trackitem3);
        trackrow.appendChild(trackitem4);

        tableauBody.appendChild(trackrow);
      }
    }
  };
  xhr.send();
}
