/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );



$(document).ready(function () {
  $('#botonlogin').click(function (e) {
      e.preventDefault();
      $('#navbar').toggle(); 
  });
});

