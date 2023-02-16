/* ---------form validation-------------------*/

const form = document.querySelector("#contact-form");
// export default form;

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
