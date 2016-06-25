$( document ).ready(function() {
  var content = $('header');
  var secondaryNav = $('.before_tabs'),
  	secondaryNavTopPosition = secondaryNav.offset().top;

  $(window).on('scroll', function(){

  	if($(window).scrollTop() > secondaryNavTopPosition ) {
  		secondaryNav.addClass('is-fixed');
      content.addClass('addbot');

  	} else {
  		secondaryNav.removeClass('is-fixed');
      content.removeClass('addbot');
  	}
  });
  $(".personalize.main").click(function(){
    $(".mini").toggle();
  });
  $("#next").click(function(){
    $("paper-tabs paper-tab").removeClass("iron-selected");
    $("iron-pages section").removeClass("iron-selected");
    $("paper-tabs paper-tab:last-child").addClass("iron-selected")
    $("iron-pages section:last-child").addClass("iron-selected");
  });
  $('.logos').hide();
  $(".first").click(function(){
    $('.sites').show();
    $('.logos').hide();
  });
  $(".two").click(function(){
    $('.sites').hide();
    $('.logos').show();
  });
  $(".personalize.second").click(function(){
    $('.before_tabs').removeClass("third-colorize");
    $('paper-tab').removeClass("third-colorize");
    $('.web_server iron-icon').removeClass("color_green");
    $('.web_server iron-icon').removeClass("color_rose");
    $('.web_server iron-icon').addClass("color_blue");
    $('.before_tabs').addClass("second-colorize");
    $('paper-tab').addClass("second-colorize");
    $('paper-button').css("background-color","#01BCD4");
    $('.sites').css("background-color","#01BCD4");
    $('.two').css("background-color","#212121");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#01BCD4");
    $('.parcours').css("background-color","#01BCD4");
    $('#not_mini').css("background-color","#01BCD4");
    $('.timeline').removeClass('color_green');
    $('.timeline').removeClass('color_rose');
    $('.timeline').addClass('color_blue');
    $(".personalize.fourth").show();
    $(".personalize.third").removeClass("change_135");
    $(".personalize.third").addClass("change_82");
    $(".personalize.third").show();
    $(".personalize.second").hide();
  });
  $(".personalize.third").click(function(){
    $('.before_tabs').removeClass("second-colorize");
    $('paper-tab').removeClass("second-colorize");
    $('.before_tabs').addClass("third-colorize");
    $('.web_server iron-icon').removeClass("color_green");
    $('.web_server iron-icon').addClass("color_rose");
    $('.web_server iron-icon').removeClass("color_blue");
    $('paper-button').css("background-color","#FF4081");
    $('.two').css("background-color","#212121");
    $('paper-tab').addClass("third-colorize");
    $('.sites').css("background-color","#FF4081");
    $('.two').css("background-color","#212121");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#FF4081");
    $('.parcours').css("background-color","#FF4081");
    $('#not_mini').css("background-color","#FF4081");
    $('.timeline').removeClass('color_green');
    $('.timeline').removeClass('color_blue');
    $('.timeline').addClass('color_rose');
    $(".personalize.third").removeClass("change_135");
    $(".personalize.third").removeClass("change_82");
    $(".personalize.fourth").show();
    $(".personalize.third").hide();
    $(".personalize.second").show();
  });
  $(".personalize.fourth").click(function(){
    $('.before_tabs').removeClass("second-colorize");
    $('paper-tab').removeClass("second-colorize");
    $('.before_tabs').removeClass("third-colorize");
    $('.web_server iron-icon').addClass("color_green");
    $('.web_server iron-icon').removeClass("color_rose");
    $('.web_server iron-icon').removeClass("color_blue");
    $('paper-button').css("background-color","#1DE9B6");
    $('paper-tab').removeClass("third-colorize");
    $('.sites').css("background-color","#1DE9B6");
    $('.two').css("background-color","#212121");
    $('.personalize.main').css("color","#FFFFFF");
    $('.personalize.main').css("background-color","#1DE9B6");
    $('#not_mini').css("background-color","#1DE9B6");
    $('.parcours').css("background-color","#1DE9B6");
    $('.timeline').removeClass('color_blue');
    $('.timeline').removeClass('color_rose');
    $('.timeline').addClass('color_green');
    $(".personalize.fourth").hide();
    $(".personalize.third").removeClass("change_82");
    $(".personalize.third").addClass("change_135");
    $(".personalize.third").show();
    $(".personalize.second").show();

  });
});
