//= require vendor/modernizr-2.8.3.min
//= require vendor/jquery.min
//= require vendor/jquery.waypoints.min
//= require vendor/inview.min

if(!Modernizr.svg || !Modernizr.inlinesvg)
{
  $('img.svg').each(function()
    {
    this.src = this.src.replace('.svg','.png');
      $(this).addClass('svg_loaded');
  });
}
if(!Modernizr.inlinesvg) 
{
  $('svg').remove();
}

$(window).on('load', function (e){
  if (window.location.hash) {
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top-80 }, 800, function (){
      // Mark as active
      $('a[href^="#"]').removeClass('active');
      $('a[href="'+window.location.hash+'"]').addClass('active');
    });
  }
});


// When a user scrolls to 50px add class  condensed-header to body
$(window).scroll(function(){
  var currentScreenPosition  = $(document).scrollTop();

  if(currentScreenPosition > 50) {
    $('body').addClass('condensed_header');
  } else {
    $('body').removeClass('condensed_header');
  }
});

jQuery(document).ready(function($) {
  // INITIATE ANIMATIONS ON SCROLL
  $('.animation').each(function() {
    var inview = new Waypoint.Inview({
      element: $(this)[0],
      enter: function(direction) {
        //window.console.log('Enter triggered with direction ' + direction);
      },
      entered: function(direction) {
        //window.console.log('Entered triggered with direction ' + direction);
        $(this.element).addClass('active');
      },
      exit: function(direction) {
        //window.console.log('Exit triggered with direction ' + direction);
      },
      exited: function(direction) {
        //window.console.log('Exited triggered with direction ' + direction);
        $(this.element).removeClass('active');
      }
    })
  });

  // Add Scroll on click event
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    var hash = this.hash;
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $('html, body').animate({ scrollTop: target.offset().top-80 }, 500, function (){
      location.hash = hash;
    });
    if($('#sidenav').hasClass('open')){
      $('#sidenav').removeClass('open');
    }
    return false;
  });

  // FAQ
  $('.toggle-faq').on('click', function(){
    $(this).parent().toggleClass('open');
  });

  // Collapsible SIDEBAR Menu
  $('#menu-toggle').on('click', function(){
    $('#sidenav').toggleClass('open');
  });
  $('#page-content, #page-header').on('click', function(){
    $('#sidenav').removeClass('open');
  });
});

