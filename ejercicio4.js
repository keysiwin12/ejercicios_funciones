function exponente(num1,num2) {
    var num = num1;
    for(i = 1 ; i < num2 ; i++) {
         num1 *=num; 
    }
    return num1;
}

console.log(exponente(5,3));