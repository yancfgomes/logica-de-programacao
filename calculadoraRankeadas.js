// Função para calcular o saldo de vitórias e determinar o nível
function calcularSaldoERank(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível do herói
    let nivel = "";

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retornando o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
let vitorias = 85;
let derrotas = 25;

let resultado = calcularSaldoERank(vitorias, derrotas);

// Exibir a mensagem com o saldo de vitórias e o nível do herói
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
