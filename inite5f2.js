( function( $ ) {

'use strict';

$(function() {

  // Go to top
  var offset       = 400,
      $back_to_top = $('#goup'),
      fwindow      = $(window),
      fwidth       = fwindow.width();
  fwindow.scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.removeClass('invisible'):
      $back_to_top.addClass('invisible');
  });
  $back_to_top.on( 'click', function(e) {
		e.preventDefault();
    $('body, html').animate({
      scrollTop: 0
    }, 600);
	});

  // Home Page
  if($('body').hasClass('home') ){
    // Menu
    $('#navbarSupportedContent a').on( 'click', function(e) {
      e.preventDefault();
      if( fwidth < 992 ){
        $('#navbarSupportedContent').collapse('toggle');
      }
      var ftarget = $(this).attr('href'),
          foffset = $(ftarget).offset().top - 60;
      $('html, body').animate({
          scrollTop: foffset
      }, 800);
  	});

    // Templates
    if( fwidth > 991 ){
      $('.email_showcase .nav-link').on( 'click', function(e) {
        e.preventDefault();
        var tin = $(this).parent().index();
        $('.email_showcase .nav-link').removeClass('active');
        $(this).addClass('active');
        $('#emailtemplates .p-2').addClass('sr-only');
        switch(tin) {
          case 2:
            $('#emailtemplates .emarketing').removeClass('sr-only');
            break;
          case 1:
            $('#emailtemplates .ecommerce').removeClass('sr-only');
            break;
          case 3:
            $('#emailtemplates .enotification').removeClass('sr-only');
            break;
          case 5:
            $('#emailtemplates .enotification').removeClass('sr-only');
            break;
          case 4:
            $('#emailtemplates .egreeting').removeClass('sr-only');
            break;
          default:
              $('#emailtemplates .p-2').removeClass('sr-only');
          }
    	});
    }
  }

});
} )( jQuery );
