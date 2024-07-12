import { campoTexto, regex } from "../variables.js";
import { mostrarTexto } from "./utils.js";

export function encriptar() {
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