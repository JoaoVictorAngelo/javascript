function detector() {
    // Pegando a data atual
    var data = new Date();
    var ano = data.getFullYear();
    
    // Pegando o ano de nascimento
    var fano = document.getElementById('txtano').value;
    
    // Descobrindo que ano nasceu
    var idade = ano - fano;
    
    // Guardando a div#res na variável res
    var res = document.getElementById('res');
    
    if (fano == 0 || fano > ano) {
        alert('[ERRO] algo de errado não está certo');
    } else {
        var fsex = document.getElementsByName('radsex');
        var genero = '';
        
        // Criando um elemento img
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagem/homembebe.jpg');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagem/homemjovem.jpg');
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagem/homemadulto.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'imagem/homemidoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagem/mulherbebe.jpg');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagem/mulherjovem.jpg');
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagem/mulheradulta.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'imagem/mulheridosa.jpg');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Um(a) ${genero} com idade calculada: ${idade} anos.`;
        res.appendChild(img);
    }
}
