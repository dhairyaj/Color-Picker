$('.change').click(function(){
    $('.color').each(function(){
        var colors = '#' + Math.random().toString(16).substr(2,6);
        $(this).css('background-color', colors);
        $(this).children('.hexcode').text(colors);
    });
}).trigger('click');

$('.color').click(function(){
    var input = $("<input>");
    var color = $(this).children('.hexcode').text();
    $('body').append(input);
    input.val(color).select();
    document.execCommand('copy');
    input.remove();
    $('.copyalert').fadeIn().delay(2000).fadeOut();
});