 let num = document.getElementById("valor")

let res =document.getElementById("res")
let valores = []
function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
    return true
}
+
else{
    return false
}
function adicionar(){
   
  if(isNumero(num.value) ){ 
        valores.push(Number(num.value))
        
}

}
}