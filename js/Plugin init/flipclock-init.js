// FlipClock Plugin Initialization
var clock;
$(document).ready(function() {
    // Instantiate a counter
    clock = new FlipClock($('.clock'), 60, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true
    });    
});