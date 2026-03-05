    let rekeningNummer = 1;

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
        <input type="text" id="rekening_${rekeningNummer}" name="rekening_${rekeningNummer}">

        <label for="saldo_rekening_${rekeningNummer}">Saldo</label>
        <input type="number" id="saldo_rekening_${rekeningNummer}" name="saldo_rekening_${rekeningNummer}">
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