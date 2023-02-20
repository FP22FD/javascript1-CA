import { displayElement } from "./shared.js";

displayMovies(false);

const form = document.querySelector("#btn");
form.addEventListener("click", formSearch);

function displayMovies(visible) {
  displayElement(visible, "#list", "flex");
}

function displaySpinner(visible) {
  displayElement(visible, "#loader", "block");
}

function displayError(visible) {
  displayElement(visible, "#error", "block");
}

async function formSearch(event) {
  event.preventDefault();
  const search = document.querySelector("#search").value;
  if (search === "") {
    return;
  }

  try {
    displaySpinner(true);

    displayError(false);

    const movies = await findMovies(search);
    if (movies.ok === false) {
      displayError(true);
    } else {
      const resultsContainer = document.querySelector("#list");
      resultsContainer.innerHTML = "";

      movies.forEach(function (movie) {
        let img = movie.Poster;
        if (img === "N/A") {
          img = "assets/images/image-not-available.jpg";
        }
        const html = `
      <a href="details.html?imdbID=${movie.imdbID}">
        <div class="item">
          <img src="${img}" alt="${movie.Title}" />
          <dl>
            <dt>Title</dt>
            <dd>${movie.Title}</dd>

            <dt>Year</dt>
            <dd>${movie.Year}</dd>

            <dt>Type</dt>
            <dd>${movie.Type}</dd>
          </dl>
          <!-- <p>Title: <span>${movie.Title}</span></p>
          <p>Year: <span>${movie.Year}</span></p>
          <p>Type: <span>${movie.Type}</span></p>-->
        </div>
      </a>`;
        resultsContainer.innerHTML += html;
      });
      displayMovies(true);
    }
  } catch (e) {
    displayError(true);
    displayMovies(false);
  } finally {
    displaySpinner(false);
  }
}

async function findMovies(text) {
  const apiKey = "7e50890c";
  const url = `https://www.omdbapi.com/?s=${text}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);

  if (data.Response === "False") {
    throw new Error("API failed");
  }
  return data.Search;
}
