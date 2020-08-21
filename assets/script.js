// Detect click on the refresh button
$('.change').click(function(){
    
    // To select each color pane
    $('.color').each(function(){

        // Get a random hexadecimal string of length 6 for the color
        var colors = '#' + Math.random().toString(16).substr(2,6);

        // Apply the color to the color pane and change the hexcode
        $(this).css('background-color', colors);
        $(this).children('.hexcode').text(colors);
    });
    // To start the function as soon as the page opens
}).trigger('click');

// To copy the hexcode in the clipboard
$('.color').click(function(){
    var input = $("<input>");
    var color = $(this).children('.hexcode').text();
    $('body').append(input);
    input.val(color).select();
    document.execCommand('copy');
    input.remove();
    
    // To display the alert of hexcode copied
    $('.copyalert').fadeIn().delay(2000).fadeOut();
});