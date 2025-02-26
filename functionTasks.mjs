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
    return inches * 25.4;
}

const squaredNumber = makePowerFunction(2);

export { squaredNumber, inchesToMillimeter }