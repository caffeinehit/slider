(function() {
  var slide, template;
  template = "<div class=\"slider\">\n    <ul class=\"slider-images\">\n    \n    </ul>\n</div>";
  slide = function(opts) {
    var animate, current, elem, image, ul, width, _i, _len, _ref;
    if (opts == null) {
      opts = {};
    }
    opts = $.extend({
      template: template
    }, opts);
    elem = $(this);
    width = elem.css('width');
    width = parseInt(width.replace('px', ''));
    current = 0;
    elem.append(opts.template);
    ul = elem.find('ul');
    ul.css({
      position: 'relative',
      left: '0px'
    });
    ul.css({
      width: opts.images.length * width
    });
    _ref = opts.images;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      image = _ref[_i];
      image = $(image);
      image.css({
        width: elem.css('width'),
        height: elem.css('height')
      });
      ul.append($('<li class="slider-image"/>').append(image));
    }
    ul.children().css({
      float: 'left'
    });
    animate = function() {
      return ul.animate({
        left: -current * width + 'px'
      });
    };
    opts.next.click(function() {
      if (current < opts.images.length - 1 || (current = 0)) {
        current += 1;
      }
      animate();
      return false;
    });
    opts.previous.click(function() {
      if (current > 0 || (current = opts.images.length)) {
        current -= 1;
      }
      animate();
      return false;
    });
    return this;
  };
  $.extend($.fn, {
    slide: slide
  });
}).call(this);
