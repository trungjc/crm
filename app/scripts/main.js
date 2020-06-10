'use strict';
var isMobileScreen = function isMobileScreen() {
  return document.body.clientWidth < 992;
};
var isDesktopScreen = function isMobileScreen() {
  return document.body.clientWidth > 1024;
};
var isTableScreen = function isMobileScreen() {
  return ( document.body.clientWidth > 767 && document.body.clientWidth < 1025) ;
};

var app = {
  init: function init() {
    app.showSidebar();
  },

  showSidebar: function () {
    $('.btn-toggle-sidebar').on('click',function (e) {
      e.preventDefault();
      $('html').toggleClass('show-sidebar');
    })
  },
  equalHeightByRow: function (obj, notRunMobile) {
    var widthTarget = 0;
    if ($(obj).length) {
      $(obj).height('auto');
      widthTarget = notRunMobile === true ? 768 : 0;
      if ($(window).width() >= widthTarget) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = [],
            currentDiv = 0,
            $el,
            topPosition = 0;
        $(obj).each(function () {
          if ($(this).is(':visible') === true) {
            $el = $(this);
            topPosition = $el.offset().top;
            if (currentRowStart !== topPosition) {
              for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].innerHeight(currentTallest);
              }
              rowDivs = [];
              currentRowStart = topPosition;
              currentTallest = $el.innerHeight();
              rowDivs.push($el);
            } else {
              rowDivs.push($el);
              currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
              rowDivs[currentDiv].innerHeight(currentTallest);
            }
          }
        });
      }
    }
  },
}

$(document).ready(function () {
  $('select').selectpicker();
  // $('.datetime-picker1').datetimepicker({  inline: true, sideBySide: true});
  $('.datetime-picker').datetimepicker();
  $('.slider-bs').slider({});
  app.init();
  var resizeId;
  $(window).resize(function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(function () {
    });
  });

  $(window).scroll(function () {
  });
});

$(window).on('load', function () {
});
