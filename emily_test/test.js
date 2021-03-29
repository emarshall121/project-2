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
// 
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