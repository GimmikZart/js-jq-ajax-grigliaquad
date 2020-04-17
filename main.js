// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){
  $(".square").click(function(){
    var questoSquare = $(this);
    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",
      success : function (data,stato){
        var dato = data.response;
        if (dato <= 5 && !questoSquare.hasClass("active")){
          questoSquare.addClass("giallo");
          questoSquare.addClass("active"); // BOOOOOOONUUUUUSSSSS
          questoSquare.text(dato);
        } else if (dato > 5 && !questoSquare.hasClass("active")){
          questoSquare.addClass("verde");
          questoSquare.addClass("active"); // BOOOOOONUUUUUSSS
          questoSquare.text(dato);
        }
      },
      error : function(richiesta,stato,errori){
        alert("E' avvenuto un errore" + errore);
      }
    });


  });//fine evento click




});//fine document ready
