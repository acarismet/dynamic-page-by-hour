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