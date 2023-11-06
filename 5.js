function gerarFaturaStr(fatura, pecas) {
    // Funções aninhadas

    // Função para calcular o total da fatura
    function calcularTotalFatura() {
        let totalFatura = 0;
        for (let apre of fatura.apresentacoes) {
            totalFatura += calcularTotalApresentacao(apre);
        }
        return totalFatura;
    }

    // Função para calcular o total de créditos
    function calcularTotalCreditos() {
        let creditos = 0;
        for (let apre of fatura.apresentacoes) {
            creditos += calcularCredito(apre);
        }
        return creditos;
    }

    // Corpo principal
    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${getPeca(apre).nome}: ${formatarMoeda(calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calcularTotalFatura())}\n`;
    faturaStr += `Créditos acumulados: ${calcularTotalCreditos()} \n`;
    return faturaStr;
}
