$(function(){


    /**
     * parent sibling
     * roof / slideToLoop
     * autoplay 
     * @disableOnInteraction :false : 조작 후 정지유무
     * 돌아갈때마다 초기화 
     */

    

    $('.sc-slide .title').click(function (e) { 
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings('.group-slide').removeClass('active');

        slide1.slideToLoop(0);
        slide2.slideToLoop(0);

        slide1.autoplay.start()
        slide2.autoplay.start()

        $('.sc-slide .autoplay').removeClass('active')
    });


    const slide1 = new Swiper(".slide1 .swiper", {

        loop:true,

        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom:function(swiper, current, total){
                return `<span class="curr">${current}</span>/<span class="total">${total}</span>`;
            }
        },

        autoplay:{
            delay: 5000,
            disableOnInteraction:false,
        },
        
        navigation: {
        nextEl: ".next",
        prevEl: ".prev",

        },
    });

    const slide2 = new Swiper(".slide2 .swiper", {

        loop:true,

        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom:function(swiper, current, total){
                return `<span class="curr">${current}</span>/<span class="total">${total}</span>`;
            }
        },

        autoplay:{
            delay: 1000,
            disableOnInteraction:false,
        },
        
        navigation: {
        nextEl: ".next",
        prevEl: ".prev",

        },
    });


    $('.slide1 .autoplay').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active')
        
        if ($(this).hasClass('active')) {
            slide1.autoplay.start()
            $(this).attr('aria-label','자동슬라이드 정지');
        } else {
            slide1.autoplay.stop()
            $(this).attr('aria-label','자동슬라이드 적용');
        }
    });

    $('.slide2 .autoplay').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active')
        
        if ($(this).hasClass('active')) {
            slide2.autoplay.start()
            $(this).attr('aria-label','자동슬라이드 정지');
        } else {
            slide2.autoplay.stop()
            $(this).attr('aria-label','자동슬라이드 적용');
        }
    });




    /**
     * @언어선택
     * 
     * ----study----
     * @windpw.open
     * @attr
     * @val()
     */

    $('#btnLang').click(function(){
        url=$('#langList').val();
        window.open(url)
    })



    /**
     * @서울시지원슬라이드
     * 
     * ----study----
     * 커스텀
     * autoplay.stop/start
     * 
     */

    const supportSlide = new Swiper("#supportSlide", {

        slidesPerView:3,
        spaceBetween:43,
        loop:true,

        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom:function(swiper, current, total){
                return `<span class="curr">${current}</span>/<span class="total">${total}</span>`;
            }
        },

        autoplay:{
            delay: 3000,
        },
        
        navigation: {
        nextEl: ".next",
        prevEl: ".prev",

        },
    });

    // jqclick >> 단축키
    $('.sc-support .autoplay').click(function (e) { 
        e.preventDefault();
        $(this).hide().siblings('.autoplay').show();

        if ($(this).hasClass('stop')) {
            supportSlide.autoplay.stop();
        } else {
            supportSlide.autoplay.start();
        }
        
    });



    /**
     * 
     * 
     * 
     */
    $('.related-list .btn-nav').click(function (e) { 
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).siblings('.sub-area').stop().slideUp();
            $('.related-list .btn-nav').removeClass('active');
        } else {
            $('.sub-area').stop().slideUp();
            $(this).siblings('.sub-area').stop().slideDown();

            $('.related-list .btn-nav').removeClass('active');
            $(this).addClass('active');

        }
        
    });



/**
 * 스크롤
 * 
 */
    $(window).scroll(function(){
            
            if ($(this).scrollTop() > 0) {
                $('.btn-top').addClass('active');
            } else {
                $('.btn-top').removeClass('active');
            }
    })

        $('.btn-top').click(function(){
            $('html, body').animate({scrollTop : 0}, 400)
            return false;
        })





})