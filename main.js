const form = document.getElementById("myForm");
const personalNumber = document.getElementById("personal_number");
const mobileNumber = document.getElementById("mobile_number");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

const personalNumberError = document.getElementById("personal_number_error");
const mobileNumberError = document.getElementById("mobile_number_error");
const termsError = document.getElementById("terms_error");

terms.addEventListener("change", () => {
  submitBtn.disabled = !terms.checked;
});

form.addEventListener("submit", (e) => {
  let isValid = true;

  if (!/^\d{11}$/.test(personalNumber.value)) {
    personalNumberError.textContent =
      " სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.";
    isValid = false;
  } else {
    personalNumberError.textContent = "";
  }

  if (!/^\d{9}$/.test(mobileNumber.value)) {
    mobileNumberError.textContent =
      " სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 9-ის ტოლი.";
    isValid = false;
  } else {
    mobileNumberError.textContent = "";
  }

  if (!terms.checked) {
    termsError.textContent = "You must agree to the Terms and Conditions.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  if (!isValid) {
    e.preventDefault();
  }
});