function calcularAvisoPrevioIndenizado(salario) { 
    let avisoPrevioIndenizado = (salario / 30) * 33
    return avisoPrevioIndenizado.toFixed(2) 
}

let salario = 2000
console.log(calcularAvisoPrevioIndenizado(2000));