function fequal() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = x == parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "== Result is: " + z;
}

function fequalwithtype() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = x === parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "=== Result is: " + z;
}

function fnotequal() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = x != parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "== Result is: " + z;
}

function fnotequalwithtype() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = x !== parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "=== Result is: " + z;
}

function fgt() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) > parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "gt Result is: " + z;
}

function flt() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) < parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "lt Result is: " + z;
}

function fgte() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) >= parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "gte Result is: " + z;
}

function flte() {
  //get value of value1 box
  let x = document.getElementById("value1").value;

  //get value of value2 box
  let y = document.getElementById("value2").value;

  //perform arithmetic operation
  let z = parseInt(x) <= parseInt(y);

  //place the result in result box
  document.getElementById("res").value = "lte Result is: " + z;
}
