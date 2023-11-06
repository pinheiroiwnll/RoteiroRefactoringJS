function gerarFaturaHTML(fatura, pecas) {
    let faturaHTML = '<html>\n';
    faturaHTML += `<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;

    for (let apre of fatura.apresentacoes) {
        const peca = getPeca(pecas, apre);
        const totalApresentacao = calcularTotalApresentacao(pecas, apre);
        faturaHTML += `<li> ${peca.nome}: ${formatarMoeda(totalApresentacao)} (${apre.audiencia} assentos) </li>\n`;
    }

    faturaHTML += '</ul>\n';
    const totalFatura = calcularTotalFatura(pecas, fatura.apresentacoes);
    const totalCreditos = calcularTotalCreditos(pecas, fatura.apresentacoes);
    faturaHTML += `<p> Valor total: ${formatarMoeda(totalFatura)} </p>\n`;
    faturaHTML += `<p> Créditos acumulados: ${totalCreditos} </p>\n`;
    faturaHTML += '</html>';

    return faturaHTML;
}

const faturas = JSON.parse(readFileSync('./faturas.json'));
const pecas = JSON.parse(readFileSync('./pecas.json'));

const faturaStr = gerarFaturaStr(faturas, pecas);
const faturaHTML = gerarFaturaHTML(faturas, pecas);

console.log("Fatura em formato de texto:");
console.log(faturaStr);

console.log("\nFatura em formato HTML:");
console.log(faturaHTML);

