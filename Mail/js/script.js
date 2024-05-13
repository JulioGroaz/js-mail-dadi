const mailSalvate = ["gino@mail.com","figaro@mail.com", "marta@mail.com", "franz@mail.com", "adelma@mail.com"];

const mailUtente = prompt("Inserisci la tua mail");

if (mailSalvate.includes(mailUtente)){
    console.log("Benvenut@!");
} else{
    console.log("Utente non trovato, prova con un'altra mail o riprova");
}