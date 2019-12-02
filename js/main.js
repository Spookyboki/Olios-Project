'use strict'

$('document').ready(function(){

    var hamburger = $('.hamburger');
    var rightMenu = $('.right-menu');

    hamburger.on('click',function(e){
        $(this).toggleClass('show');

        if($(this).hasClass('show')){
            rightMenu.css({
                width: '300px', 
                'transition-duration': '0.5s'});

            if ($(window).width() <= 767) {
                rightMenu.css({
                    width: '100%', 
                    'transition-duration': '0.5s'});
            }
        }

        else {
            rightMenu.css({
                width: '0', 
                'transition-duration': '0.1s'});
        }
    });

    var searchBox = $('.search-box');
    var sideMenuS = $('.side-menu');
    var search = $('.s-search');

    sideMenuS.find('.s').on('click',function(){
        $(this).toggleClass('blue');
    })

    search.on('click',function(){
        searchBox.fadeToggle('slow','linear');

    })

    var close = $('.close');
    var searchTxt = $('.search-txt');

    close.on('click',function(){
        searchTxt.val('');
    })

    var zoomIn = $('.s-plus');
    var zoomOut = $('.s-minus');
    var image = $('.image');

    function zoom() {
        var inc = 0;
        var width = 70;

        zoomIn.on('click',function(){
            inc = inc+1;
            width = width + 10;
            image.css({'width':width + '%'});
    
            if (inc > 2) {
                inc = 2;
                width = width-10;
            }
    
            return inc;
        })
    
        zoomOut.on('click',function(){
            inc = inc-1;
            width = width - 10;
            image.css({'width':width - 10 + '%'});
            
            if (inc <= -3) {
                inc = inc+1;
            }

            if (width = 70) {
                inc = 0;
                image.css({'width':70 + '%'});
            }
    
            return inc;
        })
    }
    $(zoom);

    var otherImg = $('.others');

    otherImg.each(function(){
        $(this).on('click',function(){
            var src = $(this).find('.other-img').attr('src');
            var title = $(this).find('.others-title').text();
            var text = $(this).find('p').text();
            $('.image').attr('src', src);
            $('.item-txt').text(text);
            $('.item-name').html(title);
        })
    })
});
