function reajuste(){
 let res = document.getElementById("p1")
 let res1 = document.getElementById("p2")
 let res2 = document.getElementById("p3")
 let nome = window.prompt('Qual o nome do funcionário?')

    let salário = Number(window.prompt(`Qual é o salário de ${nome}`))
    let  reajuste = Number(window.prompt(`Qual sera o reajuste ${nome}`))
    res.innerHTML = `O salario era de R$${salário}`
    res1.innerHTML = `Com o aumento de ${reajuste}, o salario vai aumentar ${salário*(reajuste/100)}`
    res2.innerHTML = `E a partir dai, ${nome} vau passar a ganhar a ${salário+(salário*(reajuste/100))}`


 











}