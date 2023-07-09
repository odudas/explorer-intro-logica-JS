/*
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 items, imprima-os, separando-os por vírgula.
*/

let items = [];

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1));

  items[item] = itemName;
}

alert(items);

/*
  Estrutura de dados

  - Organização e gerenciamento dos dados
  - Melhor eficiência do código

  [] Estruturas de repetição
     - laço de repetição
     - for

  [] Vetores (Arrays)
  [] Tipo de dado estruturado
  [] incremental (++): o valor + 1
  [] Tipo de dado: undefined
*/
