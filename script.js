console.log("Inizio esecuzione");
let colori = [];

function elabora() {
    let numero = Number(document.getElementById("inNumber").value);

    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    if (numero >= 0 && numero <= 255) {

        colori.push(numero);

        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;

        document.getElementById("outText").innerHTML +=
            "<br>I colori sono: " + colori;

        if (colori.length === 3) {
            // Imposta il colore RGB nel testo
            let rgb = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
            document.getElementById("outText").style.color = rgb;

            // Mostra il colore nel quadrato
            document.getElementById("colorBox").style.backgroundColor = rgb;

            // Controlla se è rosso
            if (colori[0] === 255 && colori[1] === 0 && colori[2] === 0) {
                document.getElementById("outText").innerHTML;
            }
        }

    } else {
        document.getElementById("error").innerHTML =
            "Il numero non è corretto";
    }
}

function reset() {
    // Svuota il campo numero
    document.getElementById("inNumber").value = "";

    // Svuota l'output e messaggio di errore, riportando poi il testo in nero
    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").style.color = "black";
    // Svuota l'array dei numeri
    colori = [];
}

