////////////////////////
////Search Function/////
////////////////////////

$('#search').keyup(function() {
    var value = $(this).val();
    var exp = new RegExp(value, 'i');

    $('a').each(function() {
        var match = exp.test($(this).data('title'));
        $(this).toggle(match);
    });
});


////////////////////////
///LightBox Options/////
////////////////////////

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'maxWidth': 1000,
    'maxHeight': 1000
  })
