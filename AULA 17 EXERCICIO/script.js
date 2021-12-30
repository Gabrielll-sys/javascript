 function tabuada(){

    var num = document.getElementById('numero')
    var tab = document.getElementById("seltab")


conta = Number(num.value)

if(num.value.length == 0){
    window.alert("Digite alguma coisa caralho")

}



  else{
      tab.innerHTML = ""
    for(i=0;i<=50;i++){
        let item = document.createElement('option')
         item.text= `${ conta} x ${i} = ${conta*i}`
         tab.appendChild(item)


}


}











}