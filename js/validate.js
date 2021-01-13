// JavaScript Document

//Initialize Variables

// assign form using class form to the form variable / get reference
const form = document.querySelector(".form");
// assign all inputs to the inputs variable / get reference
const inputs = document.querySelectorAll("input");
// assign states' options to the states variable / get reference
const states = document.querySelector("#states");
// assign all <p> with class name msg to the errorMsg variable / get reference
const errorMsg = document.querySelectorAll(".msg");
// assign all input[type="radio"] to the radios variable / get reference
const radios = document.querySelectorAll('input[type="radio"]');
// assign all input[type="checkbox"] to the radios variable / get reference
const checkbox = document.querySelectorAll('input[type="checkbox"');
// get reference af all <i> and assign them to radioCheckMissed variable
const radioCheckMissed = document.querySelectorAll("label>i");
// get reference of <div> with class name logo and assign to variable logo
const logo = document.querySelector(".logo");
// create object of RegExp and assign to variable strings
const patterns = {
  firstLastName: /^[a-z]{1,25}$/i, // Alpha only, from 1 to 25 chars
  address: /^\d{1,5}(\b\w*\b\s){1,3}\w*\.$/i, // Alphanumeric chars
  city: /^[a-z]{2,30}$/i, // Alpha only, from 2 to 30 chars
  zipCode: /^\d{5}$/, // Numeric only, max 5
  areaCode: /^\d{3}$/, // Numeric only, max 3
  telephone: /^\d{7}$/, // Numeric only, max 7
  email: /^([a-z\d\.-]{2,64})@([a-z\d-]{2,252})\.([a-z]{2,8})(\.[a-z{2,8}])?$/, // Standard e-mail convention
  password: /^[\w@-]{5,10}$/, // Word characters, min 5 - max 10
};

// add logo to the form
const addLogo = function () {
  // create element image
  let formLogo = document.createElement("img");
  // add src image path to the formLogo element
  formLogo.src = "img/cyclist.png";
  // append to the <div> logo to display
  logo.appendChild(formLogo);
}; // End of addLogo()

// invoke function
addLogo();

// when element gets focus, remove placeholder value
const removePlaceholder = function (input) {
  // assign an empty placeholder value
  input.placeholder = "";
}; // End of removePlaceholder()

// Reset form function
const resetForm = function () {
  // invoke the Array.prototype.forEach method in the context of the NodeList
  // for each inputs change back to default state
  [].forEach.call(inputs, function (el) {
    // change to class name ds
    el.setAttribute("class", "ds");
    // change back from empty placeholder to default value using data-placeholder
    el.placeholder = el.dataset.placeholder;
  });
  // for each radios or checks
  [].forEach.call(radioCheckMissed, function (el) {
    // remove assigned classes
    el.setAttribute("class", "");
  });
  // change states class to "ds"
  states.setAttribute("class", "ds");
  // remove each error messages
  [].forEach.call(errorMsg, function (el) {
    // assign empty content to each error msgs
    el.textContent = "";
  });
}; // End of resetForm()

