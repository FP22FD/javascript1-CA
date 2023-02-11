function displayError(visible) {
  const loading = document.querySelector("#error");
  if (visible === true) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}

// fare stessa cosa per lo spinner
// displaySpinner(visible)
