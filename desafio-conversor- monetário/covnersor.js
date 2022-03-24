let cotaçao = parseFloat(window.prompt("Digite a cotação de dolar do dia"))

function botao(){
     let reais = parseFloat(window.prompt('Quanto voce tem na carteira em reais?'))
     window.alert(`Voce tem equivalente a dolar na sua carteira exatos US ${reais*cotaçao}$`)
    
}