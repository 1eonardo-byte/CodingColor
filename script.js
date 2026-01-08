console.log("Inizio esecuzione");


let colori = [0, 0, 0];

function elabora() {

    // Se l’utente non ha scritto nulla, non facciamo niente
    let valoreInput = document.getElementById("inNumber").value;
    if (valoreInput === "") {
        return;
    }

    // Puliamo messaggi precedenti
    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").innerHTML = "<h3>Output</h3>";
    document.getElementById("outText").innerHTML = "<h3>Output</h3>";

  
    if (isNaN(valoreInput)) { //isNaN serve per controllare se un valore non è un numero.

        // Stampiamo il testo così com’è
        document.getElementById("outText").innerHTML +=
            "Testo inserito: <strong>" + valoreInput + "</strong>";

    } else {

        // Convertiamo il valore in numero
        let numero = Number(valoreInput);

        // Controllo che il numero sia valido
        if (numero >= 0 && numero <= 255) {

            // Sostituisce il primo 0 disponibile
            let index = colori.indexOf(0);
            if (index !== -1) {
                colori[index] = numero;
            }

            // Mostriamo i numeri inseriti
            document.getElementById("outText").innerHTML +=
                "Numeri inseriti: " + colori.join(", ");

            // Applichiamo il colore solo se tutti e 3 i numeri sono presenti
            if (!colori.includes(0)) {

                let rgb = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;

                document.getElementById("outText").style.color = rgb;
                document.getElementById("colorBox").style.backgroundColor = rgb;

                document.getElementById("outText").innerHTML +=
                    "<br>Colore RGB applicato: " + rgb;

                // Caso speciale: rosso puro
                if (colori[0] === 255 && colori[1] === 0 && colori[2] === 0) {
                    document.getElementById("outText").innerHTML +=
                        "<br><strong>Hai creato il colore ROSSO!</strong>";
                }
            }

        } else {
            document.getElementById("error").innerHTML =
                "Il numero deve essere compreso tra 0 e 255";
        }
    }

    // Svuotiamo l’input dopo ogni elaborazione
    document.getElementById("inNumber").value = "";
}

function reset() {

    // Svuota input
    document.getElementById("inNumber").value = "";

    // Ripristina testi iniziali
    document.getElementById("outText").innerHTML = "<h3>Output</h3>";
    document.getElementById("error").innerHTML = "Errore";

    // Ripristina colori
    document.getElementById("outText").style.color = "black";
    document.getElementById("colorBox").style.backgroundColor = "transparent";

    // Azzera davvero i numeri
    colori = [0, 0, 0];
}
