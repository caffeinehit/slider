# Simple image slider 

## Usage

        <div id="slider" style="width: 300px; height: 200px;">
            <a href="#" class="next-button">&lt;</a>
            <a href="#" class="previous-button">&gt;</a>
        </div>
        <div style="display: none">
            <img src="1.png" class="image" />
            <img src="2.png" class="image" />
            <img src="3.png" class="image" />
        </div>

        $('#slider').slide({images: $('.image'), next: $('.next-button'), previous: $('.previous-button')})

