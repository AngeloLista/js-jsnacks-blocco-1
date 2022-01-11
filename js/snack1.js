// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


let firstNumber = parseInt(prompt('Inserisci il primo numero'));
let secondNumber = parseInt(prompt('Inserisci il secondo numero'));

console.log(firstNumber, secondNumber);


if (firstNumber > secondNumber) {
    console.log(`Il numero maggiore è il primo inserito: ${firstNumber}`)
} else if (firstNumber === secondNumber) {
    console.log('I numeri sono uguali')
} else {
    console.log(`Il numero maggiore è il secondo inserito: ${secondNumber}`)
}

