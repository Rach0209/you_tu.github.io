$(function(){
    ////////////////////////////////////////

    $('.top_banner i').on('click', function(){
        $('.top_banner').slideUp(1500);
    })


    //순서가 중요하다. init reInit 을 사용해서 처음 시작부터 적용되게함.글자색 바꾸기//
    $('.main_slider').on('init reInit afterChange', function(){
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on')
    })


    //슬라이더와 슬라이더 옵션//
    $('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    });

    // //슬라이더 활성화 시 .on 클래스 붙이기//
    // $('.main_slider').on('afterChange', function(){
    // let current = $('.slick-current');
    // current.addClass('on').siblings().removeClass('on')
    // })



    ///////////////////////////////////////
})