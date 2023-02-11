setInterval(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "none";
}, 3000);

fetch("").then(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "none";
}, 3000);


https://www.omdbapi.com/?apikey=7e50890c&type=movie&s=avatar
https://www.omdbapi.com/?apikey=7e50890c&i=tt0499549

const movies = {
  Search: [
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Way of Water",
      Year: "2022",
      imdbID: "tt1630029",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - The Legend So Far",
      Year: "2005",
      imdbID: "tt1605838",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGQ1ZTNmNzItNGYyMC00MDk2LWJiZDAtZTkwZDFlNWJlYTVjXkEyXkFqcGdeQXVyODUxNDExNTg@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar: For the Glory",
      Year: "2019",
      imdbID: "tt10736726",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzFkZTMzOGUtOGM3NS00YzI2LTllMjgtODk0NDhkNWRiMTMzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: Creating the World of Pandora",
      Year: "2010",
      imdbID: "tt1599280",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjk4ZDAxN2MtYjhlNy00MzJhLWI1MGYtYjY5ZGJlY2YwMzNlXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg",
    },
    {
      Title: "Avatar Spirits",
      Year: "2010",
      imdbID: "tt1900832",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg",
    },
    {
      Title: "The Last Avatar",
      Year: "2014",
      imdbID: "tt4727514",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAyMDIyNzA4NV5BMl5BanBnXkFtZTgwMDgxNzE0ODE@._V1_SX300.jpg",
    },
    {
      Title: "The Guild: Do You Wanna Date My Avatar",
      Year: "2009",
      imdbID: "tt3051150",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Avatar",
      Year: "2011",
      imdbID: "tt1775309",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWE1YzU3MGItMDFjMC00MTRjLWEyMWEtOWUzZjAwNDJlNWExXkEyXkFqcGdeQXVyNjc3NzQ3NzY@._V1_SX300.jpg",
    },
    {
      Title: "Avatar",
      Year: "2005",
      imdbID: "tt0497595",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmE4MmQwYTItMzUyZS00OGJmLWI3MWEtODg1Mzc1ZDI4YWQ4XkEyXkFqcGdeQXVyODI0NDU2Mw@@._V1_SX300.jpg",
    },
  ],
  totalResults: "75",
  Response: "True",
};

foreach(movie in movies) {
const list = document.getElementById("list");

const title = movie.Title;
const year = movie.Year;
list.appendChild();
}
