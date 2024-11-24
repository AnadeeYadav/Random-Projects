var icon = document.getElementById("icon");
var span = document.getElementById("span");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="Images/Sun.png";
    span.innerHTML = "Light Theme";
  }
  else {
    icon.src= "Images/Moon.png";
    span.innerHTML = "Dark Theme";
  }
}

console.log("js is working");