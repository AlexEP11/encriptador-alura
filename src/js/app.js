const campoTexto = document.querySelector("#content__text");
const botonEncriptar = document.querySelector(".button--encrypt");
const botonDesencriptar = document.querySelector(".button--decrypt");
const espacioResultados = document.querySelector(".aside");
const botonCopiar = document.querySelector(".button--copy");
const imgCompu = document.querySelector(".aside__img");
const tituloAside = document.querySelector(".aside__title");
const infoAside = document.querySelector(".aside__info");
const pod = document.querySelector(".header__img");
const regex = /^[^A-ZÁÉÍÓÚÜÑáéíóúüñ]+$/;
let resultadoExistente = document.querySelector("#resultado");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);
pod.addEventListener("click", modoOscuro);

/*  Funciones */
function encriptar() {
	const texto = campoTexto.value;
	if (texto.trim() === "" || !isNaN(texto))
		return alert(
			"Necesita ingresar un texto para encriptar o desencriptar"
		);
	if (!regex.test(texto))
		return alert("Todo el texto debe estar en minúsculas y sin acentos");
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
	if (texto.trim() === "" || !isNaN(texto))
		return alert(
			"Necesita ingresar un texto para encriptar o desencriptar"
		);
	if (!regex.test(texto))
		return alert("Todo el texto debe estar en minúsculas y sin acentos");

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
	alertaCopiado();
}

function alertaCopiado() {
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

function modoOscuro() {
	const body = document.querySelector("body");
	body.classList.toggle("dark");
}
