const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function substr(str, start, end) {
    if (end === undefined) {
        end = str.length;
    }

    return str.split('').slice(start, end).join('');
}

function decode(expr) {
    // write your solution here 

    let decoded = '';
    for (let i = 0; i < expr.length; i += 10) {
        let encodedLetter = substr(expr, i, i + 10);

        if (encodedLetter === '**********') {
            decoded += ' ';
        } else {
            let firstTwo = substr(encodedLetter, 0, 2);

            while (firstTwo === '00') {
                encodedLetter = substr(encodedLetter, 2);
                firstTwo = substr(encodedLetter, 0, 2);
            }

            let morseLet = '';
            for (let j = 0; j < encodedLetter.length; j += 2) {
                morseLet += substr(encodedLetter, j, j + 2) === '10' ? '.' : '-';
            }

            decoded += MORSE_TABLE[morseLet];
        }
    }
    return decoded;
}

module.exports = {
    decode
}