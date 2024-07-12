import { botonEncriptar, botonDesencriptar, botonCopiar, pod } from "./variables.js";
import { encriptar } from "./functions/encrypt.js"
import { desencriptar } from "./functions/decrypt.js"
import { copiar, mensaje, modoOscuro } from "./functions/utils.js";

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);
window.addEventListener("DOMContentLoaded", mensaje);
pod.addEventListener("click", modoOscuro);

