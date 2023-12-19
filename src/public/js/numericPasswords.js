document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-password')
    const passwordDisplay = document.getElementById('password-display');
  
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(passwordDisplay.textContent);
        Swal.fire({
          title: "Contraseña copiada",
          text: "Tu contraseña ha sido copiada al portapeles",
          icon: "success"
        });
        console.log('Contraseña copiada al portapapeles');
      } catch (error) {
        console.error('Error al copiar la contraseña:', error);
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const reloadButton = document.querySelector('.reload-svg-2');
  const passwordDisplay = document.querySelector('.password-display');

  

  reloadButton.addEventListener('click', async () => {
    const selectedLength = passwordLengthSlider.value;
    try {
      
      const response = await fetch(`/passwords/numeric/${selectedLength}`)
      const data = await response.json();

      passwordDisplay.textContent = `${data.password}`;
      console.log('Contraseña generada:', data.password);
    } catch (error) {
      console.error('Error al obtener la contraseña:', error);

      // Si hay un error, limpia el contenido del passwordDisplay
      passwordDisplay.textContent = '';

      // No es necesario hacer nada con response.text() en este caso
    }
  });
});

const passwordLengthSlider = document.getElementById('passwordLengthSlider');
const passwordLengthLabel = document.getElementById('passwordLengthLabel');

passwordLengthSlider.addEventListener('input', () => {
  const selectedLength = passwordLengthSlider.value;
  passwordLengthLabel.textContent = `Longitud: ${selectedLength}`;
});


const sliderSelect = document.querySelector('.sliderSelect-2');
const passwordDisplay = document.querySelector('.password-display');
sliderSelect.addEventListener('click', async()=>{
  const selectedLength = passwordLengthSlider.value;

  try {
    const response = await fetch(`/passwords/numeric/${selectedLength}`)
    const data = await response.json()
    passwordDisplay.textContent = `${data.password}`;
  } catch (error) {
    console.error('Error al obtener la contraseña', error)
  }
})
