f = document.getElementById("fname");
/*document.addEventListener("mousemove", function (event) {
  document.getElementById("ev").innerHTML = event.clientX + "," + event.clientY;
});

document.addEventListener("keydown", function (event) {
  document.getElementById("ev").innerHTML = event.key;
});

window.addEventListener("load", function () {
  document.getElementById("ev").innerHTML =
    "Page Loaded Just now:" + new Date();
});*/

function fun() {
  let datenow = new Date();
  document.getElementById("ev").innerHTML =
    datenow.getHours() +
    ":" +
    datenow.getMinutes() +
    ":" +
    datenow.getSeconds();
}

let i = setInterval(fun, 1000); //repeatedly calls fun function- 3 seconds gap between every call
//setTimeout(fun, 7000); // calls fun function after 7 seconds from page load - only one time
function fun1() {
  clearInterval(i);
}
