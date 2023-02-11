/* function spinner */

setInterval(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "none";
}, 3000);

fetch("").then(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "block";
}, 3000);
