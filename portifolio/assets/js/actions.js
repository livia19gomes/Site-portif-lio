function calcular() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var soma = parseInt(num1) + parseInt(num2)

    document.getElementById('resultado').innerText = soma
}

document.getElementById('btncalcular').addEventListener('click', calcular)

alert("Bem-vindo ao meu portifólio!")

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Formulário enviado com sucesso!");
    
    document.getElementById("formulario").reset();
})