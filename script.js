function calcularIMC(){
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)

    const imc = peso / altura ** 2
    document.getElementById('imcResultado').textContent = imc.toFixed(2)
   
}