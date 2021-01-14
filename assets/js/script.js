const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 738px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
var $carousel = $('.carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
});

var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});

$(document).ready(function() { 
  var url = $("#vidf").attr('src'); 
  $("#modalf").on('hide.bs.modal', function() { 
      $("#vidf").attr('src', ''); 
  }); 
  $("#modalf").on('show.bs.modal', function() { 
      $("#vidf").attr('src', url); 
  }); 
});

$(document).ready(function() { 
  var url = $("#vids").attr('src'); 
  $("#modals").on('hide.bs.modal', function() { 
      $("#vids").attr('src', ''); 
  }); 
  $("#modals").on('show.bs.modal', function() { 
      $("#vids").attr('src', url); 
  }); 
});

$(document).ready(function() { 
  var url = $("#vidt").attr('src'); 
  $("#modalt").on('hide.bs.modal', function() { 
      $("#vidt").attr('src', ''); 
  }); 
  $("#modalt").on('show.bs.modal', function() { 
      $("#vidt").attr('src', url); 
  }); 
});