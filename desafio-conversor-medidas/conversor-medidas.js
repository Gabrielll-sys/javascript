function converter(){
    let valor=window.prompt("Digite um valor(em m)")
    let escrita = window.document.getElementById("res")
    let escrita1 = window.document.getElementById("res1")
    let escrita2 = window.document.getElementById("res2")
    let escrita3 = window.document.getElementById("res3")
    let escrita4 = window.document.getElementById("res4")
    let escrita5 = window.document.getElementById("res5")
    escrita.innerHTML = `O valor em quilômetros é igual a ${valor/1000}`
    escrita1.innerHTML = `O valor em hectômetros é igual a ${valor/100}`
    escrita2.innerHTML = `O valor em decâmetros é igual a ${valor/10}`
    escrita3.innerHTML = `O valor em decimetros é igual a ${valor*10}`
    escrita4.innerHTML = `O valor em centrimetros é igual a ${valor*100}`
    escrita5.innerHTML = `O valor em milímetros é igual a ${valor/1000}`

    
}