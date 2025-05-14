"use strict";
let h1 = document.querySelector(".autotyping"),
inp = h1.innerHTML,
a = new String(inp),
countD = -1,
b,
x = "";
function autoTypeing(word, vaR) {
  countD++;
  b = word[countD]
  if (!(b === undefined)) {
    x += b;
    vaR.innerHTML = x;
  }
}
function subFunc() {
  autoTypeing(a, h1);
}
setInterval(subFunc, 2);

