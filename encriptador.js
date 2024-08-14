const textArea = document.querySelector(".caja_texto");
const mensaje = document.querySelector(".textoFinal");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

/*function copiar() {
    var texto = document.getElementById('textoFinal').innerText;
    navigator.clipboard.writeText(texto).then(function() {
      console.log('Texto copiado');
    }).catch(function(err) {
      console.error('Error al copiar:', err);
    });
  }*/

    function showAlert(message) {
        const alertElement = document.getElementById('customAlert');
        alertElement.textContent = message;
        alertElement.style.display = 'block';
        
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 2000);
    }

    document.getElementById('botonCopiar').addEventListener('click', function() {
        var textoFinal = document.getElementById('textoFinal');
        textoFinal.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Texto copiado al portapapeles' : 'No se pudo copiar el texto';
            showAlert(msg);
        } catch (err) {
            console.error('Error al copiar texto: ', err);
            showAlert('Error al copiar texto');
        }

        // Desseleccionar el texto
        window.getSelection().removeAllRanges();


        /*textoFinal.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        navigator.clipboard.writeText(textoFinal.value)
            .then(() => {
                showAlert('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar texto: ', err);
                showAlert('Error al copiar texto');
            });*/
    });


 
