// Fixed navbar on scroll
$(window).scroll(() => {
    let windScrol = this.scrollY; //get scroll value

    if(windScrol > 0) {
        $('.navbar-wrapper').addClass('bg-dark');
        $('.navbar-brand h1').addClass('gradient-color').removeClass('tx-shadow');
    } else {
        $('.navbar-wrapper').removeClass('bg-dark');
        $('.navbar-brand h1').removeClass('gradient-color').addClass('tx-shadow')
    }
});



// Humberger menu
$('.humberger-menu').click(() => {
    $('.humberger-popup').toggleClass('d-none');
    $('.humberger-menu').toggleClass('d-none');
})

$('.humberger-popup-list ul li:nth-child(4)').click(() => {
    $('.humberger-popup').toggleClass('d-none');
    $('.humberger-menu').toggleClass('d-none');
})
