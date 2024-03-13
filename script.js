function ValidateForm() {
  const email = document.getElementById("email");
  const emailValidatorRegex =
    /^[a-z]([a-z0-9]*[._-]{0,1}[a-z0-9]+){3,}@[a-z]([a-z0-9]*[-]{0,1}[a-z0-9]+){3,}\.[a-z]{2,4}$/;

  console.log("a");
  if (email.value == "") {
    SetErrorStat(email, "Whoops! It looks like you forgot to add your email");
  } else if (!email.value.match(emailValidatorRegex)) {
    SetErrorStat(email, "Please provide a valid email address");
  } else {
    document.getElementById("subscribeForm").classList.add("success");
    document.getElementById("thankYou").classList.add("success");
  }
  return false;
}

function SetErrorStat(email, errorText) {
  email.classList.add("email-error");
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = errorText;
  emailError.classList.add("email-error");
}
