$(".project").mouseover(function(){
    $(this).children("span").css('color', 'red');
    $(this).find('img').css('opacity', '0.7');
});
$(".project").mouseout(function(){
    $(this).children("span").css('color', 'black');
    $(this).find('img').css('opacity', '1');
});
