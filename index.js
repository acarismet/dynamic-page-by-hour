const container = document.getElementById("container");
const moonbox = document.getElementById("moonbox");
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
const moonBody = document.getElementById("moonCircle");
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

//***** Current Information From Local Independent from API - Start
const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth() + 1;
// const currentDay = currentDate.getDate();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
// const currentTimeMillis = currentDate.getTime();

//***** Current Information From Local Independent from API - End

let currentTimeArray = [currentHour, currentMinute, currentSecond];

//**** Global Hour Checking */
let isSunrise = false;
let isSunSet = false;
// Specific Hours will be decleared here ...

function checkSun(
  sunriseHour,
  sunriseMinutes,
  sunriseSecond,
  sunsetHour,
  sunsetMinutes,
  sunsetSecond,
  dayLengthMillis
) {
  let sunriseArray = [sunriseHour, sunriseMinutes, sunriseSecond];
  let sunsetArray = [sunsetHour, sunsetMinutes, sunsetSecond];
  const dayLengthHours = dayLengthMillis / (1000 * 60 * 60);
  console.log(dayLengthHours);
  const dayLengthMinutes = Math.floor(dayLengthMillis / (1000 * 60));
  console.log(dayLengthMinutes);
  if (
    currentTimeArray[0] == sunriseArray[0] &&
    currentTimeArray[1] == sunriseArray[1] &&
    currentTimeArray[2] == sunriseArray[2]
  ) {
    isSunrise = true;
  }
}
//
//
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

    angle += 0.0174533;

    if (angle <= Math.PI) {
      setTimeout(function () {
        requestAnimationFrame(animate);
      }, 500);
    } else {
      sunShape.style.display = "none";
    }
  }

  animate();
}

const cityName = "ANKARA";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let sunriseTimestamp = data.sys.sunrise;
    let sunsetTimestamp = data.sys.sunset;
    let sunriseTime = new Date(sunriseTimestamp * 1000);
    let sunsetTime = new Date(sunsetTimestamp * 1000);
    /* let currentTimestamp = data.dt;
    let currentLocalTime = new Date(currentTimestamp * 1000);

    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    const userLocale = navigator.language || "en-US";

    let upSunriseTime = sunriseTime.toLocaleTimeString(userLocale, options);
    let upSunsetTime = sunsetTime.toLocaleTimeString(userLocale, options);
    currentLocalTime = currentLocalTime.toLocaleTimeString(userLocale, options); */
    const dayLengthMillis = sunsetTime - sunriseTime;
    let sunriseHour = sunriseTime.getHours();
    let sunriseMinutes = sunriseTime.getMinutes();
    let sunriseSecond = sunriseTime.getSeconds();

    let sunsetHour = sunsetTime.getHours();
    let sunsetMinutes = sunsetTime.getMinutes();
    let sunsetSecond = sunsetTime.getSeconds();

    checkSun(
      sunriseHour,
      sunriseMinutes,
      sunriseSecond,
      sunsetHour,
      sunsetMinutes,
      sunsetSecond,
      dayLengthMillis
    );
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

//
//

moonbox.classList.add("bg-primary", "d-flex", "justify-content-center");
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

function animateMoon() {
  const totalDistance = 244;
  let currentPosition = 0;
  let colorChanged = false;
  const initialColor = "rgb(245, 199, 26)"; // Initial color
  const targetColor = "rgb(240, 240, 240)"; // Target color
  const colorRangeStart = 75;
  const colorRangeEnd = 85;

  function updateMoonPosition() {
    if (currentPosition <= totalDistance) {
      currentPosition++;
      moonShape.style.transform = `translate(0px, -${currentPosition}px)`;
      requestAnimationFrame(updateMoonPosition);

      // Check if currentPosition is within the desired range
      if (
        currentPosition >= colorRangeStart &&
        currentPosition <= colorRangeEnd &&
        !colorChanged
      ) {
        moonBody.setAttribute("fill", targetColor); // Set to the target color directly
        colorChanged = true;
      }
    }
  }

  updateMoonPosition();
}
moveSun();
//animateMoon();
sunButton.addEventListener("click", sunStep4);

window.addEventListener("resize", addResponsiveClasses);
