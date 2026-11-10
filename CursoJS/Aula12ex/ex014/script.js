function carregar (){
var msg = window.document.getElementById("msg")
var img = document.getElementById('imagem')
var data = new Date()
var agora = data.getHours()
msg.innerHTML = `Agora são ${agora} horas`
if (agora > 0 && agora <= 12){
    //bom dia
    img.src = ('manha.jpg')
    document.body.style.background = '#e4cea2'
}else if(agora >= 18){
    //boa noite
    img.src = ('noite.jpg')
    document.body.style.background = '#122e6e'
}else{
    //boa tarde
    img.src = ('tarde.jpg')
    document.body.style.background = '#fee7b6'
}
}