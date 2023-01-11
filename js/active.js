(function ($) {
  ("use strict");
  $(document).on("ready", function () {
    /*==============================================
		Header Sticky JS
	================================================*/
    // var activeSticky = $("#active-sticky"),
    //   winDow = $(window);
    // winDow.on("scroll", function () {
    //   var scroll = $(window).scrollTop(),
    //     isSticky = activeSticky;
    //   if (scroll < 100) {
    //     isSticky.removeClass("is-sticky");
    //   } else {
    //     isSticky.addClass("is-sticky");
    //   }
    // });

    $(window).scroll(function () {
      var sticky = $("#active-sticky"),
        scroll = $(window).scrollTop();

      if (scroll >= 40) {
        sticky.addClass("fixed");
      } else {
        sticky.removeClass("fixed");
      }
    });

    /*==============================================================================
			CounterUp JS
		================================================================================*/
    $(".counter").counterUp({
      time: 1000,
    });

    /*==============================================
		Scroll To Top JS
	================================================*/
    var lastScrollTop = "";
    var scrollToTopBtn = ".scrollToTop";

    function stickyMenu($targetMenu, $toggleClass) {
      var st = $(window).scrollTop();
      if ($(window).scrollTop() > 600) {
        if (st > lastScrollTop) {
          $targetMenu.removeClass($toggleClass);
        } else {
          $targetMenu.addClass($toggleClass);
        }
      } else {
        $targetMenu.removeClass($toggleClass);
      }
      lastScrollTop = st;
    }
    $(window).on("scroll", function () {
      stickyMenu($(".sticky-header"), "active");
      if ($(this).scrollTop() > 400) {
        $(scrollToTopBtn).addClass("show");
      } else {
        $(scrollToTopBtn).removeClass("show");
      }
    });

    $(scrollToTopBtn).on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });

  /*==================================================
		Preloader JS
	====================================================*/
  function loader() {
    $(window).on("load", function () {
      $("#ctn-preloader").addClass("loaded");
      $("#loading").fadeOut(500);
      // Una vez haya terminado el preloader aparezca el scroll

      if ($("#ctn-preloader").hasClass("loaded")) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $("#preloader")
          .delay(900)
          .queue(function () {
            $(this).remove();
          });
      }
    });
  }
  loader();
})(jQuery);

/*=====================================================
	Dark Light JS
========================================================*/
(function () {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "dark";
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("light-theme");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "light-theme") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "light-theme");
  }
}
