function gerarFaturaStr(fatura, pecas) {
    // Função extraída
    function calcularCredito(apre) {
        let creditos = 0;
        creditos += Math.max(apre.audiencia - 30, 0);
        if (getPeca(apre).tipo === "comedia")
            creditos += Math.floor(apre.audiencia / 5);
        return creditos;
    }

    // Restante do código...

    for (let apre of fatura.apresentacoes) {
        const peca = getPeca(apre);
        let total = 0;
        // Resto do código...
        // Créditos para próximas contratações
        creditos += calcularCredito(apre); // Substituindo a lógica anterior pela função
        // Resto do código...
    }

    // Restante do código...
}

function gerarFaturaStr(fatura, pecas) {
    // Função extraída
    function formatarMoeda(valor) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        }).format(valor / 100);
    }

    // Função extraída
    function calcularCredito(apre) {
        let creditos = 0;
        creditos += Math.max(apre.audiencia - 30, 0);
        if (getPeca(apre).tipo === "comedia")
            creditos += Math.floor(apre.audiencia / 5);
        return creditos;
    }

    // Restante do código...

    for (let apre of fatura.apresentacoes) {
        const peca = getPeca(apre);
        let total = 0;
        // Resto do código...
        // Créditos para próximas contratações
        creditos += calcularCredito(apre);
        // Resto do código...
    }

    // Restante do código...
}
