function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarCaracterAleatorio() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return caracteres.charAt(generarNumeroAleatorio(0, caracteres.length - 1));
}
  
let x = "";
    for (let i = 0; i < 4; i++) {
        x += generarCaracterAleatorio();
    }
  
let a = "";
    for (let i = 0; i < 4; i++) {
        a += generarCaracterAleatorio();
    }
  
let b = "";
    for (let i = 0; i < 4; i++) {
        b += generarCaracterAleatorio();
    }
  
let c = "";
    for (let i = 0; i < 4; i++) {
        c += generarCaracterAleatorio();
    }
  
const id = x + "-" + a + "-" + b + "-" + c;
console.log("id vale: " + id);