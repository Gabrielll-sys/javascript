function desconto(){
    let res1 = document.getElementById("id1")
    let res2 = document.getElementById("id2")
    let res3 = document.getElementById("id3")
     let produto = window.prompt(`Digite o produto que voce ira comprar` )
     let valor = parseFloat(window.prompt(`Digite o valor do ${produto}`))
     res1.innerHTML = `O preço original do produto era ${valor}R$`;
     res2.innerHTML = `Voce acaba de ganhar R$ ${valor*0.1} de desconto (-10%)`
     res3.innerHTML = `No fim,voce vai pagar R$ ${valor*0.9}`
}
