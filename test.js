function degreesToRadians(degrees) {
    if (degrees >= 0 && degrees <= 360) {
        const radians = (degrees * Math.PI) / 180;
        return radians;
    } else {
        console.error('Input angle must be between 0 and 360 degrees.');
        return null;
    }
}

// Example usage:
const angleInDegrees = 180; // Replace with your desired angle
const angleInRadians = degreesToRadians(angleInDegrees);
console.log(`Angle in radians: ${angleInRadians}`);




function moveMoon() {
    let position = 0;
    const animationInterval = setInterval(() => {
        if (position <= (moonbox.clientHeight - moonImage.clientHeight)) {
            moonImage.style.bottom = position + 'px';
            position++;
        } else {
            clearInterval(animationInterval);
        }
    }, 10);
}

// Call the moveMoon function to start the animation
moveMoon();
