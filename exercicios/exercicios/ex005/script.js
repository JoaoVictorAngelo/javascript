let items = []

window.adicionar = function adicionar() {
    let numero = document.getElementById('numero').value
    let caixa = document.getElementById('caixa')
    
    if (numero === "" || isNaN(numero) || numero < 1 || numero > 100) {
        alert('[ERROR] Digite um valor válido entre 1 e 100')
        return
    }
    
    numero = Number(numero)
    
    if (items.indexOf(numero) !== -1) {
        alert('[ERROR] Número já adicionado')
        return
    }
    
    items.push(numero)
    
    let option = document.createElement('option')
    option.text = `Valor ${numero} adicionado`
    caixa.add(option)
    resultado.innerHTML = ''
    
    document.getElementById('numero').value = ""
    document.getElementById('numero').focus()
}

window.finalizar = function finalizar() {
    if (items.length === 0) {
        alert('[ERROR] Adicione números antes de finalizar')
        return
    }
    
    let total = items.length
    let maior = Math.max(...items)
    let menor = Math.min(...items)
    let soma = items.reduce((a, b) => a + b, 0)
    let media = soma / total
    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `
        <p>Ao todo, temos ${total} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media.toFixed(2)}.</p>
    `
}
