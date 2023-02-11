displayMovie(false);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("imdbID");

// console.log(id);
fetchMovie(id);

function displayError(visible) {
  const loading = document.querySelector("#error");
  if (visible === true) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}

function displayMovie(visible) {
  const loading = document.querySelector("#card");
  if (visible === true) {
    loading.style.display = "flex";

  } else {
    loading.style.display = "none";
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
  // TODO: start the spinner
  //   const loading = document.querySelector("#loader");
  //   loading.style.display = "block";
  displaySpinner(true);

  // TODO: hide the error message (which maybe was from before)
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

      displayMovie(true);
    }
  } catch (e) {
    // TODO: error msg
    console.log("error");
    displayError(true);

    displayMovie(false);
  } finally {
    // TODO: hide spinner

    // console.log("finally");

    // const loading = document.querySelector("#loader");
    // loading.style.display = "none";

    displaySpinner(false);
  }
}
