//-----------------Index Page-----------------//

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
    // Start the spinner
    // const loading = document.querySelector("#loader");
    // loading.style.display = "block";
    displaySpinner(true);

    // Hide the error message (which maybe was from before)
    displayError(false);

    const movies = await findMovies(search);
    if (movies.ok === false) {
      displayError(true);
    } else {
      // console.log("movies", movies);

      // Create HTML list
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

//-----------------Details page-----------------//

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
    title.style.display = "flex";
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
  //   Start the spinner
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
    //  Error msg
    console.log("error");
    displayError(true);

    displayMovie(false);
  } finally {
    //  Hide spinner
    // console.log("finally");

    // const loading = document.querySelector("#loader");
    // loading.style.display = "none";

    displaySpinner(false);
  }
}

//-----------------Contact Page-----------------//

//                 form validation              //

const form = document.querySelector("#contact-form");
form.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();

  const fullName = document.querySelector("#input-name");
  const nameError = document.querySelector("#name-error");

  const subject = document.querySelector("#input-subject");
  const subjectError = document.querySelector("#subject-error");

  const email = document.querySelector("#input-email");
  const emailError = document.querySelector("#email-error");

  const address = document.querySelector("#input-address");
  const addressError = document.querySelector("#address-error");

  const isFormValid = document.querySelector("#isFormValid");

  const isNameValid = fullName.value.length > 0;
  if (isNameValid) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  const isSubjectValid = subject.value.length >= 10;
  if (isSubjectValid) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  const isEmailValid = email.value.length > 0 && validateEmail(email.value);
  if (isEmailValid) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  const isAddressValid = address.value.length >= 25;
  if (isAddressValid) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (
    isNameValid &&
    isSubjectValid &&
    isEmailValid &&
    isAddressValid) {
    isFormValid.style.display = "block";
  } else {
    isFormValid.style.display = "none";

    console.log("validation passed");
  }

}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
