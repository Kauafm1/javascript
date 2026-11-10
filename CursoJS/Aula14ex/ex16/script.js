function contar(){
var ini = document.querySelector('input#ini')
var fim = document.querySelector('input#fim')
var pas = document.querySelector('input#pass')
var res = document.querySelector('div#res')

if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    res.innerHTML = 'ImpossÌvel contar'

}else{
    res.innerHTML = "Contando: <br>"
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if(p <= 0){
        alert('Passo inválido! considerando PASSO 1')
        p = 1
    }
    if(i < f){
        for(var c = i;c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }else{
        for(var c = i;c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}



}