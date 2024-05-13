const numeroCasualeUtente = Math.random() * 6;
const numeroCasualeComputer = Math.random() *6;

console.log ("Il tuo numero è:" + numeroCasualeUtente);
console.log ("Il mio numero è:" + numeroCasualeComputer);

if(numeroCasualeUtente>numeroCasualeComputer){
    console.log("Hai vinto!");
} else {
    console.log("Ho vinto io... Hai perso")
}


