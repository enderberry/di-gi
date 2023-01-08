function activateSlider(props) {
    props.slider.owlCarousel({
        items: 1,
        startPosition: 1,
        loop: true
    });
    if (props.buttons) {
        props.buttons.next.click(() => props.slider.trigger('next.owl.carousel'));
        props.buttons.prev.click(() => props.slider.trigger('prev.owl.carousel'));
    }
    if (props.discs) {
        props.slider.on('changed.owl.carousel', function (event) {
            for (let i = 0; i < props.discs.length; i++) {
                props.discs.eq(i).toggleClass('slider-discs__item--current', i === event.page.index);
            }
        });
        props.discs.click(function () {
            props.slider.trigger('to.owl.carousel', $(this).index());
        });
    }
}

$(document).ready(function () {
    activateSlider({
        slider: $('.hmain__slider'),
        discs: $('.hmain__slider-discs .slider-discs__item'),
        buttons: {
            next: $('#slider1-btn-next'),
            prev: $('#slider1-btn-prev')
        }
    });
    activateSlider({
        slider: $('.quote__slider'),
        discs: $('.quote__slider-discs .slider-discs__item')
    });
});
