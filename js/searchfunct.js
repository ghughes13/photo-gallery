$("#search").keyup(function() {
  var input = $(this).val();
  $('.data-title:not(:contains('value'))').hide();
});
