formSubmit = function() {
  var emailValue = document.getElementById("emailBox").value;
  var interestValue = document.getElementById("interestBox").options[
    document.getElementById("interestBox").selectedIndex
  ].text;
  if (emailValue == "" || !document.getElementById("emailBox").validity.valid) {
    document.getElementById("error").style.visibility = "visible";
  } else {
    document.getElementById("error").style.visibility = "hidden";
    console.log("Email: " + emailValue + "\nInterest: " + interestValue);
  }
};

//some inspiration from https://stackoverflow.com/questions/32344800/how-to-submit-a-form-and-redirect-to-a-page-after-form-validation
