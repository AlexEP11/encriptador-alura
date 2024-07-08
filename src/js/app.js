const campoTexto = document.querySelector("#content__text");
const botonEncriptar = document.querySelector(".button--encrypt");
const botonDesencriptar = document.querySelector(".button--decrypt");
const espacioResultados = document.querySelector(".aside");
const botonCopiar = document.querySelector(".button--copy");
const imgCompu = document.querySelector(".aside__img");
const tituloAside = document.querySelector(".aside__title");
const infoAside = document.querySelector(".aside__info");
let resultadoExistente = document.querySelector("#resultado");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);

/*  Funciones */
function encriptar() {
	const texto = campoTexto.value;
	if (texto === "")
		return alert(
			"Necesita ingresar un valor para encriptar o desencriptar"
		);
	let textoEncriptado = "";

	for (let i = 0; i < texto.length; i++) {
		switch (texto[i]) {
			case "a":
				textoEncriptado += "ai";
				break;
			case "e":
				textoEncriptado += "enter";
				break;
			case "i":
				textoEncriptado += "imes";
				break;
			case "o":
				textoEncriptado += "ober";
				break;
			case "u":
				textoEncriptado += "ufat";
				break;
			default:
				textoEncriptado += texto[i];
				break;
		}
	}

	mostrarTexto(textoEncriptado);
	campoTexto.value = "";
}

function desencriptar() {
	const texto = campoTexto.value;
	if (texto === "")
		return alert(
			"Necesita ingresar un valor para encriptar o desencriptar"
		);
	let textoEncriptado = "";

	for (let i = 0; i < texto.length; i++) {
		switch (texto[i]) {
			case "a":
				textoEncriptado += "a";
				i++;
				break;
			case "e":
				textoEncriptado += "e";
				i += 4;
				break;
			case "i":
				textoEncriptado += "i";
				i += 3;
				break;
			case "o":
				textoEncriptado += "o";
				i += 3;
				break;
			case "u":
				textoEncriptado += "u";
				i += 3;
				break;
			default:
				textoEncriptado += texto[i];
				break;
		}
	}
	mostrarTexto(textoEncriptado);
	campoTexto.value = "";
}

function mostrarTexto(texto) {
	if (!resultadoExistente) {
		resultadoExistente = document.createElement("textarea");
		resultadoExistente.id = "resultado";
		resultadoExistente.setAttribute("readonly", "true");
		botonCopiar.parentElement.insertBefore(resultadoExistente, botonCopiar);
	}

	resultadoExistente.textContent = texto;

	imgCompu.classList.add("hide");
	tituloAside.classList.add("hide");
	infoAside.classList.add("hide");
	botonCopiar.classList.remove("hide");
}

function copiar() {
	resultadoExistente.select();
	document.execCommand("copy");
}
