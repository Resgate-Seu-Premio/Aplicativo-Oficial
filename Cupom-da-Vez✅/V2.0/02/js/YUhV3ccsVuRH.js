// Carrega o saldo do localStorage ou define 500.00 se não existir saldo salvo
let saldo = parseFloat(localStorage.getItem('saldo')) || 50.00;

function atualizarSaldoUI() {
    const elementosParaAtualizar = [
        document.getElementById('valor-money'),
        document.getElementById('valor-saque'),
        document.getElementById('valor-menu'),
    ];

    // Atualiza todos os elementos com o saldo atual
    elementosParaAtualizar.forEach(elemento => {
        if (elemento) elemento.textContent = `R$ ${saldo.toFixed(2)}`;
    });
}

function aumentarValor(valorIncremento) {
    const valorInicial = saldo;
    const valorFinal = valorInicial + valorIncremento;
    const duracao = 2000; // Duração da animação em milissegundos (2 segundos)
    const inicio = performance.now();

    function animarSaldo(tempoAtual) {
        const tempoDecorrido = tempoAtual - inicio;
        const progresso = tempoDecorrido / duracao;

        if (progresso < 1) {
            saldo = valorInicial + (valorIncremento * progresso);
            atualizarSaldoUI();
            requestAnimationFrame(animarSaldo);
        } else {
            saldo = valorFinal;
            atualizarSaldoUI();
            // Salva o saldo final no localStorage após a animação terminar
            localStorage.setItem('saldo', saldo.toString());
        }
    }

    requestAnimationFrame(animarSaldo);
}

// Certifique-se de chamar atualizarSaldoUI() quando a página carrega para atualizar os elementos com o saldo correto
document.addEventListener('DOMContentLoaded', atualizarSaldoUI);
