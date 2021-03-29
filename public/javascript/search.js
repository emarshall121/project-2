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
        const card = document.createElement('div');
        console.log(card);
        card.className = 'card';
        const title = document.createElement('div');
        const author = document.createElement('div');
        card.append(title);
        card.append(author);
        

        title.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
        author.innerHTML += "<h3>" + data.items[i].volumeInfo.authors + "</h2>"
        return card;

      }
      document.getElementById('results').appendChild (card);

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

let title, author, genre, pageCount, publishedDate;
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', async event => {
  const data = { title, author, genre, pageCount, publishedDate };
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // };
  // const response = await fetch('/api', options);
  // const json = await response.json();
  // console.log(json);
  console.log(data);
  });

