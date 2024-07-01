function tabular() {
    // pegando numero para tabular
    var numeroEscolhido = Number(document.getElementById('numeroEscolhido').value)
    var contagem = Number(0)
    var res = Number()
    var solucao = document.getElementById('solucao')

        // Limpando o resultado anterior
        solucao.innerHTML = ""


    // fazendo tabuada
    while (contagem <= 10){
        var res = numeroEscolhido * contagem
        var listItem = document.createElement('li')
        listItem.textContent = `${numeroEscolhido} x ${contagem} = ${res}`
        solucao.appendChild(listItem);
        contagem ++
    }
    
}