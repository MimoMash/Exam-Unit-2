function makePowerFunction(exponent) {
    if (typeof exponent !== "number" || isNaN(exponent)) {
        return NaN;
    }
    return (base) => {
        if (typeof base !== "number" || isNaN(base)) {
            return NaN;
        }
        return base ** exponent;
    };
}

function inchesToMillimeter(inches) {
    if (typeof inches !== "number" || isNaN(inches)) {
        return NaN;
    } 

    if (inches < 0) {
        inches *= -1;
    }

    return inches * 25.4;
}

function root(number) {
    if (typeof number !== "number" || isNaN(number) || number < 0) {
        return NaN;
    }

    if (number === Infinity) {
        return Infinity;
    }
    let guess = number / 2;
    let precision = 0.00001; 
    
    while ((guess * guess - number > precision) || (number - guess * guess > precision)) {
        guess = (guess + number / guess) / 2;
    }

    let multiplier = 100000;
    let value = guess * multiplier + 0.5; 
    let roundedNumber = (value - (value % 1)) / multiplier; 

    return roundedNumber;
}

function areaOfCircle(radius) {
    if (typeof radius !== "number" || isNaN(radius) || radius < 0) {
        return NaN;
    }

    const PI = 3.14;
    const area = PI * radius * radius;

    return area;
}

const squaredNumber = makePowerFunction(2);
const cubedNumber = makePowerFunction(3);

export { squaredNumber, inchesToMillimeter, root, cubedNumber, areaOfCircle }