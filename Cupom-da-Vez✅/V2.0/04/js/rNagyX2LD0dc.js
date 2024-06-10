function trocarDiv(esconderId, mostrarId) {
    document.getElementById(esconderId).style.display = 'none';
    document.getElementById(mostrarId).style.display = 'block';
}
  
  
  function playAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}
  
  
  //--------------------------------- Ad 1 ---------------------------------
  
  
  function showPopupB1() {
      document.getElementById('popupB1').style.display = 'flex';
  }
  
  function closePopupB1() {
      document.getElementById('popupB1').style.display = 'none';
  }   
  
  // Carregando B1
      function showLoadingB1() {
              showPopupB1();
              // Simulando um atraso de 3 segundos para o showPopup2()
              setTimeout(function () {
                  closePopupB1();
                  trocarDiv('ad1', 'ad2');
                  trocarTexto2();
                  iniciarSlider(1);
              }, 4000); // 3 segundos
          }
  
  
  //--------------------------------- Ad 2 ---------------------------------
  
  
  function showPopupB2() {
      document.getElementById('popupB2').style.display = 'flex';
  }
  
  function closePopupB2() {
      document.getElementById('popupB2').style.display = 'none';
  }   
  
  // Carregando B2
      function showLoadingB2() {
          var button = document.getElementById("B2");
              showPopupB2();
              // Simulando um atraso de 3 segundos para o showPopup2()
              setTimeout(function () {
                  closePopupB2();
                  trocarDiv('ad2', 'ad3');
                  trocarTexto3();
                  iniciarSlider(2);
              }, 4000); // 3 segundos
          }
  
      
  //--------------------------------- Ad 3 ---------------------------------
  
  
  function showPopupB3() {
      document.getElementById('popupB3').style.display = 'flex';
  }
  
  function closePopupB3() {
      document.getElementById('popupB3').style.display = 'none';
  }   
  
  
      function showLoadingB3() {
          var button = document.getElementById("B3");
              showPopupB3();
              setTimeout(function () {
                  closePopupB3();
                  trocarDiv('ad3', 'ad4');
                  trocarTexto4();
                  iniciarSlider(3);
              }, 4000); 
          }
  
  
  //--------------------------------- Ad 4 ---------------------------------
  
  
  function showPopupB4() {
      document.getElementById('popupB4').style.display = 'flex';
  }
  
  function closePopupB4() {
      document.getElementById('popupB4').style.display = 'none';
  }   
  
  
      function showLoadingB4() {
          var button = document.getElementById("B4");
              showPopupB4();
              setTimeout(function () {
                  closePopupB4();
                  trocarDiv('ad4', 'ad5');
                  trocarTexto5();
                  iniciarSlider(4);
              }, 4000); 
          }
  
  
  //--------------------------------- Ad 5 ---------------------------------
  
  
  function showPopupB5() {
      document.getElementById('popupB5').style.display = 'flex';
  }
  
  function closePopupB5() {
      document.getElementById('popupB5').style.display = 'none';
  }   
  
  
      function showLoadingB5() {
          var button = document.getElementById("B5");
              showPopupB5();
              setTimeout(function () {
                  closePopupB5();
                  trocarDiv('ad5', 'ad6');
                  trocarTexto6();
                  iniciarSlider(5);
              }, 4000);
          }
  
      
  //--------------------------------- Ad 6 ---------------------------------
  
  
  function showPopupB6() {
      document.getElementById('popupB6').style.display = 'flex';
  }
  
  function closePopupB6() {
      document.getElementById('popupB6').style.display = 'none';
  }   
  
  
      function showLoadingB6() {
          var button = document.getElementById("B6");
              showPopupB6();
              setTimeout(function () {
                  closePopupB6();
                  trocarDiv('ad6', 'ad7');
                  trocarTexto7();
                  iniciarSlider(6);
              }, 4000);
          }
  
  //--------------------------------- Ad 7 ---------------------------------
  
  
  function showPopupB7() {
      document.getElementById('popupB7').style.display = 'flex';
  }
  
  function closePopupB7() {
      document.getElementById('popupB7').style.display = 'none';
  }   
  
  
      function showLoadingB7() {
          var button = document.getElementById("B7");
              showPopupB7();
              setTimeout(function () {
                  closePopupB7();
                  trocarDiv('ad7', 'ad8');
                  trocarTexto8();
                  iniciarSlider(7);
              }, 4000);
          }
  
  
  //--------------------------------- Ad 8 ---------------------------------
  
  
  function showPopupB8() {
      document.getElementById('popupB8').style.display = 'flex';
  }
  
  function closePopupB8() {
      document.getElementById('popupB8').style.display = 'none';
  }   
  
  
      function showLoadingB8() {
          var button = document.getElementById("B8");
              showPopupB8();
              setTimeout(function () {
                  closePopupB8();
                  trocarDiv('ad8', 'ad9');
                  trocarTexto9();
                  iniciarSlider(8);
              }, 4000);
          }

//--------------------------------- Ad 9 ---------------------------------
  
  
function showPopupB9() {
    document.getElementById('popupB9').style.display = 'flex';
}

function closePopupB9() {
    document.getElementById('popupB9').style.display = 'none';
}   


    function showLoadingB9() {
        var button = document.getElementById("B9");
            showPopupB9();
            setTimeout(function () {
                closePopupB9();
                trocarDiv('ad9', 'ad10');
                trocarTexto10();
                iniciarSlider(9);
            }, 4000);
        }