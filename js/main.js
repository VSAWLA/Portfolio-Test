alert('Hello!');

$(function(){
    $('.visual__photos').slick({
        dots: true,
        arrows: false
    });
});

const button = document.querySelector('#footer__btn');
    button.addEventListener('click', function() {
        const content = document.querySelector('#bottom-content');
            content.classList.toggle('content-hidden');
});
