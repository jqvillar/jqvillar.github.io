$(document).ready(function () {

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
