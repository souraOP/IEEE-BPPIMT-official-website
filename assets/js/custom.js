//To change the cursor animation

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - scrollY - 25)+"px; left: "+(e.pageX - scrollX - 25)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})




jQuery( document ).ready(function( $ ) {
	"use strict";
        $(function() {
            $( "#tabs" ).tabs();
});



// Page loading animation

$("#preloader").animate({
  'opacity': '0'
}, 1500, function(){
  setTimeout(function(){
    $("#preloader").css("visibility", "hidden").fadeOut();
    }, 1000);
});       

function destroyTilt() {
  var tiltElements = document.querySelectorAll('.team-item');
  var mq = window.matchMedia("(max-width: 1024px)");
  if (mq.matches) {
      for (var i = 0, len = tiltElements.length; i < len; i++) {
          tiltElements[i].vanillaTilt.destroy();
      }
  } else {
      console.log('pedal');
  }
}
destroyTilt();




$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var box = $('.header-text').height();
  var header = $('header').height();

  if (scroll >= box - header) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});





//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Reviewers Move and Drag


if ($('.owl-testimonials').length) {
  $('.owl-testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: true,
    smartSpeed: 700,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      460: {
        items: 1,
        margin: 0
      },
      576: {
        items: 2,
        margin: 20
      },
      992: {
        items: 2,
        margin: 30
      }
    }
  });
}

//Collaborators Drags and Move
if ($('.owl-partners').length) {
  $('.owl-partners').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: true,
    smartSpeed: 700,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      460: {
        items: 1,
        margin: 0
      },
      576: {
        items: 2,
        margin: 20
      },
      992: {
        items: 4,
        margin: 30
      }
    }
  });
}

$(".Modern-Slider").slick({
  autoplay:false,
  autoplaySpeed:10000,
  speed:600,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:true,
  pauseOnDotsHover:true,
  cssEase:'linear',
  // fade:true,
  draggable:false,
  prevArrow:'<button class="PrevArrow"></button>',
  nextArrow:'<button class="NextArrow"></button>', 
});

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){
          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
 
});



// Bottom Up Bounce Animation
var $animation_elements = document.querySelectorAll('.animateBounce');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');





$(document).ready(function() {

  //window and animation items
  var animation_elements = document.querySelectorAll('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function rightAnimation() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  $(window).on('scroll resize', function() {
      rightAnimation()
    })

  $(window).trigger('scroll');

});





