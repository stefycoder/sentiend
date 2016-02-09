  /*$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
/*
(function($)){
	var x=0;
	var y=0;

	var banner=$(".banner");

	banner.css('backgroundPosition',x+ 'px'+' '+y+ 'px');

	window.setInterval(function()){
		banner.css("backgroundPosition",x+'px' +' '+ y+ 'px');
		y--;
	}
}*/