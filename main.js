
// Trigger >> Target
const triggers = document.querySelectorAll('[data-trigger]');
triggers.forEach(element => {
    element.onclick = trigger;
});

// Sliders
const sliders = document.querySelectorAll('.slick-slider');
sliders.forEach(element => {
    $(element).slick();
});

// Carousel
const carousel = document.querySelectorAll('.carousel');
carousel.forEach(element => {
    $(element).slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        // the magic
        responsive: [{

            breakpoint: 769,
            settings: {
            slidesToShow: 2,
            }

        }, {

            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }

        }]
    });
});

function trigger(){
    const target = document.querySelector('[data-target="' + this.dataset.trigger + '"]');

    if( this.closest('.tabs') && !this.closest('.row')){
        const tabs = this.closest('.tabs').querySelectorAll('.active');
        tabs.forEach(element => {
            element.classList.remove('active');
        })
    }

    this.classList.toggle('active');
    target.classList.toggle('active');
}