function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('input#txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'crianca-m.jpg')
        }else if(idade < 21){
            img.setAttribute('src', 'jovem-m.jpg')
        }else if(idade < 50){
            img.setAttribute('src', 'adulto-m.jpg')
        }else{
            img.setAttribute('src', 'idoso-m.jpg')
        }
    }else{
        genero = 'mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'crianca-f.jpg')
        }else if(idade < 21){
            img.setAttribute('src', 'jovem-f.jpg')
        }else if(idade < 50){
            img.setAttribute('src', 'adulta-f.jpg')
        }else{
            img.setAttribute('src', 'idosa-f.jpg')
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    res.appendChild(img)
}



}