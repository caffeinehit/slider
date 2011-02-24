# # Simple image slider 

# ## Usage
#
# $('#slide-container').slide({images: $('.image'), next: $('.next-button'), previous: $('.previous-button')})

template = """
    <div class="slider">
        <ul class="slider-images">
        
        </ul>
    </div>
"""

slide = (opts = {})->
    opts = $.extend { template: template }, opts

    elem = $ this

    width = elem.css 'width'
    width = parseInt width.replace('px','')

    current = 0

    elem.append opts.template
    
    ul = elem.find 'ul'
    ul.css position: 'relative', left: '0px'
    ul.css width: opts.images.length * width
    
    for image in opts.images
        image = $ image
        image.css width: elem.css('width'), height: elem.css('height')

        ul.append $('<li class="slider-image"/>').append image

    ul.children().css float: 'left'

    animate = ()->
        ul.animate { left: -current * width + 'px'}

    opts.next.click ()->
        current += 1 if current < opts.images.length - 1 or current = 0
        animate()
        return false
    
    opts.previous.click ()->
        current -= 1 if current > 0 or current = opts.images.length 
        animate()
        return false

    return this

$.extend $.fn, slide: slide

