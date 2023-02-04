
// function loading() {
//     const loader = document.querySelector("#loader");

//   if (loader === true) {
//     setTimeout(() => {
//       loader.style.display = "block";
//     }, 1000);

//   } else if (loader === false) {
//     setTimeout(() => {
//       loader.style.display = "none";
//     }, 1000);
//   }
// }

// loading(false);




/* ---------------------------------- */

setInterval(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "none";
}, 3000);


fetch('').then(() => {
  const loading = document.querySelector("#loader");
  loading.style.display = "none";
}, 3000);


// let visible = false;

// setInterval(() => {
//   const loading = document.querySelector("#loader");
//   if (visible === true) {
//     visible = false;
//   } else {
//     visible = true;
//   }

//   if (visible) {
//     loading.style.display = "block";
//   } else {
//     loading.style.display = "none";
//   }
// }, 1000);
