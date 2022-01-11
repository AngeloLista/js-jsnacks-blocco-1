// 3.Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


let sum = 0;

for (i = 0; i < 5; i++) {
    const number = parseInt(prompt('Inserisci un numero', '5'));
    if (!isNaN(number)) {
        sum += number;
    }
}



console.log(sum)