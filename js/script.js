'use strict';
//compatability
//lambda function also a starwars ship
//maybe make new file and put in header, eg. global.js
//
// (function ($) {
//
//   $(document).ready(function () {
//       // $mobileNavToggleBtn.on('click', onBtnClick);
//       // $blankATags.on('click', onBlankAClick);
//       var $httpBtnClick = $('#btnonclick');
//       $httpBtnClick.on('click', funcHttpBtn);
//
//       function funcHttpBtn(e) {
//         var $this = $(this);
//         var req = new XMLHttpRequest();
//
//         req.onreadystatechange = function (event) {
//           // console.log('readystate:' + req.readyState);
//           // console.log('status:' + req.status);
//           // console.log('responseText:' + req.responseText);
//
//           $httprequest = $.get('http://mardby.se/AJK15G/lorem_text.php');
//
//           document.getElementById('http-result').innerHTML = req.readyState;
//
//           $.get('http://forverkliga.se/JavaScript/api/simple.php?key=value', function (data) {
//               $('#http-result').load('http://forverkliga.se/JavaScript/api/simple.php?key=value');
//             });
//
//           alert('req.data: ' + req.value);
//         };
//
//       }
//     });
// })(jQuery);

// var $mobileNavToggleBtn = $('.mobile-nav-toggle');
//     $blankATags = $('a[href^="#"]'),
//     $body = $('html, body'),
//     settings = {
//       duration: 1000
//     };
//
//   function onBtnClick(e) {
//     var $this = $(this),
//         $selectors = $('.target');
//
//     $this.toggleClass('other');
//     $selectors.toggleClass('other');
//   }
//
// function onBlankAClick (event) {
//   var $this = $(this),
//       href = $this.attr('href'),
//       $target = $(href);

// if($target.length > 0) {
//   event.preventDetault();
//   $body.animate({
//     scrollTop: target.offset().top
//   }, duration);
// }

  // $('div.box').on('click', setInterval); {
  //   $('#slideshow > div:gt(0)').hide();
  //
  //   var interID = setInterval(function (event) {
  //     $('#slideshow > div:first')
  //       .fadeOut(1000)
  //       .next()
  //       .fadeIn(1000)
  //       .end()
  //       .appendTo('#slideshow');
  //   }, 1500);
  //
  // }

  // $('div#box').on('click', function () {
  //     $(event.target).addClass('swipe');
  //   });
//
(function ($) {

})(jQuery);

(function ($) {

  $( document ).ready(function() {
    // $('.work-section').toggle();
    // $('.slideshow-section').toggle();
    // $('.socialmedia-section').toggle();

  });

  $('.selection-button:nth-child(1)').on('click', function (event) {
    $('.work-section').toggle();

  });

  $('.selection-button:nth-child(2)').on('click', function (event) {
    $('.about-section').toggle();

  });

  $('.selection-button:nth-child(3)').on('click', function (event) {
    $('.clients-section').toggle();

  });
  $('.selection-button:nth-child(4)').on('click', function (event) {
    $('.content-section').toggle();

  });

})(jQuery);

(function ($) {

  $(document).ready(function() {

  });

})(jQuery);
