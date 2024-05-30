// Declaração da variável contadorAcertos no início
let contadorAcertos = 0;


function acierto(lasTarjetas){
//retira as cartas encontradas
    lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada"); /*add outra class, ver css*/

                contadorAcertos++; // Incrementa o contador
                // Verifica se o contador é divisível por 2
                if (contadorAcertos % 2 === 0) {
                    console.log(`A quantidade de acertos são ${contadorAcertos/2} vezes.`);
                    document.getElementById('contaacertos').innerText = `${contadorAcertos/2}`;
                }

    });
}




// Declaração da variável contadorErros no início
let contadorErros = 0;

function erro(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
        elemento.classList.add('error');
        contadorErros++; // Incrementa o contador

        // Verifica se o contador é divisível por 2
        if (contadorErros % 2 === 0) {
            console.log(`A quantidade de tentativas são ${contadorErros/2} vezes.`);
            document.getElementById('contaerros').innerText = `${contadorErros/2}`;
        }
    });












setTimeout(
    function(){//função só para por em setTimeout
        lasTarjetas.forEach(function(elemento){
            //reviva a carta
                   elemento.classList.remove("descubierta"); /*remove a class*/
                   elemento.classList.remove("error"); /*remove a class*/
                });
    }, 1000);
}