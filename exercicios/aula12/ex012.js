var agora = new Date()
var hora = parseFloat(agora.getHours())
console.log(`Agora sao ${hora}:00 horas`)
if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!!')
} else if (hora > 12 && hora < 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
}