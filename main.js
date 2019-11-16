var numero_giocatore1 = parseInt(prompt('Inserisci un numero da 1 a 6'));
var numero_computer = Math.floor(Math.random() * (7 - 1 ) + 1 );
console.log(numero_computer);

if ( isNaN(numero_giocatore1) || numero_giocatore1 < 1 || numero_giocatore1 > 6) {
  alert('Errore. Devi inserire un numero da 1 a 6. Ricarica la pagina per riprovare');
}
else {
  if (numero_giocatore1 > numero_computer) {
    alert('hai vinto');
  }

  else if (numero_giocatore1 < numero_computer) {
    alert('hai perso');
  }

  else {
    alert('pari');
  }
}
