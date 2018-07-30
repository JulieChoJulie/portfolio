$(document).ready(function(){
    $('.animated-icon3').click(function(){
        $(this).toggleClass('open');
    });
});

$(document).ready(function () {

    setTimeout(addAnimation, 500);
    setTimeout(addAnimationForTerminal, 1500);
    setTimeout(function (){
        var typed = new Typed(".intro", {
            strings: [
                "", "Hello, World!"
            ],
            typeSpeed: 50,
            backSpeed: 25,
            cursorChar: '█',
            contentType: 'text',
            onComplete: function() {
                return setTimeout(function(){
                    return $('.intro').siblings('.typed-cursor').hide();
                }, 400);
            }
        });

    }, 3000);

    setTimeout(function(){
        $('.second-sentence').show();
        writeNextSentence();
    }, 6000);

});

function addAnimation () {
    $('.clicking-terminal').addClass('wobble');
}
function removeClass (input) {
    $('.clicking-terminal').removeClass(input);
}
function addAnimationForTerminal () {
    $('.clicking-terminal').addClass('flipOutY');
    setTimeout(function () {
        $('.clicking-terminal').hide();
        $('.jumbotron').show();
        $('.jumbotron').addClass('animated flipInY');
    }, 800)

}



function writeNextSentence(){
    var typedNext = new Typed(".intro-second", {
        strings: ["", "I am Julie Cho . . ", "I am a Full Stack Web Developer!"],
        smartBackspace: true,
        typeSpeed: 50,
        backSpeed: 25,
        showCursor: true,
        cursorChar: '█',
    });
}