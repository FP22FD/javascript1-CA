displayMovie(false);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("imdbID");
// console.log(id);

if (id !== null) {
  fetchMovie(id);
} else {
  displayError(true);
}

function displayError(visible) {
  const error = document.querySelector("#error");
  if (visible === true) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

function displayMovie(visible) {
  const card = document.querySelector("#card");
  if (visible === true) {
    card.style.display = "flex";
  } else {
    card.style.display = "none";
  }

  const title = document.querySelector("#title-info");
  if (visible === true) {
    title.style.display = "block";
  } else {
    title.style.display = "none";
  }
}

function displaySpinner(visible) {
  const loading = document.querySelector("#loader");
  if (visible === true) {
    loading.style.display = "flex";
  } else {
    loading.style.display = "none";
  }
}

async function fetchMovie(imdbID) {
  //   start the spinner
  //   const loading = document.querySelector("#loader");
  //   loading.style.display = "block";
  displaySpinner(true);

  //   hide the error message (which maybe was from before)
  displayError(false);

  const apiKey = "7e50890c";
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);

    if (response.ok === false) {
      displayError(true);
    } else {
      const data = await response.json();
      console.log("data", data);

      //   const img = document.querySelector("#img");
      //   console.log("src", img.src);
      //   img.src = data.Poster;

      document.querySelector("#img").src = data.Poster;
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
    //  error msg
    console.log("error");
    displayError(true);

    displayMovie(false);
  } finally {
    //  hide spinner
    // console.log("finally");

    // const loading = document.querySelector("#loader");
    // loading.style.display = "none";

    displaySpinner(false);
  }
}
