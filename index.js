const container = document.getElementById('container');
container.classList.add('position-relative', 'border', 'border-1', 'border-primary', 'm-16');


container.style.maxWidth = '50%';
container.style.height = '25rem';


const sun = document.createElement('img');
sun.src = "./assets/sun.png";
sun.alt = "A beautiful image";
sun.width = 75; 
sun.height = 75; 
sun.classList.add('border', 'border-1', 'border-secondary');


function addResponsiveClasses() {
    if (window.innerWidth >= 1200) {

        container.classList.add('d-lg-block');
    } else if (window.innerWidth >= 992) {
    
        container.classList.add('d-md-block');
    } else {
 
        container.classList.add('d-sm-block');
    }
}

container.appendChild(sun);


function moveSun() {
    const radius = container.clientWidth / 2; 
    let angle = 0;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight;

    container.appendChild(sun);

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

window.addEventListener('resize', addResponsiveClasses);
