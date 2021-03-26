let bookDisplay = document.querySelector(".searchDisplay");
const div = document.createElement('div')
const h4 = document.createElement('h4')
const a = document.createElement('a')
const img = document.createElement('img')

// This function creates the cards
const renderBook = function(){
  let searchTerm = document.getElementById("searchTerm").value;
  // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDHOg_t2vNBsORqK0ds6iUEqnxIpcAWthg`)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(response) {
  //     console.log(response.items[0]);
  //     // const book = 
  //     // make book cards and save buttons

  //   })
  
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
      dataType: "json",
      success: function(data) {
        // console.log(data.items[0].volumeInfo.title)
        for(i=0; i<data.items.length; i++){
          // const card = document.createElement('div');
          // console.log(card);
          // card.className = 'card';

          let title = results.innerHTML += "<h2>" + "Title:" + data.items[i].volumeInfo.title + "</h2>"
          let author = results.innerHTML += "<h3>" + "Author(s):" + data.items[i].volumeInfo.authors + "</h3>"
          let genre = results.innerHTML += "<h3>" + "Genre:" + data.items[i].volumeInfo.categories + "</h3>"
          let publishedDate = results.innerHTML += "<h3>" + "Published on:" + data.items[i].volumeInfo.publishedDate + "</h3>"
          let pageCount = results.innerHTML += "<h3>" + "Pages:" + data.items[i].volumeInfo.pageCount + "</h3>"

          // // const title = document.createElement('div');
          // // const author = document.createElement('div');

          // card.append(title);
          // card.append(author);
          // return card;

        }
      },
      type: 'GET'
    });
}

// Event listener to run the renderBook function when the search button is pressed
document.getElementById("searchButton").addEventListener("click", renderBook);

// This function will save data to db
const saveBook = function(body, bookArray){
  let bookData = {
    id: 1,
    title: "title",
    author: "Mr. Ed",
    genre: "Sci-Fiction",
    pages: 110,
    published: 1998
  }

  const bookBeingSaved = [];

  app.post('/api/books', (req, res) => {
    console.log('I received a save request!');
    console.log(req.body);
    const data = req.body;
    bookBeingSaved.push(data);
    console.log(bookBeingSaved);
    Response.json({
      status: 'success',
      title: data.title,
      author: data.author,
      genre: data.categories,
      pages: data.pageCount,
      publishedDate: data.publishedDate
    });
  });
}

document.getElementById(SaveButton).addEventListener("click", saveBook);

var result = "Nothing found!";

function displaySearch() {
    "use strict";

    var displayResult = document.getElementById("displayResult");

    window.open("search.html") //How do I display the result in this page?

    displayResult.style.display = "block";
    displayResult.innerHTML = result;
}

function doSearch() {
    "use strict";

    var searchField = document.getElementById("searchField").value;

    for (var i = 0; i < db.length; i++) {
        if (db[i].artist.toUpperCase() === searchField.toUpperCase()) {
            result = db[i].artist;
        }
    }

    displaySearch();

}

function search() {
    "use strict";

    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", doSearch, false);
}

window.addEventListener("load", search, false);



