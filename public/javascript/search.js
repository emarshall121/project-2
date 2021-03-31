let bookDisplay = document.querySelector(".searchDisplay");

// This function creates the cards
const renderBook = function(){
  let searchTerm = document.getElementById("searchTerm").value;
 
  // Call to Google Books API
  $.ajax({
    url: `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
    dataType: "json",
    success: function(data) {
      // console.log(data.items[0].volumeInfo.title)
      for(i=0; i<data.items.length; i++){
        // create card layout level 3/3
        const level3 = document.createElement("div");
        level3.classList = ("card blue-grey darken-1");

        // Create Card Div
        const bookInfo = document.createElement("div");
        bookInfo.classList = ("card blue-grey");
        bookInfo.id = `result: ${i}`;
        level3.append(bookInfo);
        results.append(level3);

        // Book Title
        const titleH2 = document.createElement("h2");
        titleH2.classList = ('card-title h1');
        titleH2.innerHTML = data.items[i].volumeInfo.title;
        bookInfo.append(titleH2);
        results.append(bookInfo);

        // Create Author(s)
        const authorH3 = document.createElement("h3");
        authorH3.innerHTML = data.items[i].volumeInfo.authors;
        bookInfo.append(authorH3);
        results.append(bookInfo);

        // Create Genre
        const genreH3 = document.createElement("h3");
        genreH3.innerHTML = data.items[i].volumeInfo.categories;
        bookInfo.append(genreH3);
        results.append(bookInfo);

        // Create published date
        const publishedH3 = document.createElement("h3");
        publishedH3.innerHTML = data.items[i].volumeInfo.publishedDate;
        bookInfo.append(publishedH3);
        results.append(bookInfo);

        // Create page count
        const pageCountH3 = document.createElement("h3");
        pageCountH3.innerHTML = data.items[i].volumeInfo.pageCount;
        bookInfo.append(pageCountH3);
        results.append(bookInfo);


        // Creates the save button
        const saveButton = document.createElement("button");
        saveButton.innerHTML='SAVE';
        saveButton.id =  `saveButton ${i}`;
        bookInfo.append(saveButton);
      }
      // document.getElementById('results').appendChild (card);

    },
    type: 'GET'
  });

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

document.getElementById("saveButton").addEventListener("click", function () {
  event.preventDefault();
  console.log("You are saving a book");
  var title = document.getElementById('title').value
  var author = document.getElementById('author').value
  var genre = document.getElementById('genre').value
  var publishedDate = document.getElementById('publishedDate').value
  var pageCount = document.getElementById('pageCount').value

  const bookInfo = {
    method: 'POST',
    Headers: {
      'Content-Type': 'application/json'
    },
    
  }

})
// let title, author, genre, pageCount, publishedDate;
// const saveButton = document.getElementById("saveButton");
// saveButton.addEventListener('click', async event => {
//   const data = { title, author, genre, pageCount, publishedDate };
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: {
      
//     }
//   };
//   const response = await fetch('/api', options);
//   const json = await response.json();
//   console.log(json);
//   console.log(event);
//   });

