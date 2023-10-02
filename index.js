const container = document.getElementById("container");
const moonbox = document.getElementById("moonbox");
const moonButton = document.getElementById("runMoonButton");
const sunButton = document.getElementById("sunButton");

const sunFirst = document.getElementById("firstSunObject");

const sunCirle = document.getElementById("sunCircle");
const sunRect1 = document.getElementById("sunRect1");
const sunRect2 = document.getElementById("sunRect2");
const sunRect3 = document.getElementById("sunRect3");
const sunRect4 = document.getElementById("sunRect4");
const sunRect5 = document.getElementById("sunRect5");
const sunRect6 = document.getElementById("sunRect6");
const sunRect7 = document.getElementById("sunRect7");
const sunRect8 = document.getElementById("sunRect8");
const sunOpa = document.getElementById("sunOpa");

function sunStep1() {
  sunCirle.setAttribute("fill", "#FF8100");
  sunRect1.setAttribute("fill", "#FF8100");
  sunRect2.setAttribute("fill", "#FF8100");
  sunRect3.setAttribute("fill", "#FF8100");
  sunRect4.setAttribute("fill", "#FF8100");
  sunRect5.setAttribute("fill", "#FF8100");
  sunRect6.setAttribute("fill", "#FF8100");
  sunRect7.setAttribute("fill", "#FF8100");
  sunRect8.setAttribute("fill", "#FF8100");
  sunOpa.setAttribute("opacity", "0.1");
}

function sunStep2() {
  sunCirle.setAttribute("fill", "#FF6700");
  sunRect1.setAttribute("fill", "#FF6700");
  sunRect2.setAttribute("fill", "#FF6700");
  sunRect3.setAttribute("fill", "#FF6700");
  sunRect4.setAttribute("fill", "#FF6700");
  sunRect5.setAttribute("fill", "#FF6700");
  sunRect6.setAttribute("fill", "#FF6700");
  sunRect7.setAttribute("fill", "#FF6700");
  sunRect8.setAttribute("fill", "#FF6700");
  sunOpa.setAttribute("opacity", "0.1");
}

function sunStep3() {
  sunCirle.setAttribute("fill", "#FF4D00");
  sunRect1.setAttribute("fill", "#FF4D00");
  sunRect2.setAttribute("fill", "#FF4D00");
  sunRect3.setAttribute("fill", "#FF4D00");
  sunRect4.setAttribute("fill", "#FF4D00");
  sunRect5.setAttribute("fill", "#FF4D00");
  sunRect6.setAttribute("fill", "#FF4D00");
  sunRect7.setAttribute("fill", "#FF4D00");
  sunRect8.setAttribute("fill", "#FF4D00");
  sunOpa.setAttribute("opacity", "0.2");
}

function sunStep4() {
  sunCirle.setAttribute("fill", "#FF0000");
  sunRect1.setAttribute("fill", "#FF0000");
  sunRect2.setAttribute("fill", "#FF0000");
  sunRect3.setAttribute("fill", "#FF0000");
  sunRect4.setAttribute("fill", "#FF0000");
  sunRect5.setAttribute("fill", "#FF0000");
  sunRect6.setAttribute("fill", "#FF0000");
  sunRect7.setAttribute("fill", "#FF0000");
  sunRect8.setAttribute("fill", "#FF0000");
  sunOpa.setAttribute("opacity", "0.7");
}

container.classList.add(
  "position-relative",
  "border",
  "border-1",
  "border-danger",
  "m-16"
);
container.style.maxWidth = "50%";
container.style.height = "25rem";

const sun = document.createElement("img");

sun.src = "./assets/sun.png";
sun.alt = "First sun";
sun.width = 75;
sun.height = 75;
sun.classList.add("border", "border-1", "border-black");
container.appendChild(sun);

moonbox.classList.add("bg-dark", "d-flex", "justify-content-center");
moonbox.style.width = "15%";
moonbox.style.height = "80%";
moonbox.style.right = "150px";
moonbox.style.top = "0";

const moon = document.createElement("img");
moon.src = "./assets/moon.png";
moon.alt = "Moon";
moon.width = 75;
moon.height = 75;
moon.style.position = "absolute";
moon.style.bottom = "0";
moonbox.appendChild(moon);

const whiteMoon = document.createElement("img");
whiteMoon.src = "./assets/whitemoon.png";
whiteMoon.alt = "White Moon";
whiteMoon.width = 75;
whiteMoon.height = 75;
whiteMoon.style.position = "absolute";
whiteMoon.style.display = "none";
moonbox.appendChild(whiteMoon);

function addResponsiveClasses() {
  if (window.innerWidth >= 1200) {
    container.classList.add("d-lg-block");
    moonbox.style.right = "150px";
    moonbox.style.width = "15%";
    sun.style.width = "75px";
    sun.style.height = "75px";
    moon.style.width = "75px";
    moon.style.height = "75px";
    whiteMoon.style.width = "75px";
    whiteMoon.style.height = "75px";
  } else if (window.innerWidth >= 992) {
    container.classList.add("d-md-block");
    moonbox.style.right = "150px";
    moonbox.style.width = "15%";
    sun.style.width = "65px";
    sun.style.height = "65px";
    moon.style.width = "65px";
    moon.style.height = "65px";
    whiteMoon.style.width = "65px";
    whiteMoon.style.height = "65px";
  } else {
    container.classList.add("d-sm-block");
    moonbox.style.right = "50px";
    moonbox.style.width = "15%";
    sun.style.width = "60px";
    sun.style.height = "60px";
    moon.style.width = "60px";
    moon.style.height = "60px";
    whiteMoon.style.width = "60px";
    whiteMoon.style.height = "60px";
  }
}

function moveSun() {
  const radius = container.clientWidth / 2;
  let angle = 0;
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight;

  addResponsiveClasses();

  function animate() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY - radius * Math.sin(angle);

    sun.style.transform = `translate(${x}px, ${y}px`;

    angle += 0.005;

    if (angle <= Math.PI) {
      requestAnimationFrame(animate);
    } else {
      sun.style.display = "none";
    }
  }

  animate();
}

//moveSun();

function moveMoon() {
  let position = 0;
  const transitionPosition = 81;
  let transitionComplete = false;

  function animateMoon() {
    if (!transitionComplete && position === transitionPosition) {
      moon.style.display = "none";
      whiteMoon.style.display = "block";
      transitionComplete = true;
    }

    if (position <= moonbox.clientHeight - moon.clientHeight) {
      if (!transitionComplete) {
        moon.style.bottom = position + "px";
      }
      whiteMoon.style.bottom = position + "px";
      position++;
      console.log(position);

      requestAnimationFrame(animateMoon);
    }
  }

  animateMoon();
}

removeEventListener("click", moveMoon);
moonButton.addEventListener("click", moveMoon);

removeEventListener("click", sunStep1);
sunButton.addEventListener("click", sunStep1);

window.addEventListener("resize", addResponsiveClasses);
