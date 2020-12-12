/*
//tabuada do 3 com for
for (var i = 1; i<=10; i++) {
    console.log(`  3 * ${i} = ${3*i}`);
}
*/
/*
var i = 1;
while (i <= 10) {
    console.log(`Olá, aluno${i}!`);
i++;
}

//tabuada com while
var numero = 100;
while(numero >= 5) {
    console.log(`10 x ${numero} = ${10 * numero}`);
numero = numero - 5;
}
*/


//programa que imprima na tela todos os números pares entre 0 e 100
for (var i=0; i<=100; i=i+2) {
    console.log(i);
}

//impares entre 100 e 200
for (var i=101; i<=200; i= i +2) {
    console.log(i);
}

//algoritmo para calcular o fatorial de um número
var numero = 5;
var fatorial = 5;
for (var i =4; i>=1; i--) {
    fatorial  = fatorial * i;
}
document.write("O fatorial de " + numero + " é " + fatorial + ".");