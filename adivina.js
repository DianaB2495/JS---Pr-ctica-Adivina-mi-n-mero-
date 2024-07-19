document.addEventListener('DOMContentLoaded', function() {
    const iniciarBtn = document.getElementById('iniciarBtn');
    const gameArea = document.getElementById('gameArea');
    const adivinarBtn = document.getElementById('adivinarBtn');
    const resultadoElem = document.getElementById('resultado');
  
    iniciarBtn.addEventListener('click', function() {
      gameArea.style.display = 'block';
      iniciarBtn.style.display = 'none';
    });
  
    adivinarBtn.addEventListener('click', function() {
      let min = 1;
      let max = 100;
      let adivinado = false;
  
      while (!adivinado) {
        let medio = Math.floor((min + max) / 2);
        let respuesta = confirm(`¿Es ${medio} tu número?`);
  
        if (respuesta) {
          resultadoElem.textContent = `¡Tu número es el ${medio}! ¡Excelente decisión!`;
          adivinado = true;
        } else {
          let mayorMenor = confirm(`¿Es mayor que ${medio}?`);
  
          if (mayorMenor) {
            min = medio + 1;
          } else {
            max = medio - 1;
          }
        }
      }
    });
  });
  
  