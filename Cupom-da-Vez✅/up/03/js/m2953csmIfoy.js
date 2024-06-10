//---------------------------- BotÃ£o chave PIX ---------------------------
 
 
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