 function carregar(){
     var msg = window.document.getElementById("msg")
      var img = window.document.getElementById("img")
      var data = new Date()
      var hora = data.getHours()
      msg.innerHTML = `Agora são ${hora} horas`

      

    
    if (hora >0 && hora <12)
    {
        //Bom dia
        img.src = "pexels-josh-hild-3363426.jpg"
        document.body.style.background = "#e2cd9f"


    }
    else if ( hora >=12 && hora <18)
    {
        //Boa tarde
        img.src = "pexels-anderson-martins-2386144.jpg"
        document.body.style.background = "#b9846f"
        
    }
    else{
       // Boa Noite
        img.src = "pexels-reynaldo-brigworkz-brigantty-771883.jpg"
        document.body.style.background = "#515154"
    }
}