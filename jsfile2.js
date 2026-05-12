const b = 20;

function printhi() {
  return "hi from jsfile2";
}

function printhi1() {
  return "hi from jsfile2-1";
}

export default function printhi2() {
  return "hi from jsfile2-2";
}

function printhi3() {
  return "hi from jsfile2-3";
}

export { b, printhi, printhi3 };
