$(document).ready(function(){
  $('#policy').click(function(){
    $('.modal').addClass('is-active');
  });

  $('.modal-background, .modal-close').click(function(){
    $('.modal').removeClass('is-active');
  });
});