const faturamento = [
    {
        estado : "SP",
        valor : 67836.43
    },
    {
        estado : "RJ",
        valor : 36678.66
    },
    {
        estado : "MG",
        valor : 29229.88
    },
    {
        estado : "ES",
        valor : 27165.48
    },
    {
        estado : "Outros",
        valor : 19849.53
    }
]

function percentual(dados) {
    let total = 0;
    for(let i = 0; i < dados.length; i++){
        total += dados[i].valor;
    }
    for(let i = 0; i < dados.length; i++){
        let percentual = (dados[i].valor * 100) / total;
        console.log(`${dados[i].estado} - ${percentual.toFixed(2)}%`);
    }
}

percentual(faturamento);