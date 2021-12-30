 function contar(){

    var inicio =document.getElementById("inicio")
    var fim = document.getElementById("Fim")
    var passo = document.getElementById("passo")
    var msg = document.getElementById("res")
  
    if(inicio.value.length == 0 || fim.value.length==0 || passo.value.length == 0 ){
        window.alert("Impossivel contar")
    }
    else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        msg.innerHTML = 'Contando : <br>'
     
    
        for(var cont = i; cont<=f;cont+=p);
        {
       window.alert(`${cont}`)
        }

    }

}