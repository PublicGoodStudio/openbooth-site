// Smooth scroll to section headings
$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 200);
});

  $(document).on('click', 'input', function (event) {
    var total = 5700;

    if ($('input[name=whiteboard]:checked').val() === 'include') {
      total+=150;
    }

    if ($('input[name=seating]:checked').val() !== 'no-include') {
      total+=330;
    }

    if ($('input[name=finish]:checked').val() === 'walnut'){
      total+=400;
    }

    if ($('input[name=desk]:checked').val() === 'no-include') {
      total-=280;
    }

    if ($('input[name=door]:checked').val() === 'no-include') {
      total-=1300;
    }

    $('.big-price').text('$' + parseFloat(total, 10).toFixed().replace(/(\d)(?=(\d{3})+)/g, "$1,").toString());
    $('.big-price').text('$' + parseFloat(total, 10).toFixed().replace(/(\d)(?=(\d{3})+)/g, "$1,").toString());
    $('input[name=amount]').val(total);

  });
