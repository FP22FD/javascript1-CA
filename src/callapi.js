/* function call API */

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=7e50890c";
const apiKey = "7e50890c"; //look at your api key em a variables

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);
  });
  