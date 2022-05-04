var select = document.querySelector(".selecao");
var passo = document.querySelector("#passo");

select.addEventListener('click', function () {
    if (select.value == "cesar") {
        passo.style.display = "flex";
    } else {
        passo.style.display = "none";
    }
})

var btn = document.querySelector('.codifica')
btn.addEventListener('click', function (e) {
    e.preventDefault()

    if (select.value == "cesar") {

        var incremento = document.getElementById("chave").value;
        incremento = incremento % 26;

        if (document.querySelector("#decodificar").checked) {
            incremento = incremento * -1;
        }
        cesar(incremento);

        function cesar(incremento) {
            var textoDeEntrada = document.querySelector(".mensagem").value;
            var textoDeSaida = document.querySelector(".resultado");
            var transicao = "";
            textoDeSaida.innerHTML = "";
            for (var i = 0; i < textoDeEntrada.length; i++) {
                transicao = textoDeEntrada.charCodeAt(i);
                if (transicao >= 65 && transicao <= 90) {
                    transicao = transicao + incremento;
                    if (transicao > 90) {
                        transicao = transicao - 26;
                    } else if (transicao < 65) {
                        transicao = transicao + 26;
                    }
                }
                if (transicao >= 97 && transicao <= 122) {
                    transicao = transicao + incremento;
                    if (transicao > 122) {
                        transicao = transicao - 26;
                    } else if (transicao < 97) {
                        transicao = transicao + 26;
                    }
                }
                textoDeSaida.innerHTML += String.fromCharCode(transicao);
            }
        }
    } else if (select.value == 'base64') {

        var textoDeEntrada = document.querySelector(".mensagem").value;
        var textoDeSaida = document.querySelector(".resultado");
        if (document.querySelector("#codificar").checked)
            textoDeSaida.innerHTML = btoa(textoDeEntrada);
        else textoDeSaida.innerHTML = atob(textoDeEntrada);
    }
})