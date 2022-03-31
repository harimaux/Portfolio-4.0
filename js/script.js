/* ---------------------- Displays Navigation Menu ---------------------- */
let nav = document.querySelector("nav");

setTimeout(navSlider, 800);

function navSlider() {
  nav.classList.add("nav_slider");
  clearTimeout();
}

/* ---------------------- Scroll Events ---------------------- */

//Page 2 - digits animation starter
let digitTimer;
let fired = 0;

//Pages Headings
let page2TextShow = document.querySelector(".page_2_text");
let page3TextShow = document.querySelector(".page_3_text");
let page4TextShow = document.querySelector(".page_4_text");

window.addEventListener("scroll", () => {
  let page2TextPosition = page2TextShow.getBoundingClientRect().top;
  let page3TextPosition = page3TextShow.getBoundingClientRect().top;
  let page4TextPosition = page4TextShow.getBoundingClientRect().top;

  let objectOnScreenPosition = window.innerHeight / 2.5;

  if (page2TextPosition < objectOnScreenPosition) {
    page2TextShow.classList.add("page_2_text_show");

    //Runs animation function only once
    fired++;
    if (fired == 1) {
      digitTimer = setInterval(randomDigits, 5);
    }
  }
  if (page3TextPosition < objectOnScreenPosition) {
    page3TextShow.classList.add("page_3_text_show");
  }
  if (page4TextPosition < objectOnScreenPosition) {
    page4TextShow.classList.add("page_4_text_show");
  }
});

/* ---------------------- Page 1 ---------------------- */

const techLogos = [
  "bootstrap_logo.png",
  "css_logo.png",
  "html_logo.png",
  "jquery_logo.png",
  "js_logo.png",
  "linux_logo.png",
  "mysql_logo.png",
  "php_logo.png",
  "ps_logo.png",
  "react_logo.png",
  "vscode_logo.png",
];

let page1Canvas = document.querySelector(".page_1_animation_canvas");
let page1CanvasImgDiv = document.getElementById("page_1_animation_logo");

let page1Canvas2 = document.querySelector(".page_1_animation_canvas2");
let page1CanvasImgDiv2 = document.getElementById("page_1_animation_logo2");

setInterval(page1RandomLogo, 800);

function page1RandomLogo() {
  randomTechLogo = Math.floor(Math.random() * techLogos.length);
  randomPointAtCanvas = Math.floor(Math.random() * page1Canvas.clientWidth);

  //Creates div and append it to container
  let page1NewImgDiv = document.createElement("div");
  page1CanvasImgDiv.appendChild(page1NewImgDiv);

  //Displays image in created div and apply random margin
  page1NewImgDiv.innerHTML = `<img src=images/page_1/logos/${techLogos[randomTechLogo]}>`;
  page1NewImgDiv.style = `margin-left: ${randomPointAtCanvas}px`;

  //Removes child div
  var countDivs = page1CanvasImgDiv.getElementsByTagName("div").length;
  if (countDivs == 6) {
    page1CanvasImgDiv.removeChild(page1CanvasImgDiv.firstChild);
  }

  //Same thing, different div and random numbers

  randomTechLogo2 = Math.floor(Math.random() * techLogos.length);
  randomPointAtCanvas2 = Math.floor(Math.random() * page1Canvas2.clientWidth);

  //Creates div and append it to container
  let page1NewImgDiv2 = document.createElement("div");
  page1CanvasImgDiv2.appendChild(page1NewImgDiv2);

  //Displays image in created div and apply random margin
  page1NewImgDiv2.innerHTML = `<img src=images/page_1/logos/${techLogos[randomTechLogo2]}>`;
  page1NewImgDiv2.style = `margin-left: ${randomPointAtCanvas2}px`;

  //Removes child div
  var countDivs2 = page1CanvasImgDiv2.getElementsByTagName("div").length;
  if (countDivs2 == 6) {
    page1CanvasImgDiv2.removeChild(page1CanvasImgDiv2.firstChild);
  }
}

/* ---------------------- Page 2 ---------------------- */

let page2Digits = document.getElementById("page_2_digits_animation");
let page2counter = 0;
let page2counterTotal = 0;

function randomDigits() {
  page2counter++;
  page2counterTotal++;

  let randomNumber = Math.floor(Math.random() * 2);

  page2Digits.innerHTML += `${randomNumber}`;

  if (page2counter == 50) {
    page2Digits.innerHTML += `<br>`;
    page2counter = 0;
  }

  if (page2counterTotal == 700) {
    clearInterval(digitTimer);
    let page2DigitsNewDiv = document.createElement("div");
    page2DigitsNewDiv.classList.add("page2digits_square");
    page2Digits.appendChild(page2DigitsNewDiv);

    setTimeout(enlargeLetters, 1600);

    function enlargeLetters() {
      page2Digits.style.fontSize = "27px";
      page2Digits.classList.add("glow");

      clearTimeout(enlargeLetters);
    }
  }
}

/* ---------------------- Page 3 ---------------------- */

const cardsArray = [
  "vinyl.jpg",
  "scienceLab.jpg",
  "harris.jpg",
  "starwars.jpg",
  "pong.jpg",
  "todo.jpg",
  "topview.jpg",
  "textgame.jpg",
  "bkb.jpg",
];

/* ---------------------- Page 4 ---------------------- */
