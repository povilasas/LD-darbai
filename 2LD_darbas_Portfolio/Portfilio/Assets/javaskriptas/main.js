function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
setInterval(() => {
  document.getElementById("time").textContent = getTime();
}, 1000);
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("Please enter a valid email address! format example@mailname.domaimn");
  return false;
}

function validatePhoneNumber(phone) {
  if (/^\+{1}?([0-9]{11})$/.test(phone)) {
    return true;
  }
  alert("Please enter a valid 10-digit phone number! format +XXXXXXXXXX");
  return false;
}
function validateStreetAddress(adress) {
if(/^[a-zA-Z0-9 . ,]*$/.test(adress)){
  return true;
}
alert("Please enter a valid adress! Upper lower characters nubers commas and dots only");
return false;
}

window.onload = function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    adress =street + ", "+ city + ", "+ state;

    if (!validateEmail(email) || !validatePhoneNumber(phone)  || !validateStreetAddress(adress)) {
      return;
    }

    var formData = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      street: street,
      city: city,
      state: state,
      num1: num1,
      num2: num2,
      num3: num3,
      num4: num4,
      num5: num5
    };

    console.log(formData);

    var average = (num1 + num2 + num3 + num4 + num5) / 5;

    var display = document.getElementById("display");
    display.innerHTML = "First Name: " + fname + "<br>" +
                        "Last Name: " + lname + "<br>" +
                        "Email: " + email + "<br>" +
                        "Phone: " + phone + "<br>" +
                        "andress: " + adress + "<br>"+
                        "Number 1: " + num1 + "<br>" +
                        "Number 2: " + num2 + "<br>" +
                        "Number 3: " + num3 + "<br>" +
                        "Number 4: " + num4 + "<br>" +
                        "Number 5: " + num5 + "<br>" +
                        "Average: " + average;
                        if (average < 3) {
                          display.style.color = "red";
                        } else if (average >= 5 && average < 10) {
                          display.style.color = "orange";
                        } else {
                          display.style.color = "green";
                        }
  });
};
