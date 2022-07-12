$(window).scroll(() => {
    let waveScrol = this.scrollY;
    if($(window).width() > 636.9) {
        $('.contact-wave img').css({
            'transform': `translate(-${waveScrol / 5}px, 0px`
        });

        $('.contact-wave img:nth-child(2)').css({
            'transform': `translate(-${waveScrol / 7}px, ${waveScrol / 25}px`
        });
    } else {
        $('.contact-wave img').css({
            'transform': `translate(-${waveScrol / 15}px, 0px`
        });

        $('.contact-wave img:nth-child(2)').css({
            'transform': `translate(-${waveScrol / 50}px, ${waveScrol / 40}px`
        });
    }
})