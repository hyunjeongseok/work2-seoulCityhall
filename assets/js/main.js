$(function(){


    /**
     * @뉴스및시민참여탭슬라이드
     * parent(부모) sibling(형제)
     * roof / slideToLoop
     * autoplay -> 자동재생
     * @disableOnInteraction :false : 조작 후 정지유무
     * return 돌아갈때마다 초기화 
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


    /**
     * @슬라이드플레이
     * e.preventDegault() -> a/sumbit태그 클릭 시, href링크로 이동되는걸 막아줌.
     * attr() -> 속성값 가져오기
     */
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
     * window.open -> 새창 열기
     * val() -> 양식의 값을 가져오거나 값을 설정하는 함수
     */

    $('#btnLang').click(function(){
        url=$('#langList').val();
        window.open(url)
    })



    /**
     * @서울시지원슬라이드
     * pagination custom -> 페이징 bullet css로 꾸밀 수 있음
     * autoplay.stop/start
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

    /**
     * .click() 단축키 -> jqclick
     */
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
     * @관련사이트메뉴
     * hasClass -> ()라는 클래스명을 가지고 있나?
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
 * @상단스크롤
 * scrollTop -> 선택한 요소의 스크롤바 수직 위치를 반환하거나 정함.
 * return -> 명령문. 함수 실행 종료 후, 주어진 값을 함수 호출 지점으로 반환.
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