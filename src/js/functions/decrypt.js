import { campoTexto, regex } from "../variables.js";
import { mostrarTexto } from "./utils.js";


export function desencriptar() {
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
