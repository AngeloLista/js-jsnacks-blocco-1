// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


let firstWord = prompt('Inserisci la prima parola').trim();
let secondWord = prompt('Inserisci la seconda parola').trim();

let message = 'Le parole hanno uguale lunghezza';

if (firstWord.length > secondWord.length) {
    message = secondWord + ' ' + firstWord;
} else if (firstWord.length < secondWord.length) {
    message = firstWord + ' ' + secondWord;
}


console.log(message)


