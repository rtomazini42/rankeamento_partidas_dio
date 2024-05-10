function calcularElo(){
    const vitorias = document.getElementById("vitorias").value;
    const derrotas = document.getElementById("derrotas").value;
    


    document.getElementById("resultado").innerHTML = Calculo(vitorias,derrotas);
}


function Calculo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de vitórias derrotas de ${saldoVitorias}, e está no nível de ${nivel}`;
}


