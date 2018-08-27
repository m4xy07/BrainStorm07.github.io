   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#footer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_footer').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'easeOutCirc');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      if ($(window).width() > 480)
      {
         skrollrInit();
      }
      $(window).on('resize', function()
      {
         var _skrollr = skrollr.get();
         var windowWidth = $(window).width();
         if (windowWidth <= 480 && _skrollr !== undefined)
         {
            _skrollr.destroy();
         } 
         else
         if (windowWidth > 480 && _skrollr === undefined)
         {
            skrollrInit();
         }
      });
      $(document).on('click','.ThemeableMenu2-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_banner1').css('background-attachment', 'scroll');
      }
   });
   
   $(document).ready(function()
   {
      // NOTE: each image in the gallery has a class 'filter' with 'lollipops', 'candy' or 'cakes' as the category in Object HTML->Inside Tag
      $( "input[name=filter]:radio" ).click(function()
      {
         var value = $(this).attr('value');
         value = value.toLowerCase();
         if (value == "all")
         {
           $('.filter').parent().show('1000');
         }
         else
         {
            $(".filter").not('.'+value).parent().hide('3000');
            $('.filter').filter('.'+value).parent().show('3000');
         }
         $("input[name=filter]:radio").checkboxradio("refresh");
      });
   });
