displayMovies(false);

const form = document.querySelector("#btn");
form.addEventListener("click", formSearch);

//-------------------------------------//

function displayMovies(visible) {
  const loading = document.querySelector("#list");
  if (visible === true) {
    loading.style.display = "flex";
  } else {
    loading.style.display = "none";
  }
}
//-------------------------------------//

function displaySpinner(visible) {
  const loading = document.querySelector("#loader");
  if (visible === true) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}

//-------------------------------------//

function displayError(visible) {
  const loading = document.querySelector("#error");
  if (visible === true) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}

//-------------------------------------//

async function formSearch(event) {
  event.preventDefault();
  // console.log("ok");

  const search = document.querySelector("#search").value;
  console.log("search", search);

  try {
    // TODO: start the spinner

    // const loading = document.querySelector("#loader");
    // loading.style.display = "block";
    displaySpinner(true);

    // TODO: hide the error message (which maybe was from before)
    displayError(false);

    const movies = await findMovies(search);
    if (movies.ok === false) {
      displayError(true);
    } else {
      // console.log("movies", movies);

      // TODO: create HTML list
      const resultsContainer = document.querySelector("#list");
      resultsContainer.innerHTML = "";

      movies.forEach(function (movie) {
        let img = movie.Poster;
        if (img === "N/A") {
          img = "assets/images/andrew-ruiz-348421.jpg";
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
    // console.log("error");
    displayError(true);
    displayMovies(false);
  } finally {
    // console.log("finally");

    // const loading = document.querySelector("#loader");
    // loading.style.display = "none";
    displaySpinner(false);
  }
}

//-------------------------------------//

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

function displayError(visible) {
  const loading = document.querySelector("#error");
  if (visible === true) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}
