document.addEventListener("DOMContentLoaded", function() {
  // const button = document.querySelector("cir cir3");
  // const form = document.querySelector('#openforma');

  // button.addEventListener('click', () => {
  // form.classList.add('open');
  //  });

  $(function(){
    $('.form-button').click(function(){
      $('.formablock').hide(200),
      $('.popup').show(250);
  });
  });
});