 function verificar(){
    var data = new Date()
    var fano = data.getFullYear()
    var anodisplay=document.getElementById("anonasc")
    var res = document.getElementById("res")
   

if (anodisplay.value > fano || anodisplay.value == 0 ){
    window.alert("Você não nasceu depois de de 2021 seu corno")

}
else{
    var fsex = document.getElementsByName("rad")
    var idade = fano - Number(anodisplay.value)
    var genero = ''
    var img = document.createElement("imagens")
    img.setAttribute('id' ,'foto')
    if (fsex[0].checked){
        genero = "homem"
     if(idade >0 && idade <=10){
        //Criança
        img.setAttribute('src', 'foto-bebe-m.png')
    }
    else if ( idade < 21){
        img.setAttribute('src','foto-jovem-m.png')
//Jovem
img.setAttribute('src','foto-jovem-m.png')
    }
    else if (idade>20){
        //adulto
        img.setAttribute('src','foto-adulto-m.png')
    }
    else if(idade >62){
        
        //idoso
        img.setAttribute('src','foto-idoso-m.png')
    }
    }
    else if (fsex [1].checked){
        genero = "mulher"
        if(idade >0 && idade <=10){
            //Criança
            img.setAttribute('src', 'foto-bebe-f.png')
        }
        else if ( idade < 21){
    //Jovem
    img.setAttribute('src','foto-jovem-f.png')
        }
        else if (idade>20){
            //adulto
            img.setAttribute('src','foto-adulto-f.png')
        }
        else if(idade >62){
            //idoso
            img.setAttribute('src','foto-idoso-f.png')
        }
    }
    
    res.style.textAlign ="center"
    res.innerHTML = `Detectamos ${genero} com idade de  ${idade} anos`
    res.appendChild(img)
}
     

      
}