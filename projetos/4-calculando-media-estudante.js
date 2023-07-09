// Cole em script.js

/*
  Encontre a solução ao problema:

  Solicitar o nome do aluno, as 3 notas do bimestre e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let student = prompt("Qual o nome do(a) aluno(a)?");
let n1 = prompt("Qual a nota da primeira prova?");
let n2 = prompt("Qual a nota da segunda prova?");
let n3 = prompt("Qual a nota da terceira prova?");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2);

if (result) {
  alert("Parabens, " + student + "! Sua média foi de: " + average);
} else {
  alert(
    student +
      " estude para sua prova de recuperação! Sua média foi de: " +
      average
  );
}

/* 
  Como resolver problemas na linguagem de programação?
  Como melhorar minha lógica de programação?
  
  O que estou aprendendo de ferramentas do JS:

  - Caminhos lógicos baseado em algum dado ou informação

  [] tipo de dado: 
     Boolean = boleano
  [] if/else
  [] operadores comparativos
     - > (maior que)
     - < (menor que)
     - >= (maior ou igual a)
     - < (menor ou igual a)
     - == (igual a)
     - != (diferente de)

*/
