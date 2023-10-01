const container = document.getElementById('container');
const moonbox = document.getElementById('moonbox');
const moonButton = document.getElementById('runMoonButton');


container.classList.add('position-relative', 'border', 'border-1', 'border-danger', 'm-16');
container.style.maxWidth = '50%';
container.style.height = '25rem';


const sun = document.createElement('img');

sun.src = "./assets/sun.png";
sun.alt = "First sun";
sun.width = 75; 
sun.height = 75; 
sun.classList.add('border', 'border-1', 'border-black');
container.appendChild(sun);

moonbox.classList.add('bg-dark','d-flex','justify-content-center');
moonbox.style.width = '15%';
moonbox.style.height = '80%';
moonbox.style.right = '150px';
moonbox.style.top = '0';

const moon = document.createElement('img');
moon.src = "./assets/moon.png";
moon.alt = "Moon";
moon.width = 75;
moon.height = 75;
moon.style.position = 'absolute';
moon.style.bottom = '0';
moonbox.appendChild(moon);


function addResponsiveClasses() {
    if (window.innerWidth >= 1200) {
        container.classList.add('d-lg-block');
        moonbox.style.right = '150px';
        moonbox.style.width = '15%';
        sun.style.width = '75px';
        sun.style.height = '75px';
        moon.style.width = '75px';
        moon.style.height = '75px';
    } else if (window.innerWidth >= 992) {
        container.classList.add('d-md-block');
        moonbox.style.right = '150px';
        moonbox.style.width = '15%';
        sun.style.width = '65px';
        sun.style.height = '65px';
        moon.style.width = '65px';
        moon.style.height = '65px';
    } else {
        container.classList.add('d-sm-block');
        moonbox.style.right = '50px';
        moonbox.style.width = '15%';
        sun.style.width = '60px';
        sun.style.height = '60px';
        moon.style.width = '60px';
        moon.style.height = '60px';
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
            sun.style.display= 'none'
        }
    }

    animate();
}

moveSun();

function moveMoon() {
    let position = 0;
    const animationInterval = setInterval(() => {
        if (position <= (moonbox.clientHeight - moon.clientHeight)) {
            moon.style.bottom = position + 'px';
            position++;
        } else {
            clearInterval(animationInterval);
        }
    }, 25);
}

removeEventListener('click', moveMoon);
moonButton.addEventListener('click', moveMoon);

window.addEventListener('resize', addResponsiveClasses);