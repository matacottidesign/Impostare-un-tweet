//Conteggio caratteri rimanenti
function charCount(e, maxChar){
    let testoScritto = document.getElementById('testo').value;
    let contatore = (maxChar - (testoScritto.length));
    let display = document.getElementById('charDisplay');
    display.innerHTML = 'Disponibili altri ' + contatore + ' caratteri';
}
let el = document.getElementById('testo');
el.addEventListener('keyup', function(e){
    charCount(e, 300);
}, false);
//300 è il numero massimo di caratteri a disposizione (variabile "maxChar")

//Impostare progressione o regressione della barra colorata 
function progressBar(e, maxChar){
    let textEntered = document.getElementById('testo').value;
    let counter = ((maxChar - (textEntered.length)) / 3 );
    console.log("Funzione 2: " + counter);
    console.log(typeof counter);

    let result = 100 - counter;
    let stringResult = result.toString();
    let perc = "%";
    let def = stringResult + perc;
    console.log(def);
    console.log(typeof def);

    document.getElementById('bar').style.width = def;
}
let textarea = document.getElementById('testo');
textarea.addEventListener('keyup', function(e){
    progressBar(e, 300);
}, false);
//300 è il numero massimo di caratteri a disposizione (variabile "maxChar")