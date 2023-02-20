import { displayElement } from "./shared.js";

displayMovie(false);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("imdbID");

if (id !== null) {
  fetchMovie(id);
} else {
  displayError(true);
}

function displayError(visible) {
  displayElement(visible, "#error", "block");
}

function displayMovie(visible) {
  displayElement(visible, "#card", "flex");

  displayElement(visible, "#title-info", "block");
}

function displaySpinner(visible) {
  displayElement(visible, "#loader", "flex");
}

function showImg(img) {
  if (img === "N/A") {
    img = "assets/images/image-not-available.jpg";
  }
  document.querySelector("#img").src = img;
}

async function fetchMovie(imdbID) {
  displaySpinner(true);

  displayError(false);

  const apiKey = "7e50890c";
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);

    if (response.ok === false) {
      displayError(true);
    } else {
      const data = await response.json();

      showImg(data.Poster);
      document.querySelector("#title").innerHTML = data.Title;
      document.querySelector("#year").innerHTML = data.Year;
      document.querySelector("#type").innerHTML = data.Type;
      document.querySelector("#genre").innerHTML = data.Genre;
      document.querySelector("#director").innerHTML = data.Director;
      document.querySelector("#plot").innerHTML = data.Plot;

      document.querySelector("#movie-title").innerHTML = data.Title;
      document.title = data.Title;

      displayMovie(true);
    }
  } catch (e) {
    displayError(true);

    displayMovie(false);
  } finally {
    displaySpinner(false);
  }
}
