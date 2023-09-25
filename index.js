// Create a new <h1> element
const newHeading = document.createElement('h1');

// Set the text content of the <h1> element
newHeading.textContent = 'Hello World';

// Add Bootstrap classes to the <h1> element
newHeading.classList.add('text-center', 'text-danger');

// Get a reference to the container element
const container = document.getElementById('container');

// Append the <h1> element to the container
container.appendChild(newHeading);
