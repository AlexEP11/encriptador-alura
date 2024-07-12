import { botonEncriptar, botonDesencriptar, botonCopiar, pod, micro } from "./variables.js";
import { encriptar } from "./functions/encrypt.js"
import { desencriptar } from "./functions/decrypt.js"
import { copiar, grabarVoz, mensaje, modoOscuro } from "./functions/utils.js";

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);
micro.addEventListener("click", grabarVoz);
window.addEventListener("DOMContentLoaded", mensaje);
pod.addEventListener("click", modoOscuro);

