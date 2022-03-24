function bhaskara(){
    let res = document.getElementById("res")
    let res1 = document.getElementById("res1")
    let res2 = document.getElementById("res2")
    let a = Number(window.prompt(`Digite o valor de a`))
    let b = Number(window.prompt(`Digite o valor de b`))
    let c = Number(window.prompt(`Digite o valor de c`))
    res.innerHTML = `A equaçao atual é ${a}X2 + ${b}X + ${c}`
    res1.innerHTML = `O calcula realizado sera &Delta; = ${b}<sup>2</sup> - 4.${a}. ${c}`
    res2.innerHTML = `O resultado de &Delta; = ${(b**2)-(4*a*c)}`




}