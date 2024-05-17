function cipherAlphabetFromPlainAlphabet(lowercasedAlpha, key) {
    const cipherAlphabet = new Array(lowercasedAlpha.length);
    for (let index = 0; index < lowercasedAlpha.length; ++index) {
        cipherAlphabet[index] = lowercasedAlpha.at((index + key) % lowercasedAlpha.length).toUpperCase();
    }

    return(cipherAlphabet);
}

function caesarCipher(str, alphabet, key) {
    let encrypted = new Array(str.length);

    const lowercasedStr = str.toLowerCase();
    const lowercasedAlpha = alphabet.toLowerCase();
    const cipherAlphabet = cipherAlphabetFromPlainAlphabet(lowercasedAlpha, key);

    for (let index = 0; index < str.length; ++index) {
        const idxAtAlpha = lowercasedAlpha.indexOf(str.at(index));
        if (idxAtAlpha >= 0) {
            encrypted[index] = cipherAlphabet[idxAtAlpha];
        } else {
            encrypted[index] = str.at(index);
        }
    }

    return encrypted.join("");
}

function caesarCipherDecrypt(str, alphabet, key) {
    let decrypted = new Array(str.length);

    const lowercasedAlpha = alphabet.toLowerCase();
    const cipherAlphabet = cipherAlphabetFromPlainAlphabet(lowercasedAlpha, key);
    
    for (let index = 0; index < str.length; ++index) {
        const idxAtCipher = cipherAlphabet.findIndex((element) => element === str.at(index));
        if (idxAtCipher >= 0) {
            decrypted[index] = lowercasedAlpha.at(idxAtCipher);
        } else {
            decrypted[index] = str[index];
        }
    }

    return decrypted.join("");
}

const str = "julius caesar";
const encrypted = caesarCipher(str, "abcdefghijklmnopqrstuvwxyz", 3)
console.log(caesarCipherDecrypt(encrypted, "abcdefghijklmnopqrstuvwxyz", 3));

export { caesarCipher, caesarCipherDecrypt };
