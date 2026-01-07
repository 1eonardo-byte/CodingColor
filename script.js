console.log("Inizio esecuzione");

let colori = [0, 0, 0];

function elabora() {
    let numero = Number(document.getElementById("inNumber").value);

    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").innerHTML = "<h3>Output</h3>";

    if (numero >= 0 && numero <= 255) {

        // Sostituisce il primo zero disponibile
        let index = colori.indexOf(0);
        if (index !== -1) {
            colori[index] = numero;
        }

        document.getElementById("outText").innerHTML +=
            "Numeri inseriti: " + colori.join(", ");

        // Applica colore solo se non ci sono più zeri
        if (!colori.includes(0)) {

            let rgb = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;

            document.getElementById("outText").style.color = rgb;
            document.getElementById("colorBox").style.backgroundColor = rgb;

            document.getElementById("outText").innerHTML +=
                "<br>Colore RGB applicato: " + rgb;

            // Controllo rosso puro
            if (colori[0] === 255 && colori[1] === 0 && colori[2] === 0) {
                document.getElementById("outText").innerHTML +=
                    "<br><strong>Hai creato il colore ROSSO!</strong>";
            }
        }

    } else {
        document.getElementById("error").innerHTML =
            "Il numero deve essere compreso tra 0 e 255";
    }

    document.getElementById("inNumber").value = "";
}

function reset() {
    document.getElementById("inNumber").value = "";

    document.getElementById("outText").innerHTML = "<h3>Output</h3>";
    document.getElementById("error").innerHTML = "Errore";

    document.getElementById("outText").style.color = "black";
    document.getElementById("colorBox").style.backgroundColor = "transparent";

    colori = [0, 0, 0];
}
