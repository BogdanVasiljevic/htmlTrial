jQuery(document).ready(function () {
  /* Button Toggle Active */
  $('.brd-button').on('click', function () {
    $(this).toggleClass('active');
  });
  /* Toggle Fnctions */
  $('#toggle-functions').on('click', function () {
    $('.functions').toggleClass('hidden');
  });
  /* Drop Down Function*/
  $('.dropdown').on('click', 'a.dropdown-item', function (e) {
    var item = $(this).data('val');
    $('.dropdown a.dropdown-toggle').text(item);
  });
});