document.body.classList.remove("nojs"); // verwijder nojs class als js werkt

let rekeningNummer = 1; // + - knop voor het toevoegen en verwijderen van rekeningen

const plusButton = document.querySelector(".plus_button");
const minButton = document.querySelector(".min_button");
const container = document.querySelector(".extra_rekeningen");


function addRekening() {
rekeningNummer++;

const radioNaam = `rekening_${rekeningNummer}_soort`;
const idGez = `rekening_${rekeningNummer}_gezamenlijk`;
const idPrive = `rekening_${rekeningNummer}_prive`;

const html = `
    <fieldset>
    <legend>Rekening ${rekeningNummer}</legend>

    <div class="button_wrapper">
        <label class="button" for="${idGez}">
        Gezamenlijk
        <input type="radio" id="${idGez}" name="${radioNaam}" value="gezamenlijk">
        </label>

        <label class="button" for="${idPrive}">
        Privé
        <input type="radio" id="${idPrive}" name="${radioNaam}" value="prive">
        </label>
    </div>

    <label for="rekening_${rekeningNummer}">Rekeningnummer (IBAN).</label>
    <input 
        type="text" 
        id="rekening_${rekeningNummer}" 
        name="rekening_${rekeningNummer}"
        pattern="NL[0-9]{2}[A-Z]{4}[0-9]{10}">

    <label for="saldo_rekening_${rekeningNummer}">Saldo</label>
    <input 
        type="number" 
        id="saldo_rekening_${rekeningNummer}" 
        name="saldo_rekening_${rekeningNummer}"
        min="0"
        step="1" >
    </fieldset>
`;

container.insertAdjacentHTML("beforeend", html);
}

function removeRekening() {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
        rekeningNummer--;
    }
}

plusButton.addEventListener("click", addRekening);
minButton.addEventListener("click", removeRekening);

const today = new Date().toISOString().split("T")[0]; //zet maxdate in html naar vandaag

document.querySelectorAll('input[type="date"]').forEach(input => {
    input.max = today;
});