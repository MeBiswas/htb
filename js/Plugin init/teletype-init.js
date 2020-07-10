// Teletype Initialization
$(document).ready(function(){    
    var move_text = ['To Earn Money.','Or','Start Promoting Your Own After Registering Your Account.'];    
    $( '.type-text' ).teletype( {
        text: move_text,
        typeDelay: 5,
        backDelay: 10,
        loop: 0,
        smoothBlink: true
    } );
});