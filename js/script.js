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
    $(".mini").toggle();
  });
  $(".personalize.second").click(function(){
    $('.before_tabs').removeClass("third-colorize");
    $('paper-tab').removeClass("third-colorize");
    $('.before_tabs').addClass("second-colorize");
    $('paper-tab').addClass("second-colorize");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#01BCD4");
    $('footer paper-button').css("background-color","#01BCD4");
    $('.parcours').css("background-color","#01BCD4");
    $('#not_mini').css("background-color","#01BCD4");
    $(".personalize.fourth").show();
    $(".personalize.third").css("bottom","-82px");
    $(".personalize.third").show();
    $(".personalize.second").hide();
  });
  $(".personalize.third").click(function(){
    $('.before_tabs').removeClass("second-colorize");
    $('paper-tab').removeClass("second-colorize");
    $('.before_tabs').addClass("third-colorize");
    $('paper-tab').addClass("third-colorize");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#FF4081");
    $('footer paper-button').css("background-color","#FF4081");
    $('.parcours').css("background-color","#FF4081");
    $('#not_mini').css("background-color","#FF4081");
    $(".personalize.fourth").show();
    $(".personalize.third").hide();
    $(".personalize.second").show();

  });
  $(".personalize.fourth").click(function(){
    $('.before_tabs').removeClass("second-colorize");
    $('paper-tab').removeClass("second-colorize");
    $('.before_tabs').removeClass("third-colorize");
    $('paper-tab').removeClass("third-colorize");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#1DE9B6");
    $('footer paper-button').css("background-color","#1DE9B6");
    $('#not_mini').css("background-color","#1DE9B6");
    $('.parcours').css("background-color","#1DE9B6");
    $(".personalize.fourth").hide();
    $(".personalize.third").css("bottom","-135px");
    $(".personalize.third").show();
    $(".personalize.second").show();

  });
});
