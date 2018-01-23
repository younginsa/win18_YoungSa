$(document).ready(function(){
  var verticalGrid = '<div class="gridWidth"></div>';
  var verticalGridYear = '<div class="gridWidthYear">'
  var horizentalGrid = '<div class="gridHeight"></div>';
  var screenWidth = 2000;
  var screenHeight = 1500;
  console.log("this is screenWidth " + screenWidth + "\nthis is screenheight " + screenHeight);

//-----background Grid-------//
  var iTotal=0;
  var jTotal=0;
  var yearTotal=1;
  var monthTotal=0;

  for(var i=250; i<screenWidth; i+=5){

      if(iTotal%12 === 1){
        $('.BGgridWidth').append(verticalGridYear + '<span class="yearPos">' + yearTotal +'</span>'+ "</div>");
        yearTotal++;
      }else{
        $('.BGgridWidth').append(verticalGrid);
        monthTotal++;
      }
      iTotal++;
    }

  console.log("year total " + yearTotal);
  console.log("month total " + monthTotal);
  console.log("i " + i);
  console.log("iTotal "+ iTotal);

  for(var j=5; j<screenHeight; j+=6){
    $('.BGgridHeight').append(horizentalGrid);
      jTotal++;
    }
  console.log("j " + j);
  console.log("jtotal " + jTotal);


  var topOffset = parseInt($(".yearPos").css('top'));
  $(window).scroll(function(){
      $('.yearPos').css({
          'top': $(this).scrollTop() + topOffset
      });
  });

//-----scroll Animation-------
  //get scroll position
  var scrollPosition = $(window).scrollTop();
  console.log('mouse '+scrollPosition);
//from https://www.sitepoint.com/scroll-based-animations-jquery-css3/
  var $animation_elements = $('.nameBlock');
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




});
