// Cole em script.js

/*
  Encontre a solução ao problema:
  
  Capturar 2 números e fazer operações matemáticas:
  
  a) soma
  b) subtração
  c) multiplicação
  d) divisão
  e) resto da divisão

  E para cada operação, mostrar um alerta com o resultado.
*/

let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + mult);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

/* 
  Como resolver problemas na linguagem de programação?
  Como melhorar minha lógica de programação?

  1. Identifique o que já sabe e faça!
  2. Quebre o grande problema em problemas menores!
  3. Entender o problema
  4. Fazer as perguntas corretas

  O que estou aprendendo de ferramentas do JS:

  [] operadores matemáticos
*/
