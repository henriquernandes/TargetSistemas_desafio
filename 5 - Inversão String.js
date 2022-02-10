let string = "Oi, eu sou o Goku";

function inverter(){
    let invertido = "";
    for(let i = string.length - 1; i >= 0; i--){
        invertido += string[i];
    }
    console.log(invertido);
}

inverter(string);