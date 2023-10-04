const container = document.getElementById("container");
const moonbox = document.getElementById("moonbox");
const moonButton = document.getElementById("runMoonButton");
const sunButton = document.getElementById("sunButton");

const sunShape = document.getElementById("sunSVG");

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

const moonShape = document.getElementById("moonSVG");
const moonBody = document.getElementById("moonbodyCirle");
const moonTopOpa = document.getElementById("crescentOpa");
const moonSmallCircles = document.getElementsByClassName("moonOpaCirc");

container.classList.add(
  "position-relative",
  "border",
  "border-1",
  "border-danger",
  "m-16"
);
container.style.maxWidth = "50%";
container.style.height = "25rem";

container.appendChild(sunShape);

moonbox.classList.add("bg-dark", "d-flex", "justify-content-center");
moonbox.style.width = "15%";
moonbox.style.height = "80%";
moonbox.style.right = "150px";
moonbox.style.top = "0";

moonShape.classList.add("position-absolute", "bottom-0");

function addResponsiveClasses() {
  if (window.innerWidth >= 1200) {
    container.classList.add("d-lg-block");
    moonbox.style.right = "150px";
    moonbox.style.width = "15%";
    sunShape.style.width = "75px";
    sunShape.style.height = "75px";
    moonShape.style.width = "75px";
    moonShape.style.height = "75px";
  } else if (window.innerWidth >= 992) {
    container.classList.add("d-md-block");
    moonbox.style.right = "150px";
    moonbox.style.width = "15%";
    sunShape.style.width = "65px";
    sunShape.style.height = "65px";
    moonShape.style.width = "65px";
    moonShape.style.height = "65px";
  } else {
    container.classList.add("d-sm-block");
    moonbox.style.right = "50px";
    moonbox.style.width = "15%";
    sunShape.style.width = "60px";
    sunShape.style.height = "60px";
    moonShape.style.width = "60px";
    moonShape.style.height = "60px";
  }
}

//ALL SUN COLOR CHANGE FUNCTIONS
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

function moveSun() {
  const radius = container.clientWidth / 2;
  let angle = 0;
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight;

  addResponsiveClasses();

  function animate() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY - radius * Math.sin(angle);

    sunShape.style.transform = `translate(${x}px, ${y}px`;

    angle += 0.005;

    if (angle <= Math.PI) {
      requestAnimationFrame(animate);
    } else {
      sunShape.style.display = "none";
    }
  }

  animate();
}

moveSun();

function moveMoon() {
  let position = moonbox.clientHeight;
  const endPosition = 0;
  const speed = 1;

  function animateMoon() {
    moonShape.style.bottom = position + "px";
    position -= speed;

    if (position >= endPosition) {
      requestAnimationFrame(animateMoon);
    }
  }

  animateMoon();
}

moonButton.addEventListener("click", moveMoon);

sunButton.addEventListener("click", sunStep1);

window.addEventListener("resize", addResponsiveClasses);
