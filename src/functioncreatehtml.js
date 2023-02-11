/* function create HTML element */

function createHTML(results) {
  const resultContainer = document.querySelector("#list");

  const movie = results.all;
  List.innerHtml = " ";

  for (let i = 0; i < movie.length; i++) {
    if (i === 10) break;
  }
  list.innerHtml += `<div.class="result">${movie[i].text}</div>`;
}


/*
let html = `<div class="item">`;
      if (movie.Poster !== "N/A") {
        html += `<img src="${movie.Poster}"/>`;
      }
      html += `<h2>${movie.Title}</h2>
      <h2>${movie.Year}</h2>
      <h2>${movie.Type}</h2>
      </div>`;
      resultsContainer.innerHTML += html;
*/