function tabuar(){
var ni = document.querySelector('input#num')
var n = Number(ni.value)
let lista = document.querySelector('select#select')
if(num.value.length == 0){
    alert("Insira um valor válido")
}else{
    lista.innerHTML = ' '
    for(var c = 1;c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ` + n*c
        select.appendChild(item)
        //(`${n} X ${c} = ` + n*c)
    }
}
/*
Logica da contagem: 
var a = 3 
for(var c =1; c <= 10; c++){
    console.log(`${a} X ${c} = ` + a*c)
}
    //saida = tabuada do 3
*/
}