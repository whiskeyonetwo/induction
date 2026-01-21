// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);

  li.appendChild(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  li.appendChild(span);

  span.onclick = function (ev) {
    ev.stopPropagation();
    this.parentElement.style.display = "none";
  };
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
const list = document.getElementById("myUL");

list.addEventListener("click", function(ev) {
  // Find the closest li ancestor
  const li = ev.target.closest("li");
  if (!li) return; // clicked outside li

  // Don't toggle checked if click was on close button
  if (ev.target.classList.contains("close")) return;

  li.classList.toggle("checked");
});

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function (ev) {
    ev.stopPropagation();
    this.parentElement.style.display = "none";
  };
}