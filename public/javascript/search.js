let bookDisplay = document.querySelector(".searchDisplay");

// This function creates the cards
const renderBook = function(){
  let searchTerm = document.getElementById("searchTerm").value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDHOg_t2vNBsORqK0ds6iUEqnxIpcAWthg`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.items[0]);
      // const book = 
      // make book cards and save buttons

    })
}

document.getElementById("searchButton").addEventListener("click", renderBook);

// This function will save data to db
const saveBook = function(){
  let myObject = {
    id: 1,
    title: "title",
    author: "Mr. Ed",
    genre: "Sci-Fiction",
    pages: 110,
    published: 1998
  }

}


