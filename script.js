
console.log("Inizio esecuzione");
let d = new Date();

console.log(d);
document.getElementById("saluto").innerHTML=d.getDay();

function elabora() {
    let numero = document.getElementById("inNumber").value;
    alert(numero);

    if (numero >=0 && numero <= 255){

        document.getElementById("outText").innerHTML = "hai inserito il numero" + numero;
    } else{
        //messaggio errore div error
        document.getElementById("error").innerHTML = "il numero non è corretto"
        //comportamento
    }


}

function reset(){
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML= "Output"; //faccio il reset

}