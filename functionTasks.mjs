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

const squaredNumber = makePowerFunction(2);

export default squaredNumber