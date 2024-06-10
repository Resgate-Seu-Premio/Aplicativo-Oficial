    const inicioDiv = document.getElementById('inicio');
    const saqueDiv = document.getElementById('saque');
    const loginDiv = document.getElementById('login');
    const bonusDiv = document.getElementById('bonus');

    function playAudio() {
        var audio = document.getElementById("meuAudio");
        audio.play();
    }

    // Função para definir um cookie
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
    }
    
    // Função para obter o valor de um cookie
    function getCookie(cname) {
        const name = `${cname}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
    



    let valor = parseFloat(getCookie('valor')) || 150.00;
    const valorSpan = document.getElementById('valor');
    const valorSpanSaque = document.getElementById('valor-saque');
    const valorSpanMoney = document.getElementById('valor-money');
    
    function atualizarValor() {
        valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
        valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
        valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    }
    
    // Inicializa o valor ao carregar a página
    atualizarValor();
    
    const valoresDesejados = [36, 24, 40, 32];  // Valores que serão incrementados
    
    function aumentarValor() {
        if (valoresDesejados.length > 0) {
            const valorIncremento = valoresDesejados.shift();
            const valorInicial = valor;
            const valorFinal = valorInicial + valorIncremento;
            const duracao = 2000; // Duração da animação em milissegundos
            const inicio = performance.now();
    
            function animarValor(tempoAtual) {
                const tempoDecorrido = tempoAtual - inicio;
                const progresso = Math.min(tempoDecorrido / duracao, 1); // Garante que o progresso não ultrapasse 1
    
                valor = valorInicial + (valorIncremento * progresso);  // Calcula o valor intermediário
                atualizarValor();  // Atualiza a UI com o valor intermediário
    
                if (progresso < 1) {
                    requestAnimationFrame(animarValor);
                } else {
                    valor = valorFinal;  // Assegura que o valor final seja exatamente o esperado
                    atualizarValor();
                }
            }
    
            requestAnimationFrame(animarValor);
        }
    }
    
    // Exemplo de como iniciar a animação
    document.getElementById('finalizar').addEventListener('click', aumentarValor);
    
    
    




    function mostrarPagina(pagina) {
      inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
      loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
    }
    
    function trocarDiv(esconderId, mostrarId) {
      document.getElementById(esconderId).style.display = 'none';
      document.getElementById(mostrarId).style.display = 'block';
    }

    // Atualizar o valor exibido inicialmente
    atualizarValor();
    
    
    
    
    //--------------------------------- Ad 0 ---------------------------------
    
  

  //--------------------------------- Ad 1 ---------------------------------


  function showPopupB1() {
      document.getElementById('popupB1').style.display = 'block';
  }

  function closePopupB1() {
      document.getElementById('popupB1').style.display = 'none';
  } 


    function TrocarB1() {
      trocarDiv('assistirbtn1','finalizarbtn1');
      trocarDiv('foto_antiga1','foto_nova1');
    }

    
    // Carregando B1
    function FinalizarB1() {
      playAudio();
      aumentarValor();
      showPopupB1();
      setTimeout(function () {
          // Seleciona a div pelo ID
          var adDiv = document.getElementById('ad1');
  
          // Inicia a animação de desaparecimento
          let opacidade = 1;  // Opacidade inicial
          const duracao = 3000;  // Duração da animação em milissegundos
          const fadeOut = setInterval(function () {
              if (opacidade > 0) {
                  opacidade -= 0.02;  // Decrementa a opacidade
                  adDiv.style.opacity = opacidade;
              } else {
                  clearInterval(fadeOut);  // Encerra o intervalo
                  closePopupB1();
                  trocarDiv('ad1','ad2');
                  //window.location.href = '2.html';  // Redireciona para "2.html"
              }
          }, duracao / 100);  // Divide a duração total pelo número de etapas (100)
      }, 3000);  // Aguarda 4 segundos antes de iniciar a animação
  }
  
    
    
    //--------------------------------- Ad 2 ---------------------------------
    
    
    function showPopupB2() {
        document.getElementById('popupB2').style.display = 'block';
    }
    
    function closePopupB2() {
        document.getElementById('popupB2').style.display = 'none';
    }   
    
    function TrocarB2() {
      trocarDiv('assistirbtn2','finalizarbtn2');
      trocarDiv('foto_antiga2','foto_nova2');
    }

    
    // Carregando B2
    function FinalizarB2() {
      playAudio();
      aumentarValor();
      showPopupB2();
      setTimeout(function () {
          // Seleciona a div pelo ID
          var ad2Div = document.getElementById('ad2');
  
          // Inicia a animação de desaparecimento
          let opacidade = 1;  // Opacidade inicial
          const duracao = 3000;  // Duração da animação em milissegundos
          const fadeOut = setInterval(function () {
              if (opacidade > 0) {
                  opacidade -= 0.02;  // Decrementa a opacidade
                  ad2Div.style.opacity = opacidade;
              } else {
                  clearInterval(fadeOut);  // Encerra o intervalo
                  closePopupB2();
                  trocarDiv('ad2','ad3');
                  //window.location.href = '2.html';  // Redireciona para "2.html"
              }
          }, duracao / 100);  // Divide a duração total pelo número de etapas (100)
      }, 3000);  // Aguarda 4 segundos antes de iniciar a animação
  }
    
        
    //--------------------------------- Ad 3 ---------------------------------
    
    
    function showPopupB3() {
      document.getElementById('popupB3').style.display = 'block';
  }
  
  function closePopupB3() {
      document.getElementById('popupB3').style.display = 'none';
  }   
  
  function TrocarB3() {
    trocarDiv('assistirbtn3','finalizarbtn3');
    trocarDiv('foto_antiga3','foto_nova3');
  }

  
  // Carregando B3
  function FinalizarB3() {
    playAudio();
    aumentarValor();
    showPopupB3();
    setTimeout(function () {
        // Seleciona a div pelo ID
        var ad3Div = document.getElementById('ad3');

        // Inicia a animação de desaparecimento
        let opacidade = 1;  // Opacidade inicial
        const duracao = 3000;  // Duração da animação em milissegundos
        const fadeOut = setInterval(function () {
            if (opacidade > 0) {
                opacidade -= 0.02;  // Decrementa a opacidade
                ad3Div.style.opacity = opacidade;
            } else {
                clearInterval(fadeOut);  // Encerra o intervalo
                closePopupB3();
                document.getElementById('textTop').style.display = 'none';
                trocarDiv('ad3','ad4');
                //window.location.href = '2.html';  // Redireciona para "2.html"
            }
        }, duracao / 100);  // Divide a duração total pelo número de etapas (100)
    }, 3000);  // Aguarda 4 segundos antes de iniciar a animação
}
    
    
    //--------------------------------- Ad 4 ---------------------------------
    
    
    function showPopupB4() {
        document.getElementById('popupB4').style.display = 'block';
        document.getElementById('B4').disabled = true;
    }
    
    function closePopupB4() {
        document.getElementById('popupB4').style.display = 'none';
        document.getElementById('B4').disabled = true;
    }   
    

        function showLoadingB4() {
            var button = document.getElementById("B4");
                showPopupB4();
            }
    
    


    // Popup SAQUE
    
    function showPopup() {
      document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }  

    // Popup LIMITE DIÁRIO
    
    function showPopupL() {
      document.getElementById('popupL').style.display = 'block';
    }

    function closePopupL() {
      document.getElementById('popupL').style.display = 'none';
    }  

 

    // POPUP Limite diário quando bate X valor
    function verificarValor() {
        if (valor > 100000) {
            // Popup para valor >= 1362.60 e < 2725.20
            showPopupL();
        }
        
    }
   

    
    
    function fecharPopupEAgendarReaparecimento() {
        var popupButtonContainer = document.querySelector(".popup-buttonL-container");
        popupButtonContainer.style.display = "none"; // Oculta o botão
    
        // Define um temporizador para mostrar o botão após 10 segundos
        setTimeout(function() {
            popupButtonContainer.style.display = "block";
        }, 86400000); // 24 horas
    
        // Aqui você também deve adicionar a função para fechar o popup
        closePopupL();
    }
    
    // Chama a função para mostrar o botão após 10 segundos (10000 milissegundos)
    setTimeout(function() {
        var botaoContainer = document.querySelector(".popup-buttonL-container");
        botaoContainer.style.display = "block";
    }, 86400000); // 24 horas


    // Script botão login
    function showLoading() {
      var button = document.getElementById("prosseguir-button");
      button.disabled = true; // Desabilitar o botão enquanto a animação ocorre

      button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

      // Simulando um atraso de 3 segundos para a animação
      setTimeout(function() {
        // Redirecionar após o atraso
        mostrarPagina('inicio');
      }, 2000); // 2 segundos
    }
    

    
    
    function formatarValor(input) {
      // Remove todos os caracteres não numéricos
      var valor = input.value.replace(/[^0-9]/g, '');
      
      // Divide o valor em parte inteira e decimal
      var parteInteira = valor.slice(0, -2);
      var centavos = valor.slice(-2);
      
      // Reconstroi o valor formatado
      input.value = parteInteira + '.' + centavos;
    }
    
    function verificarCampos() {
        var email = document.getElementById("email").value;
        var emailValido = /\S+@\S+\.\S+/;
    
        if (email === "") {
            alert("Insira seu e-mail para logar!");
        } else if (!emailValido.test(email)) {
            alert("Insira um e-mail válido!");
        } else {
            // Se o campo estiver preenchido e for um e-mail válido, redireciona para a próxima página
            showLoading();
        }
    }


    function showPopupInicio() {
        document.getElementById('popupinicio').style.display = 'block';
      }
  
    function closePopupInicio() {
        document.getElementById('popupinicio').style.display = 'none';
    }


    function in1() {
        closePopupInicio();
        showPopupInicio2();

            // Agendar a exibição do próximo após 5 segundos
            setTimeout(function() {
                closePopupInicio2();
                showPopupInicio3();
            }, 10000);
    }    


     
      
      // ----------------- TESTE ANUNCIO 1 -----------------

      document.addEventListener('DOMContentLoaded', function () {
        const containers = document.querySelectorAll('.rating-container');
      
        containers.forEach(function (container) {
          const buttons = container.querySelectorAll('.rating-button');
      
          buttons.forEach(function (button) {
            button.addEventListener('click', function () {
              // Remove a classe 'active' apenas do conjunto de botões dentro do mesmo container
              buttons.forEach(function (btn) {
                btn.classList.remove('active');
              });
      
              // Adiciona a classe 'active' apenas ao botão clicado
              button.classList.add('active');
            });
          });
        });
      });
      
      //---------------------------- Botão chave PIX ---------------------------
     
     
    let activeButton = null;

    function toggleButton(buttonNumber) {
      const buttons = document.querySelectorAll('.square-button');
  
      if (activeButton !== null) {
       buttons[activeButton - 1].classList.remove('active');
      }
  
      if (activeButton === buttonNumber) {
        activeButton = null;
      } else {
        buttons[buttonNumber - 1].classList.add('active');
        activeButton = buttonNumber;
      }
    } 



  setTimeout(function () {
    var button = document.querySelector("#B5");

    var link = "https://metodo-lucrativo.tech/pvsl";

    button.addEventListener("click", function () {
      window.location.href = link + window.location.search;
    });
  }, 1000);




