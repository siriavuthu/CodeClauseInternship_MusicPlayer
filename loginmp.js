function func(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "SIRI" && password === "123456") {
    alert("successful login!");
    window.location.replace("mp.html");
  }
  else {
    alert("Invalid ID!");
    return false;
  }

}
