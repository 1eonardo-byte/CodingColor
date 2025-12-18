console.log("Inizio esecuzione");
let d = new Date();


let colori = [];

document.getElementById("saluto").innerHTML = "Oggi è il " + d.getDay();


function elabora() {
    let numero = document.getElementById("inNumber").value;
    
    // serve per pulire sempre prima i messaggi, cancella quello che c'era prima
    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    //se il n. è compreso tra 0 e 255
    if (numero >= 0 && numero <= 255) {
        // inserisce il numero dentro un array di colori 
        colori.push(numero);

        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;
        //visualizza la scritta + il numero scelto

        //visualizza il colore scelto in base al numeno
        document.getElementById("outText").innerHTML += "<br> i colori sono: " + colori;
        console.log(colori);

        if (colori.lemght == 3){
            document.getElementById("outText").style.color = `rgd(${color[0]},${color[1]}, ${color[2]})`
            
        }

    } else {
        document.getElementById("error").innerHTML =
            "Il numero non è corretto";
    }
}

function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    colori = [];
} 