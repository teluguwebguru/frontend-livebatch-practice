function fadd() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) + parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "Addition Result is: " + z;
}

function fsub() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) - parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "Sub Result is: " + z;
}

function fmul() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) * parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "Mul Result is: " + z;
}

function fdiv() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) / parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "div Result is: " + z;
}

function fmod() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) % parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "Modulus Result is: " + z;
}

function fexp() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) ** parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "exp Result is: " + z;
}
