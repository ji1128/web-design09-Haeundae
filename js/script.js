$(document).ready(function () {

    //nav

    $('.top-nav ul li').hover(function () {
        $(this).find('.sub').stop().slideDown();
    }, function () {
        $(this).find('.sub').stop().slideUp();
    });


    //slide : fade In/out

    $('#slide ul li img').hide();

    // 모든 슬라이드 이미지 숨기기

    $('#slide ul li img:first').fadeIn();

    let img = 2;
    let num = 0;
    setInterval(function () {
        num = (num === img) ? 0 : num += 1;
        //-----------? 참일 때 값 : 거짓일 때

        $('#slide img').eq(num - 1).fadeOut();
        $('#slide img').eq(num).fadeIn();
    }, 3000);






    //공지사항 & 갤러리
    
    let tabBtn = $('#tab-btn > ul > li');
    let tabCont = $('#cont > div');

    tabBtn.click(function(){
        let target = $(this);
        let index = target.index();

        tabBtn.removeClass('active');
        target.addClass('active');

        tabCont.addClass('active-bg');
        tabCont.css('display', 'none');
        tabCont.eq(index).css('display', 'block');
    });




    //modal
    $('#open').click(function(){
        $('#modal').show();
    });
    $('#close').click(function(){
        $('#modal').hide();
    });




})