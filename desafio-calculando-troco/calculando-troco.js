function troco(){
    let produto= window.prompt("Qual produto você esta comprando")
    let valor = window.prompt(`Quanto custa o ${produto} que você esta comprando?`)
    let dado = window.prompt(`Qual o valor que você deu para pagar o ${produto}?`)
    window.alert(`Você comprou um ${valor} \n Deu de dinheiro ${dado} e vai receber de troco R$${dado - valor }\n Volte sempre`)
}