$(document).ready(function () {

  /* Fade between pages*/
  $('body').css('display', 'none');
  $('body').fadeIn(1500);

  $('#hamburger').click(function(){
    this.classList.toggle('change');
    $('#fp-nav').toggle();
    $('.overlay').fadeToggle(500);
  });

});
