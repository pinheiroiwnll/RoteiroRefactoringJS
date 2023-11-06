// arquivo repositorio.js
const { readFileSync } = require('fs');

class Repositorio {
    constructor() {
        this.pecas = JSON.parse(readFileSync('./pecas.json'));
    }

    getPeca(apre) {
        return this.pecas[apre.id];
    }
}

module.exports = Repositorio;

var Repositorio = require("./repositorio.js");

// arquivo util.js
function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    }).format(valor / 100);
}

module.exports = formatarMoeda;

// arquivo servico.js
class ServicoCalculoFatura {
    constructor(repo) {
        this.repo = repo;
    }

    // Métodos da classe...
}

module.exports = ServicoCalculoFatura;

// arquivo apresentacao.js
function gerarFaturaStr(fatura, calc) {
    // Implementação da função...
}

module.exports = gerarFaturaStr;

const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js");
var gerarFaturaStr = require("./apresentacao.js");

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
