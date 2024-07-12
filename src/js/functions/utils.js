import { resultadoExistente, botonCopiar, imgCompu, tituloAside, infoAside, espacioResultados, micro, campoTexto, estaGrabando} from "../variables.js"

export function mostrarTexto(texto) {
	if (!resultadoExistente.value) {
		resultadoExistente.value = document.createElement("textarea");
		resultadoExistente.value.id = "resultado";
		resultadoExistente.value.setAttribute("readonly", "true");
		botonCopiar.parentElement.insertBefore(resultadoExistente.value, botonCopiar);
	}

	resultadoExistente.value.textContent = texto;

	imgCompu.classList.add("hide");
	tituloAside.classList.add("hide");
	infoAside.classList.add("hide");
	botonCopiar.classList.remove("hide");
}

export function copiar() {
	resultadoExistente.value.select();
	document.execCommand("copy");
	alertaCopiado();
}

export function alertaCopiado() {
	const divAlerta = document.createElement("div");
	const texto = document.createElement("p");
	texto.textContent = "Copiado al portapapeles";
	divAlerta.classList.add("content--alert");

	divAlerta.appendChild(texto);
	espacioResultados.appendChild(divAlerta);
	botonCopiar.classList.add("hide");

	setTimeout(() => {
		botonCopiar.classList.remove("hide");
		divAlerta.remove();
	}, 1200);
}

export function modoOscuro() {
	const body = document.querySelector("body");
	body.classList.toggle("dark");
}

export function mensaje() {
	const alerta = document.querySelector("#alerta");

	alerta.classList.add("show");

	setTimeout(() => {
		alerta.classList.add("hide");
	}, 3000); 
}


export function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function grabarVoz() {
	
    micro.classList.add("microfono--red");

    const SpeechRecognition = window.webkitSpeechRecognition || SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "es-MX";

    recognition.onresult = function(event) {
        campoTexto.value = eliminarAcentos(event.results[0][0].transcript).toLowerCase();
    };

    recognition.onend = function() {
        if (estaGrabando.value) {
            recognition.start();
        } else {
            micro.classList.remove("microfono--red");	
        }
    };

    if (!estaGrabando.value) {
        // Iniciar la grabación
        recognition.start();
        estaGrabando.value = true;
    } else {
        // Detener la grabación
        recognition.stop();
        estaGrabando.value = false;
    }
}