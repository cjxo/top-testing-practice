function reverseString(str) {
    const asArray = str.split("");
    let reversedArray = new Array(asArray.length);

    for (let index = 0; index < asArray.length; ++index) {
        reversedArray[index] = asArray[asArray.length - index - 1];
    }

    return reversedArray.join("");
}

export { reverseString };
