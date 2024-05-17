function findMinMax(array) {
    let result = {
        min: NaN,
        max: NaN,
    };

    let arrayIndex = 1;
    if (array.length & 1) {
        result.min = array[0];
        result.max = array[0];
    } else {
        result.min = array[1];
        result.max = array[0];

        if (result.min > result.max) {
            const temp = result.min;
            result.min = result.max;
            result.max = temp;
        }

        arrayIndex = 2;
    }

    for (; arrayIndex < array.length; arrayIndex += 2) {
        const a = array[arrayIndex + 0];
        const b = array[arrayIndex + 1];

        if (a > b) {
            if (result.max < a) {
                result.max = a;
            }

            if (result.min > b) {
                result.min = b;
            }
        } else {
            if (result.max < b) {
                result.max = b;
            }

            if (result.min > a) {
                result.min = a;
            }
        }
    }

    return (result);
}

function analyzeArray(array) {
    const minmax = findMinMax(array);
    let result = {
        average: array.reduce((accum, value) => accum + value, 0) / array.length,
        min: minmax.min,
        max: minmax.max,
        length: array.length
    };

    return (result);
}

export { analyzeArray, findMinMax };
