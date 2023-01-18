// EN el javascript
function contarMultiplosDe5() {
    var contador = 0;
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            contador++;
        }
    }
    return contador;
    
}
document.getElementById("resultado").innerHTML = "Hay " + contarMultiplosDe5() + " múltiplos de 5 entre 1 y 100";
