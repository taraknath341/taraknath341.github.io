"use strict";
// যখন পেইজ লোড হবে 
let pageLoad = function () {
  const loader = document.querySelector(".loader");
  const main = document.querySelector("#main");
  main.style.display = "block";
  loader.style.zoom = "100%";

  window.removeEventListener("load", pageLoad);
  pageLoad = null;
}
window.addEventListener("load", pageLoad);
// কালার ডিজাইন এর জন্য। 
let countB = 0;
let tn = document.querySelectorAll(".Taraknath");
function firstTaraknath() {
  countB++;
  switch (countB) {
    case 1:
      tn[0].innerHTML = '<font color="red">Hi </font>i,m Taraknath Karan';
      break;
    case 2:
      tn[0].innerHTML = 'H<font color="red">i i</font>,m Taraknath Karan';
      break;
    case 3:
      tn[0].innerHTML = 'Hi<font color="red"> i,</font>m Taraknath Karan';
      break;
    case 4:
      tn[0].innerHTML = 'Hi <font color="red">i,m</font> Taraknath Karan';
      break;
    case 5:
      tn[0].innerHTML = 'Hi i<font color="red">,m </font>Taraknath Karan';
      break;
    case 6:
      tn[0].innerHTML = 'Hi i,<font color="red">m T</font>araknath Karan';
      break;
    case 7:
      tn[0].innerHTML = 'Hi i,m<font color="red"> Ta</font>raknath Karan';
      break;
    case 8:
      tn[0].innerHTML = 'Hi i,m <font color="red">Tar</font>aknath Karan';
      break;
    case 9:
      tn[0].innerHTML = 'Hi i,m T<font color="red">ara</font>knath Karan';
      break;
    case 10:
      tn[0].innerHTML = 'Hi i,m Ta<font color="red">rak</font>nath Karan';
      break;
    case 11:
      tn[0].innerHTML = 'Hi i,m Tar<font color="red">akn</font>ath Karan';
      break;
    case 12:
      tn[0].innerHTML = 'Hi i,m Tara<font color="red">kna</font>th Karan';
      break;
    case 13:
      tn[0].innerHTML = 'Hi i,m Tarak<font color="red">nat</font>h Karan';
      break;
    case 14:
      tn[0].innerHTML = 'Hi i,m Tarakn<font color="red">ath</font> Karan';
      break;
    case 14:
      tn[0].innerHTML = 'Hi i,m Tarakna<font color="red">th </font>Karan';
      break;
    case 15:
      tn[0].innerHTML = 'Hi i,m Taraknat<font color="red">h K</font>aran';
      break;
    case 16:
      tn[0].innerHTML = 'Hi i,m Taraknath<font color="red"> Ka</font>ran';
      break;
    case 17:
      tn[0].innerHTML = 'Hi i,m Taraknath <font color="red">Kar</font>an';
      break;
    case 18:
      tn[0].innerHTML = 'Hi i,m Taraknath K<font color="red">ara</font>n';
      break;
    case 19:
      tn[0].innerHTML = 'Hi i,m Taraknath Ka<font color="red">ran</font>';
      break;
    case 20:
      tn[0].innerHTML = '<font color="red">H</font>i i,m Taraknath Kar<font color="red">an</font>';
      break;
    case 21:
      tn[0].innerHTML = '<font color="red">Hi</font> i,m Taraknath Kara<font color="red">n</font>';
      break;
    default: countB = 0;
  }
}
let countC = 0;
function lastTaraknath() {
  countC++;
  switch (countC) {
    case 1:
      tn[1].innerHTML = '<font color="red">it </font>is My Portfolio Website.';
      break;
    case 2:
      tn[1].innerHTML = 'i<font color="red">t i</font>s My Portfolio Website.';
      break;
    case 3:
      tn[1].innerHTML = 'it<font color="red"> is</font> My Portfolio Website.';
      break;
    case 4:
      tn[1].innerHTML = 'it <font color="red">is </font>My Portfolio Website.';
      break;
    case 5:
      tn[1].innerHTML = 'it i<font color="red">s M</font>y Portfolio Website.';
      break;
    case 6:
      tn[1].innerHTML = 'it is<font color="red"> My</font> Portfolio Website.';
      break;
    case 7:
      tn[1].innerHTML = 'it is <font color="red">My </font>Portfolio Website.';
      break;
    case 8:
      tn[1].innerHTML = 'it is M<font color="red">y P</font>ortfolio Website.';
      break;
    case 9:
      tn[1].innerHTML = 'it is My<font color="red"> Po</font>rtfolio Website.';
      break;
    case 10:
      tn[1].innerHTML = 'it is My <font color="red">Por</font>tfolio Website.';
      break;
    case 11:
      tn[1].innerHTML = 'it is My P<font color="red">ort</font>folio Website.';
      break;
    case 12:
      tn[1].innerHTML = 'it is My Po<font color="red">rtf</font>olio Website.';
      break;
    case 13:
      tn[1].innerHTML = 'it is My Por<font color="red">tfo</font>lio Website.';
      break;
    case 14:
      tn[1].innerHTML = 'it is My Port<font color="red">fol</font>io Website.';
      break;
    case 15:
      tn[1].innerHTML = 'it is My Portf<font color="red">oli</font>o Website.';
      break;
    case 16:
      tn[1].innerHTML = 'it is My Portfo<font color="red">lio</font> Website.';
      break;
    case 17:
      tn[1].innerHTML = 'it is My Portfol<font color="red">io </font>Website.';
      break;
    case 18:
      tn[1].innerHTML = 'it is My Portfoli<font color="red">o W</font>ebsite.';
      break;
    case 19:
      tn[1].innerHTML = 'it is My Portfolio<font color="red"> We</font>bsite.';
      break;
    case 20:
      tn[1].innerHTML = 'it is My Portfolio <font color="red">Web</font>site.';
      break;
    case 21:
      tn[1].innerHTML = 'it is My Portfolio W<font color="red">ebs</font>ite.';
      break;
    case 22:
      tn[1].innerHTML = 'it is My Portfolio We<font color="red">bsi</font>te.';
      break;
    case 23:
      tn[1].innerHTML = 'it is My Portfolio Web<font color="red">sit</font>e.';
      break;
    case 24:
      tn[1].innerHTML = 'it is My Portfolio Webs<font color="red">ite</font>.';
      break;
    case 25:
      tn[1].innerHTML = 'it is My Portfolio Websi<font color="red">te.</font>';
      break;
    case 26:
      tn[1].innerHTML = '<font color="red">i</font>t is My Portfolio Websit<font color="red">e.</font>';
      break;
    case 27:
      tn[1].innerHTML = '<font color="red">it</font> is My Portfolio Website<font color="red">.</font>';
      break;
    default:
      countC = 0;
  }
}
function fullTaraknath() {
  lastTaraknath();
  firstTaraknath();
}
setInterval(fullTaraknath, 50);

// top button
const topBtn = document.querySelector("#back-to-top");
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

window.onscroll = () => {
  if (window.scrollY > 999) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}