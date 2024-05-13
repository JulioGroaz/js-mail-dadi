const numeriPari = [];

for (i=1 ; i<6; i++){
    const numeroUtente = parseInt(prompt("Inserisci un numero"),10);
    if(numeroUtente %2 === 0 ){
        numeriPari.push(numeroUtente);
    }
}
console.log(numeriPari);