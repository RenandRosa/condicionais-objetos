//A
//1.
//a) O código acima apresenta duas variaveis, onde apenas uma delas sera escrita na tela, de acordo com a const escolhida
//b)Se a Alice tiver a idade miníma para dirigir, e se ela não tiver a idade mínima para dirigir

//2.
//a) Retornar se Leão é carnívoro ou não
//b) Leão é um animal carnívoro

//3.
//a) Mostram duas condições, onde cada uma retorna uma resposta diferente 
//b) o número é maior do que 5. 
// o número é impar

//B.
//1. 
/*
const idade = prompt('Qual a sua idade? ');
    
    if (idade >= 18){
    console.log(idade + 'é maior de idade')
        }
    else{
    console.log(idade + 'não é maior de idade')
    }
*/

//2.
/*
const turno = prompt('Qual turno você estuda? ')
    if (turno = M){
        console.log(turno + 'Bom dia!')
    }else if (turno = T){
        console.log(turno + 'Boa tarde!')
    }else (turno = N){
        console.log(turno + 'Boa noite!')
    }
    */

//3.
/*
let turno = prompt("Em qual turno você estuda? ")
switch (turno) {
    case 'M':
        console.log('Bom dia!')
        break;
    case 'T' :
        console.log('Boa tarde!')
        break;
    case 'N' :
        console.log('Boa noite!')
        break;
    default:
        break;
}
*/

//4.
/*
const aluno = {
    nome: 'Renan',
    idade: '15',
    tipoDeCurso: true,
    temBolsa: true
};
if (aluno - 30, tipoDeCurso = true, temBolsa = false){
    console.log(aluno + 'Você pode se candidatar a uma bolsa de estudos!')
} else {
    console.log(aluno + 'Desculpe, você não atende aos requisitos para a bolsa')
}
*/

//5.
/*
const produto = {
    nome: 'Motorola moto g32',
    preço: '1000',
    desconto: '10',
    freteGratis: true
}
  
  function calcularPrecoFinal(produto) {
    let precoFinal = produto.preco;
    let mensagem = "Preço final: " + precoFinal
  
    if (produto.desconto > 0) {
      const descontoValor = (produto.preco * produto.desconto) / 1000;
      precoFinal -= descontoValor;
      mensagem += ` (Desconto ${produto.desconto}%)`;
    }
  
    if (produto.freteGratis) {
      mensagem += " (Frete Grátis)";
    }
  
    return mensagem;
  }
  
  console.log(calcularPrecoFinal(produto))
  */

//Exercício Complementar
//1.
/*
function soma (a, b){
    return a + b;
 }

let a = Number(prompt("Insira o primeiro número: "));
let b = Number(prompt("Insira o segundo número: "));
 
console.log("Soma:", a + b)
*/
//2.
/*
function calcularMedia(notas) {
    if (notas.length !== 3) {
      return "O array deve conter exatamente 3 notas.";
    }
  
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / 3;
    return media;
  }
  
  // Exemplo de uso:
  const notasAluno = [7.5, 8.0, 9.2];
  const mediaAluno = calcularMedia(notasAluno);
  console.log(`A média do aluno é: ${mediaAluno}`);
*/

//3.
/*
function verificarPalindromo(){
let palavra = prompt('Digite uma palavra ');
let palindromo = [palavra];
palavra = palavra.split("");
palavra = palavra.slice().reverse();
palavra = palavra.join("");
console.log(palavra);
}
const resultado = verificarPalindromo(palavra);

console.log(resultado);
*/
