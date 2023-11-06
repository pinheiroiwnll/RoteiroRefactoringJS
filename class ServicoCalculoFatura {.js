class ServicoCalculoFatura {
    calcularCredito(pecas, apre) {
        let creditos = 0;
        creditos += Math.max(apre.audiencia - 30, 0);
        if (this.getPeca(pecas, apre).tipo === "comedia")
            creditos += Math.floor(apre.audiencia / 5);
        return creditos;
    }

    calcularTotalCreditos(pecas, apresentacoes) {
        let creditos = 0;
        for (let apre of apresentacoes) {
            creditos += this.calcularCredito(pecas, apre);
        }
        return creditos;
    }

    calcularTotalApresentacao(pecas, apre) {
        const peca = this.getPeca(pecas, apre);
        let total = 0;

        switch (peca.tipo) {
            case "tragedia":
                total = 40000;
                if (apre.audiencia > 30) {
                    total += 1000 * (apre.audiencia - 30);
                }
                break;
            case "comedia":
                total = 30000;
                if (apre.audiencia > 20) {
                    total += 10000 + 500 * (apre.audiencia - 20);
                }
                total += 300 * apre.audiencia;
                break;
            default:
                throw new Error(`Peça desconhecida: ${peca.tipo}`);
        }
        return total;
    }

    calcularTotalFatura(pecas, apresentacoes) {
        let totalFatura = 0;
        for (let apre of apresentacoes) {
            totalFatura += this.calcularTotalApresentacao(pecas, apre);
        }
        return totalFatura;
    }

    getPeca(pecas, apre) {
        return pecas[apre.id];
    }
}

const calc = new ServicoCalculoFatura();
const faturas = JSON.parse(readFileSync('./faturas.json'));
const pecas = JSON.parse(readFileSync('./pecas.json'));
const faturaStr = gerarFaturaStr(faturas, pecas, calc);

console.log("Fatura em formato de texto:");
console.log(faturaStr);
