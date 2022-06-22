function calcular () {
    var n1 = window.document.getElementById ("tn1")
    var n2 = window.document.getElementById ("tn2")
    var s = window.document.getElementById ("resultadoaqui")
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 / n2**2

    resultadoaqui.innerHTML = s.toFixed(2)
}