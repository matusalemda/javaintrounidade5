function descubrir(){
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)"
    );//ignora as cartas eliminadas
    
    if(totalDescubiertas.length > 1){//aqui se faz abrir apenas 2 cartas
      return;
    }
  
    this.classList.add("descubierta"); //descubierta é uma class inserida no html
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2){
        return;
    }
  
    comparar(descubiertas);
  }
  
  function comparar(tarjetasAComparar){
  //prepara para as funções chamadas
    if (tarjetasAComparar[0].dataset.valor ===  tarjetasAComparar[1].dataset.valor){ //compara o par virado
      acierto(tarjetasAComparar);
    } else {
      erro(tarjetasAComparar);
    }
  }