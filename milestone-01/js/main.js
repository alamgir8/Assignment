
// function for swiper

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  // Mixitup js
  $(function(){
    $('#MixItUp1').mixItUp({
      selectors: {
        filter: '.filter-1',
        sort: '.sort-1'
      }
    });
    
    $('#MixItUp2').mixItUp({
      selectors: {
        filter: '.filter-2',
        sort: '.sort-2'
      }
    });
  });


  $(document).ready(function() {
    // plugin initializations etc.
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
  });
