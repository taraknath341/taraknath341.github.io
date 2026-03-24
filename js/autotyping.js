"use strict";
/*
Dev Name: Taraknath Karan.
Company: Tarak Program.
Portfolio: https://taraknath341.github.io
*/
let h1 = document.querySelector("#autotyping"),
  inp = h1.innerHTML,
  a = new String(inp),
  countD = -1,
  b,
  x = "";
function autoTypeing(word, vaR) {
  countD++;
  b = word[countD]
  if (b == undefined) {
    clearInterval(typingProcess);
  } else {
    x += b;
    vaR.innerHTML = x;
  }
}
function subFunc() {
  autoTypeing(a, h1);
  autoTypeing(a, h1);
}
let typingProcess = setInterval(subFunc, 1);
