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
        displayFullAlphabet(key);
    }

    function decrypt() {
        const ciphertext = document.getElementById('encrypted').textContent.toUpperCase();
        const key = parseInt(document.getElementById('key').value);
        let decryptedText = '';

        for (let i = 0; i < ciphertext.length; i++) {
            if (ciphertext[i] === ' ') {
                decryptedText += ' ';
            } else {
                const charCode = ciphertext.charCodeAt(i);
                const decryptedCharCode = (charCode - 65 - key + 26) % 26 + 65;
                decryptedText += String.fromCharCode(decryptedCharCode);
            }
        }

        document.getElementById('decrypted').textContent = decryptedText;
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
