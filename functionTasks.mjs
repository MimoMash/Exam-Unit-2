function makePowerFunction(exponent) {
    return (base) => base ** exponent
}

const squaredNumber = makePowerFunction(2);

export default squaredNumber