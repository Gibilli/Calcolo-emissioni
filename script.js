document.getElementById("calcola").addEventListener("click", function() {
    const energia = parseFloat(document.getElementById("energia").value);
    const trasporti = parseFloat(document.getElementById("trasporti").value);

    function calcoloEnergia(energia){
        let emissioniEnergia = energia * 0.233;
        return emissioniEnergia;
    }

    console.log(calcoloEnergia(energia));

    const emissioniEnergia = calcoloEnergia(energia);
    if (!isNaN(energia)) {
        document.getElementById("risultato_energia").innerText = 
            `Emissioni energia: ${emissioniEnergia.toFixed(2)} kg di CO2`;
    } else {
        document.getElementById("risultato_energia").innerText = 
            `Per favore inserisci un valore valido per l'energia.`;
    }

    function calcoloTrasporti(trasporti){
        const emissioniTrasporti = trasporti * 0.21;
        return emissioniTrasporti;
    }

    console.log(calcoloTrasporti(trasporti));

    const emissioniTrasporti = calcoloTrasporti(trasporti);
    if (!isNaN(trasporti)) {
        document.getElementById("risultato_trasporti").innerText = 
            `Emissioni trasporti: ${emissioniTrasporti.toFixed(2)} kg di CO2`;
    } else {
        document.getElementById("risultato_trasporti").innerText = 
            `Per favore inserisci un valore valido per i trasporti.`;
    }

    let emissioniTotali = emissioniEnergia + emissioniTrasporti;
    document.getElementById("risultato_totale").innerText = 
            `Emissioni totali: ${emissioniTotali.toFixed(2)} kg di CO2`;
    console.log(emissioniTotali)
});