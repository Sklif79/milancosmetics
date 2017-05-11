$(document).ready(function () {

    searchHeader();

    lineTooltip();

    categoryFullHeight();

    resizeWindow();

    function resizeWindow() {
        $(window).resize(
            function () {
                categoryFullHeight();
                window.location.reload();
            }
        );
    }


    function categoryFullHeight() {
        if ($('.category').length) {
            var categoryHeight = $('div.wrapper').height() - $('nav.nav').height() - $('header.header').height();

            $('div.category-item').height(categoryHeight);
            console.log(categoryHeight);
        }
    }


    buttonUp();


    // $('a.modalbox').fancybox({
    //     closeBtn: true,
    //     padding: 0,
    //     helpers: {
    //         overlay: {
    //             css: {
    //                 'background': 'rgba(0,0,0,0.5)'
    //             }
    //         }
    //     }
    // });

    // $(".expo__item-news, .news-item__text").dotdotdot({
    //     ellipsis: "",
    //     tolerance: 1
    // });


    //************************** sliders *********************************
    $('.slider-index').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 4
        //         }
        //     },
        //
        //     {
        //         breakpoint: 690,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('.slider-news').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next-news"></div>',
        prevArrow: '<div class="slider-prev-news"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1378,
                settings: {
                    slidesToShow: 5
                }
            }
            //
            //     {
            //         breakpoint: 690,
            //         settings: {
            //             slidesToShow: 1
            //         }
            //     }
        ]
    });
});


//кнопка вверх
function buttonUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
    });
}

//панель поиска header
function searchHeader() {
    $('img.search-img').on('click', function () {
        $('form.search-form').toggleClass('show-search-form');
    });
}

//тултипы линеек продукции
function lineTooltip() {
    $('a.catalog-item-hidden__el-lnk').mouseenter(
        function () {
            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden__more').hide();
            $(this).next('.catalog-item-hidden__more').show();
            var hideEl = $(this).next('.catalog-item-hidden__more').outerHeight() + 25;
            $(this).next('.catalog-item-hidden__more').css({'top': '-' + hideEl + 'px'});
            console.log(hideEl);
        }
    );

    $('div.catalog-item, .catalog-item-hidden__more').mouseleave(
        function () {
            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden__more').hide();
        }
    );
}





