function barajaTarjetas(){
    //pega a matriz fonte e a reordena aleatoriamente
    var resultado;
  
    resultado = totalTarjetas.sort(function(){
      return 0.5 - Math.random();
    });
  
    return resultado;
  }
  
  function reparteTarjetas(){
    //About: começa o jogo e coloca as cartas
    var mesa = document.querySelector("#mesa"); //acesso ao codigo html
    var tarjetaBarajadas = barajaTarjetas(); //vem da função que randomiza
    mesa.innerHTML = ""; //limpando para deixar em branco
  
    tarjetaBarajadas.forEach(function(elemento){
      //Nossos trechos de html são inserido aqui no loop
      var tarjeta = document.createElement("div");
  
      tarjeta.innerHTML = 
        "<div class='tarjeta' data-valor= " + elemento + ">" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";
      
      mesa.appendChild(tarjeta); //é aqui que cada nova div é determinada dentro da div#mesa
    });
  }