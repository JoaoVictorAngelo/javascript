function contador(){
    //pegando inicio
    var inicio = document.getElementById('inicio').value
    //pegando fim
    var fim = document.getElementById('fim').value
    //pegando passo
    var passo = document.getElementById('passo').value
    
    // Convertendo os valores para números
    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    // Pegando o elemento de resultado
    var res = document.getElementById('res');

        // Limpando o resultado anterior
        res.innerHTML = "";

    //verificando dados preenchidos
    if (inicio === '' || fim === '' || passo === '') {
        alert('Preencha todos os dados');
        return;
    } else if (inicio <= 0 || fim <= 0 || passo <= 0) {
        alert('Os números devem ser maiores que 0');
        return;
    }

    //contagem
    if  (inicio < fim) {
        //contagem crescente
        for (var i = inicio; i < fim; i += passo) {
            res.innerHTML += `${i} \u{1F449} `
        }
    } else {
        //contagem decrescente
        for (var i = inicio; i > fim; i -= passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    // bandeira de chegada
    res.innerHTML += `\u{1F3C1}`;
}
