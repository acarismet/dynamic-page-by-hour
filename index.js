// Get a reference to the container element
const container = document.getElementById('container');
container.classList.add('position-relative', 'border', 'border-1', 'border-primary');

// Set the maximum width and height for the container
container.style.width = '60rem';
container.style.height = '30rem';

// Create the sun image element
const sun = document.createElement('img');
sun.src = "./assets/sun.png";
sun.alt = "A beautiful image";
sun.width = 75; // Set the image width
sun.height = 75; // Set the image height

// Add the sun image to the container
container.appendChild(sun);

// Function to move the sun along a half-circle path
function moveSun() {
    const radius = container.clientWidth / 2; // Half of the container width
    let angle = 0;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight;
    let isInsideContainer = true; // Track whether the sun is inside the container

    // Use requestAnimationFrame for smoother animation
    function animate() {
        // Calculate the new position
        const x = centerX + radius * Math.cos(angle);
        const y = centerY - radius * Math.sin(angle);

        // Set the sun's position
        sun.style.transform = `translate(${x}px, ${y}px)`;

        angle += 0.005; // Adjust this value to control the speed of movement (smaller values make it slower)

        // Check if the sun goes out of the container
        if (x <= 0) {
            if (isInsideContainer) {
                isInsideContainer = false;
                sun.style.visibility = 'hidden'; // Hide the sun
            }
        } else {
            if (!isInsideContainer) {
                isInsideContainer = true;
                sun.style.visibility = 'visible'; // Show the sun
            }
        }

        // Stop the animation when the sun reaches the left-bottom corner
        if (x <= 0) {
            return;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Call the moveSun function to start the animation
moveSun();
