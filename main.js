const nomeUtente = prompt("Ciao, qual è il tuo nome?");
const cognomeUtente = prompt(`Ciao ${nomeUtente}, qual è il tuo cognome?`);
const colorePreferito = prompt(`Benvenuto ${nomeUtente} ${cognomeUtente}, mi puoi dire il tuo colore preferito?`);

const spanUserPassord = document.getElementById('span-user-password');

const userPassword = `${nomeUtente.toLowerCase()}${cognomeUtente.toLowerCase()}${colorePreferito.toLowerCase()}22`;

spanUserPassord.innerHTML = userPassword;

const spanUserNameComplete = document.getElementById('span-user-name-complete');

spanUserNameComplete.innerHTML = `${nomeUtente} ${cognomeUtente}`;