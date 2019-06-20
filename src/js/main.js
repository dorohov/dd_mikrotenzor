(function($) {
    "use strict"
    $(function() {

        $('.__dd').mousemove(function(e) {
            $('.__dd__block-fo__part.is--one').css({
                transform: 'translateX(' + e.clientX / 30 + 'px) translateY(' + e.clientY / 30 + 'px)'
            })
            $('.__dd__block-fo__part.is--two').css({
                transform: 'translateX(-' + e.clientX / 30 + 'px) translateY(-' + e.clientY / 30 + 'px)'
            }) 
        })

    })
})(jQuery);