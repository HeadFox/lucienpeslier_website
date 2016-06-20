$( document ).ready(function() {
  var content = $('iron-pages');
  var secondaryNav = $('.before_tabs'),
  	secondaryNavTopPosition = secondaryNav.offset().top;

  $(window).on('scroll', function(){

  	if($(window).scrollTop() > secondaryNavTopPosition ) {
  		secondaryNav.addClass('is-fixed');
      content.addClass('addtop');

  	} else {
  		secondaryNav.removeClass('is-fixed');
      content.removeClass('addtop');
  	}
  });
  $(".personalize.main").click(function(){
    $(".personalize.second").toggle();
    $(".personalize.third").delay(400).toggle();
  });
  $(".personalize.third").click(function(){
    $('.before_tabs').css("background-color", "#3f51b5");
    $('paper-fab').css("background-color","#FF5252");
  });
});
