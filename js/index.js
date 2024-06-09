//document.getElementById("texto").innerHTML="Meu Primeiro texto <b>JS</b>!";
//alert(10+5);
//console.log("Oi isso é um console log.")

/* Vamos entender variaveis.
Variaveis são "recipientes" onde podemos armazenar informações que podem variar, ou veja podem ter qualquer tipo de valor.

no Javascript temos 3 palavras-chaves para declarar variaveis;

--> var
--> let
--> const
*/

//var a = 2;
//var a = 3;
//var c = a + b;
//alert(c); 

//DECLARAÇÃO DE VARIAVES

var  nome, sobrenome, nomeCompleto, idade, soma;

// ATRIBUIÇÃO DOS VALORES

nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

soma = idade + 10;
pessoa = nome + " " + soma;

document.getElementById(texto).innerHTML = pessoa;

let pessoa = "Dimitri";
let pessoa = "João";

alert(pessoa)