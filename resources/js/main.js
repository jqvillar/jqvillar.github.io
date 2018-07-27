$(document).ready(function () {

  /* Fade between pages*/
  $('body').css('display', 'none');
  $('body').fadeIn(1500);

  /*Full page scroll plugin*/
  $('#fullpage').fullpage({
  scrollBar: true,
  navigation: true
  });

  $('#hamburger').click(function(){
    this.classList.toggle('change');
    $('#fp-nav').toggle();
    $('.overlay').fadeToggle(500);
  });

});
