



// Event listener for the button to redistribute cards
document.getElementById("btn").addEventListener("click", function() {
  // Remover a classe 'descubierta' de todas as cartas
  document.querySelectorAll(".tarjeta.descubierta").forEach(function(elemento) {
    elemento.classList.remove("descubierta");
  });


  reparteTarjetas();

  // Associar novamente o evento 'click' às novas cartas
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir)});
});







