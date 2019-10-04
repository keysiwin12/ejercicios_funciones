var num;

function par(num) {
    return num%2 == 0;
}

do {
    num = prompt("Ingrese numero para saber si es par o  impar ")
    if(num <= 0 || isNaN(num))
        alert("Ingrese numero mayor a 0");  
}while(num <= 0 || isNaN(num));

par(5);

if(par(num)) {
    document.write("Par")
}
else {
    document.write("Impar");
}













