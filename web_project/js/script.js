function showAlert(message) {
  alert(message);
}

document
  .getElementById("toDoButton")
  .addEventListener("click", function () {
    window.open("todo.html", "_blank");
  });

document
  .getElementById("calcButton")
  .addEventListener("click", function () {
    showAlert("You clicked the Calculator App button!");
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh
    alert("Form submitted!");
  });

const formData = {
  firstName: document.getElementById("fname").value,
  lastName: document.getElementById("lname").value,
  email: document.getElementById("email").value,
  message: document.getElementById("msg").value,
};

console.log(formData);




