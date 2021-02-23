$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });

//Obtenha todos os elementos do Menu(<li>) e mude o texto de
//todos para “Item nav N”. N é a posição do elemento, nesse caso deverá
//imprimir a partir de 1 e assim sucessivamente.

let elemento = document.getElementsByTagName("li");
elemento = [0]
for (let i = 0;i<elemento.length; i++) {
elemento[i].innerText = "Item nav "+i;
}