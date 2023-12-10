function encrypt() {
    const plaintext = document.getElementById('plaintext').value.toUpperCase();
    const key = parseInt(document.getElementById('key').value);
    let encryptedText = '';

    for (let i = 0; i < plaintext.length; i++) {
        if (plaintext[i] === ' ') {
            encryptedText += ' ';
        } else {
            const charCode = plaintext.charCodeAt(i);
            const encryptedCharCode = (charCode - 65 + key) % 26 + 65;
            encryptedText += String.fromCharCode(encryptedCharCode);
        }
    }

    document.getElementById('encrypted').textContent = encryptedText;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('encrypted-result').style.display = 'block';
    document.getElementById('decrypted-result').style.display = 'none';
    displayFullAlphabet(key);
}

function decrypt() {
    const encryptedText = document.getElementById('plaintext').value.toUpperCase();
    const key = parseInt(document.getElementById('key').value);
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        if (encryptedText[i] === ' ') {
            decryptedText += ' ';
        } else {
            const charCode = encryptedText.charCodeAt(i);
            const decryptedCharCode = (charCode - 65 - key + 26 * 2) % 26 + 65;
            decryptedText += String.fromCharCode(decryptedCharCode);
        }
    }

    document.getElementById('decrypted').textContent = decryptedText;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('encrypted-result').style.display = 'none';
    document.getElementById('decrypted-result').style.display = 'block';
    displayFullAlphabet(key);
}




function generateRandomKey() {
    const randomKey = Math.floor(Math.random() * 26) + 1;
    document.getElementById('key').value = randomKey;
    encrypt(); // Automatically encrypt after generating a random key
}

function displayFullAlphabet(key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shiftedAlphabet = '';

    for (let i = 0; i < alphabet.length; i++) {
        const charCode = alphabet.charCodeAt(i);
        const shiftedCharCode = (charCode - 65 + key + 26) % 26 + 65;
        shiftedAlphabet += String.fromCharCode(shiftedCharCode);
    }

    document.getElementById('fullAlphabet').textContent = alphabet + '\n' + shiftedAlphabet;
}
