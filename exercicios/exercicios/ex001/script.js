function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia.jpg'
        document.body.style.backgroundColor = '#D8D6CF'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ECD073'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#2B2B2D'
    }
}