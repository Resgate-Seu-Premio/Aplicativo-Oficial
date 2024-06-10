document.addEventListener('DOMContentLoaded', function() {
    // Validação Cupom 1
    var inputCupom1 = document.getElementById('inputCupom');
    var mensagemValidacao1 = document.getElementById('mensagemValidacao');

    inputCupom1.addEventListener('input', function() {
        var valorInput = this.value;
        if (valorInput.length === 20) {
            if (valorInput === "83    49    55    13") {
                mensagemValidacao1.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao1.style.color = "green";
                aumentarValor(67.00);
                playAudio();
                showLoadingB1();
            } else {
                mensagemValidacao1.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao1.style.color = "red";
            }
        } else {
            mensagemValidacao1.textContent = "";
        }
    });

    // Validação Cupom 2
    var inputCupom2 = document.getElementById('inputCupom2');
    var mensagemValidacao2 = document.getElementById('mensagemValidacao2');

    inputCupom2.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "95    45    21    63") {
                mensagemValidacao2.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao2.style.color = "green";
                aumentarValor(59.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB2(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao2.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao2.style.color = "red";
            }
        } else {
            mensagemValidacao2.textContent = "";
        }
    });

    // Validação Cupom 3
    var inputCupom3 = document.getElementById('inputCupom3');
    var mensagemValidacao3 = document.getElementById('mensagemValidacao3');

    inputCupom3.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "15    78    37    15") {
                mensagemValidacao3.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao3.style.color = "green";
                aumentarValor(72.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB3(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao3.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao3.style.color = "red";
            }
        } else {
            mensagemValidacao3.textContent = "";
        }
    });

    // Validação Cupom 4
    var inputCupom4 = document.getElementById('inputCupom4');
    var mensagemValidacao4 = document.getElementById('mensagemValidacao4');

    inputCupom4.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "52    32    81    44") {
                mensagemValidacao4.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao4.style.color = "green";
                aumentarValor(64.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB4(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao4.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao4.style.color = "red";
            }
        } else {
            mensagemValidacao4.textContent = "";
        }
    });


    // Validação Cupom 5
    var inputCupom5 = document.getElementById('inputCupom5');
    var mensagemValidacao5 = document.getElementById('mensagemValidacao5');

    inputCupom5.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "47    52    71    43") {
                mensagemValidacao5.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao5.style.color = "green";
                aumentarValor(57.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB5(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao5.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao5.style.color = "red";
            }
        } else {
            mensagemValidacao5.textContent = "";
        }
    });

    // Validação Cupom 6
    var inputCupom6 = document.getElementById('inputCupom6');
    var mensagemValidacao6 = document.getElementById('mensagemValidacao6');

    inputCupom6.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "58    77    85    68") {
                mensagemValidacao6.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao6.style.color = "green";
                aumentarValor(71.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB6(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao6.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao6.style.color = "red";
            }
        } else {
            mensagemValidacao6.textContent = "";
        }
    });

    // Validação Cupom 7
    var inputCupom7 = document.getElementById('inputCupom7');
    var mensagemValidacao7 = document.getElementById('mensagemValidacao7');

    inputCupom7.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "87    52    64    65") {
                mensagemValidacao7.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao7.style.color = "green";
                aumentarValor(59.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB7(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao7.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao7.style.color = "red";
            }
        } else {
            mensagemValidacao7.textContent = "";
        }
    });

    // Validação Cupom 8
    var inputCupom8 = document.getElementById('inputCupom8');
    var mensagemValidacao8 = document.getElementById('mensagemValidacao8');

    inputCupom8.addEventListener('input', function() {
        var valorInput = this.value;
        // Substitua "Código do Cupom 2" pelo código real esperado para o cupom 2
        if (valorInput.length === 20) {
            if (valorInput === "94    25    18    77") {
                mensagemValidacao8.textContent = "✅ Cupom válido. Seu saldo subiu!";
                mensagemValidacao8.style.color = "green";
                aumentarValor(58.00); // Substitua 50.00 pelo valor correspondente ao cupom 2
                playAudio();
                showLoadingB8(); // Certifique-se de que showLoadingB2() está definido
            } else {
                mensagemValidacao8.textContent = "❌ Você digitou errado. Tente novamente!";
                mensagemValidacao8.style.color = "red";
            }
        } else {
            mensagemValidacao8.textContent = "";
        }
    });



});