// validate form function
const validateForm = function () {
  // declare and assign variable valid to true
  let valid = true;
  // test if first name value matches patterns regExp firstLastName string
  if (patterns.firstLastName.test(form.firstName.value)) {
    // if yes, add class name "passed"
    inputs[0].className = "passed";
  } else {
    // if not, assign class name "failed"
    inputs[0].className = "failed";
    // assign valid to false
    valid = false;
  } // end of first name test

  // test if last name value matches patterns regExp firstLastName string
  if (patterns.firstLastName.test(form.lastName.value)) {
    // if yes, add class name "passed"
    inputs[1].className = "passed";
  } else {
    // if not, assign class name "failed"
    inputs[1].className = "failed";
    // assign valid to false
    valid = false;
  } // end of last name test

  // test if address value matches patterns regExp address string
  if (patterns.address.test(form.address.value)) {
    // if yes, add class name "passed" to address input
    inputs[2].className = "passed";
  } else {
    // if not, assign class name "failed" to address input
    inputs[2].className = "failed";
    // assign valid to false
    valid = false;
  }
  // test if city value matches patterns regExp city string
  if (patterns.city.test(form.city.value)) {
    // if yes, add class name "passed" to city input
    inputs[3].className = "passed";
  } else {
    // if not, assign class name "failed" to city input
    inputs[3].className = "failed";
    // assign valid to false
    valid = false;
  }
  // call validateState function and check if state was selected
  if (validateState(states)) {
    // if yes, assign class "passed"
    states.className = "passed";
  }
  // if nothing selected apply css style class failed
  if (states.value == "choose") {
    states.className = "failed";
    // assign valid to false
    valid = false;
  } // End of States

  // test if zipCode value matches patterns regExp zipCode string
  if (patterns.zipCode.test(form.zipCode.value)) {
    // if yes, assign class "passed" to zipCode input
    inputs[4].className = "passed";
  } else {
    // if not, assign class name "failed" to zipCode input
    inputs[4].className = "failed";
    // assign valid to false
    valid = false;
  } // end of zipCode test

  // test if areaCode value matches patterns regExp areaCode string
  if (patterns.areaCode.test(form.areaCode.value)) {
    // if yes, assign class "passed" to areaCode input
    inputs[5].className = "passed";
  } else {
    // if not, assign class name "failed" to areaCode input
    inputs[5].className = "failed";
    // assign valid to false
    valid = false;
  } // end of areaCode test

  // test if telephone value matches patterns regExp telephone string
  if (patterns.telephone.test(form.telephone.value)) {
    // if yes, assign class "passed" to telephone input
    inputs[6].className = "passed";
  } else {
    // if not, assign class name "failed" to telephone input
    inputs[6].className = "failed";
    // assign valid to false
    valid = false;
  } // end of telephone test

  // test if email value matches patterns regExp of email string
  if (patterns.email.test(form.email.value)) {
    // if true, assign class "passed" to e-mail input
    inputs[7].className = "passed";
    // assign empty content to error message
    errorMsg[0].textContent = "";
  } else if (
    // test if input is not empty and test() value is false
    form.email.value != "" &&
    patterns.email.test(form.email.value) === false
  ) {
    //assign class name "failed" to e-mail input
    inputs[7].className = "failed";
    // assign new content (message) to <p>
    errorMsg[0].textContent = "You have entered an invalid email address";
    // assign valid to false
    valid = false;
  } else {
    // if not, assign class name "failed" to e-mail input
    inputs[7].className = "failed";
    // assign valid to false
    valid = false;
  } // End of Email

  // reenter Email and test the value with patterns regExp of email string
  if (patterns.email.test(form.reEmail.value)) {
    // if true, assign class "passed" to reEmail input
    inputs[8].className = "passed";
    // assign empty message to <p>
    errorMsg[1].textContent = "";
    // check if email value matches reEmail value
    if (form.email.value != form.reEmail.value) {
      // if not, assign class "failed" to reEmail input
      inputs[8].className = "failed";
      // assign error message to <p>
      errorMsg[1].textContent = "Your email address does not match";
      // assign valid to false
      valid = false;
    }
  } else {
    // if false, assign class "failed" to reEmail input
    inputs[8].className = "failed";
    // assign valid to false
    valid = false;
  } // End of reEmail

  // test if password value matches patterns regExp of password string
  if (patterns.password.test(form.password.value)) {
    // if true, assign class "passed" to password input
    inputs[9].className = "passed";
    // assign empty content to error message
    errorMsg[2].textContent = "";
  } else if (
    // test if input is not empty and test() value is false
    form.password.value != "" &&
    patterns.email.test(form.password.value) === false
  ) {
    // if yes, assign class "failed" to password input
    inputs[9].className = "failed";
    // assign error message
    errorMsg[2].textContent = "Please enter 5-10 chars";
    // assign valid to false
    valid = false;
  } else {
    // if false, assign class "failed" to password input
    inputs[9].className = "failed";
    // assign valid to false
    valid = false;
  } // end of password test

  // test if rePassword value matches patterns regExp of password string
  if (patterns.password.test(form.rePassword.value)) {
    // if true, assign class "passed" to password input
    inputs[10].className = "passed";
    // assign empty content to error message
    errorMsg[3].textContent = "";
    // check if password value matches rePassword value
    if (form.password.value != form.rePassword.value) {
      // if not, assign class "failed" to rePassword input
      inputs[10].className = "failed";
      // assign error message
      errorMsg[3].textContent = "Your password does not match";
      // assign valid to false
      valid = false;
    }
  } else {
    // if false, assign class "failed" to rePassword input
    inputs[10].className = "failed";
    // assign valid to false
    valid = false;
  } // end of rePassword test

  // invoke validateRadios function and check if radios were selected
  if (validateRadios(radios)) {
    // if true, assign class "passed" to <i>
    radioCheckMissed[0].className = "passed";
  } else {
    // if false, assign class "failed" to <i>
    radioCheckMissed[0].className = "failed";
    // assign valid to false
    valid = false;
  } // end of radios test

  // invoke validateCheckbox function and check if checkboxes were selected
  if (validateCheckbox(checkbox)) {
    // if true, assign class "passed" to <i>
    radioCheckMissed[1].className = "passed";
    // assign empty content to error message
    errorMsg[4].textContent = "";
  } else {
    // if false, assign class "failed" to <i>
    radioCheckMissed[1].className = "failed";
    // assign error message to <p>
    errorMsg[4].textContent = "Please select more than one";
    // assign valid to false
    valid = false;
  } // end of checkbox test

  // return valid value true or false depending on the tests
  return valid;

  // check if states were selected
  function validateState(items) {
    // iterate through options to check if any was selected
    for (let i = 0; i < items.options.length; i++) {
      if (items.options[i].selected === true) {
        // if yes, return true
        return true;
      }
    }
    // return false if non was selected
    return false;
  } // End of validateSate()

  // check if radio was selected
  function validateRadios(radio) {
    // iterate through all radios
    for (let i = 0; i < radio.length; i++) {
      // test if it was selected
      if (radio[i].checked) {
        // if true, return true value
        return true;
      }
    }
    // return false if non
    return false;
  } // end of validateRadios()

  // check how many options were selected and return if more than or equal two
  function validateCheckbox(checkbox) {
    let count = 0;
    // iterate through all checkboxes
    for (let i = 0; i < checkbox.length; i++) {
      // test if it was selected and count
      if (checkbox[i].checked) {
        // increment each time checkbox is selected
        count++;
      }
    }
    // return if more or equal to two
    return count >= 2;
  } // end of validateCheckbox()
}; // End of validateForm()
