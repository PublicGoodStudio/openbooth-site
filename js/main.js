// Smooth scroll to section headings
$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 200);
});

// Hide the nav bar if we're at the top of the page
$(document).ready(function() {
  var nav = $('.navbar');
  nav.hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 30) {
              nav.fadeIn(200);
          } else {
              nav.fadeOut(300);
          }
      });
    });
  });



  $(document).on('click', 'input', function (event) {
    var total = 2900;

    if ($('input[name=door]:checked').val() === 'no-include') {
      total-=600;
    }

    if ($('input[name=finish]:checked').val() === 'walnut'){
      total+=600;
    }

    if ($('input[name=seating]:checked').val() !== 'no_seat') {
      total+=300;
    }

    $('.big-price').text('$' + parseFloat(total, 10).toFixed().replace(/(\d)(?=(\d{3})+)/g, "$1,").toString());;
  });
