function selectionActive(keyword) {

  $('.about').removeClass('about');
  $('.reference').removeClass('reference');
  $('.contact').removeClass('contact');
  $("#header").addClass('selection-active').addClass(keyword);

  var url = "./assets/view/" + keyword + ".html";

  $('.main-wrapper').removeClass('visible');
  $('.active').removeClass('active');
  $('#'+ keyword).addClass('active');

  $.get(url, function(data) {
    $('.main-wrapper').html(data).addClass('visible');
  });

}