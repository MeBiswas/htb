// Navbar Background Change 
var indexPageUrlS1 = 'http://mercury.promaticstechnologies.com/design/HTB/';
var indexPageUrlS2 = 'http://mercury.promaticstechnologies.com/design/HTB/index.html';
var indexPageUrlL1 = 'http://localhost/HTB/';
var indexPageUrlL2 = 'http://localhost/HTB/index.html';
var currentPageUrl = window.location.href;
// alert (currentPageUrl);
$(document).ready(function() {
    if ((currentPageUrl==indexPageUrlS1) || (currentPageUrl==indexPageUrlS2) || (currentPageUrl==indexPageUrlL1) || (currentPageUrl==indexPageUrlL2)) {
        var bannerHeight = $('.index-page-header-wrapper').outerHeight();
        $(window).scroll(function () {
            if ($(this).scrollTop() >= bannerHeight)
            {
                $('.navbar').addClass('background-color-black');
            } 
            else {
                $('.navbar').removeClass('background-color-black');
            }
        });
    }
});

//Logo Change
$(window).scroll(function() {
    var bannerHeight = $('.index-page-header-wrapper').outerHeight();
    if($(this).scrollTop() >= bannerHeight){
        $('#changeLogo').attr('src','images/logo-black-bg.png');
    }
    else {
        $('#changeLogo').attr('src','images/logo-white-bg.png');        
    }
});

// Dashboard Page Sidebar Toggle at width 992px
$(window).resize(function(){
    if($(window).width() < 992){
        $('.dashboard-siderbar-wrapper').hide();
        $('.dashboard-top-bar-ad-wrapper').css('width','100%');
        $('.dashboard-content-wrapper').css('width','100%');
        $('.hamburger-menu-wrapper').show();        
    }
    else {
        $('.dashboard-siderbar-wrapper').show();
        $('.dashboard-top-bar-ad-wrapper').css('width','80%');
        $('.dashboard-content-wrapper').css('width','80%');
        $('.dashboard-toggleable-sidebar-container').css('transform','translateX(-250px)');
        $('.hamburger-menu-wrapper').hide();
    } 
});

// Show Sidebar
$(document).ready(function(){
    $('.hamburger-menu-icon').on('click',function(){
        $('.dashboard-toggleable-sidebar-container').css('transform','translateX(0)');
    });
    $('.dashboard-sidebar-close-icn').on('click',function(){
        $('.dashboard-toggleable-sidebar-container').css('transform','translateX(-250px)');
    })
});

// Register Form Phone Optional Msg
// $(document).ready(function() {
//     $('.registerForm-optfield').hide();
//     $(document).on('focusin','#phoneNo',function(){
//         $('.registerForm-optfield').show();    
//     });
//     $(document).on('focusout','#phoneNo',function(){
//         $('.registerForm-optfield').hide();    
//     });  
// });

// myWebsite Page Website Opening Details
$(document).ready(function() {
    $('#websiteDetails').hide();
    $('.my-website-detail-link').on('click',function(){
        $('#websiteDetails').toggle();        
    });
});

// Edit Profile Page Image Change 
$('#imgOutput').hide();
var loadFile = function(event) {
    var output = document.getElementById('imgOutput');
    output.src = URL.createObjectURL(event.target.files[0]);
    $('#imgOutput').show();
    $('#prevImg').hide();
}

// Advertisement Page
$(document).ready(function() {   
    $('.puzzle-game-icon-container').show();
    $('.flip-clock-wrapper').hide();    
});

// Promote Your Website Page
$(document).ready(function() {

    $('.add-more-link-btn').on('click',function() {
        $('.promote-website-link-container:last').after('<div class="promote-website-link-container"><input type="text" class="form-control" placeholder="Add Website"></div>');
    });

    $('.promote-website-price-info-container').hide();
    $('.promote-website-campaign-options').on('change',function(){
        $('.promote-website-price-info-container').empty();
        if ( this.value == '20s') {
            $('.promote-website-price-info-container').show();
            $('.promote-website-price-info-container').append('<p class="campaign-price-information">Minimum price per visit: 8 TC</p><p class="campaign-price-information">Min/Avg/Max price for similar promotions: 8/10/14 TC</p><div class="price-info-inpt-container"><input class="price-info-inpt" type="text" placeholder="Offer Price per Visit"><label class="price-info-inpt">TC</label></div>');            
        }
        if ( this.value == '40s' ) {
            $('.promote-website-price-info-container').show();
            $('.promote-website-price-info-container').append('<p class="campaign-price-information">Minimum price per visit: 9 TC</p><p class="campaign-price-information">Min/Avg/Max price for similar promotions: 9/11/15 TC</p><div class="price-info-inpt-container"><input class="price-info-inpt" type="text" placeholder="Offer Price per Visit"><label class="price-info-inpt">TC</label></div>');     
        }
        if ( this.value == '60s' ) {
            $('.promote-website-price-info-container').show();
            $('.promote-website-price-info-container').append('<p class="campaign-price-information">Minimum price per visit: 10 TC</p><p class="campaign-price-information">MinimumMin/Avg/Max price for similar promotions: 10/12/16 TC</p><div class="price-info-inpt-container"><input class="price-info-inpt" type="text" placeholder="Offer Price per Visit"><label class="price-info-inpt">TC</label></div>');
        }
    });

    $('.prev-confg-choose-btn').on('click',function(){
        $(this).parents('tr').siblings('tr').fadeOut(1500);
    });
});

// Dashboard Page Toggleable Sidebar
// $(window).resize(function() {
//     if($(window).width() < 992) {
//         alert('width 991ps or less');
//     }
//     else {
//         alert('Not working');
//     }
// });