$(document).ready(function () {

    $('.popup').on("click", "span.select-all", function () {
        $(this).parent().parent('.price-selection').find('.checkbox').prop('checked', true);
    });

    $('.popup').on("click", "span.reset-all", function () {
        $(this).parent().parent('.price-selection').find('.checkbox').prop('checked', false);
    });

    customPlaceholderInit();

    searchHeader();

    lineTooltip();

    categoryFullHeight('category');
    categoryFullHeight('special-offers');

    resizeWindow();

    $('.products-item__title').setMaxHeights();

    //отправить файл
    $(".label-wrap-file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });

    $('a.palette, a.modalbox').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.7)'
                }
            }
        }
    });

    function resizeWindow() {
        $(window).resize(
            function () {
                if ($('.category').length || $('.special-offers').length) {
                    window.location.reload();
                }
            }
        );
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
    $('div.slider-index').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true
    });

    $('div.partners-wrap').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        infinite: false
    });

    $('div.similar-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 4000
    });

    $('div.slider-news').slick({
        slidesToShow: 8,
        centerMode: true,
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
        ]
    });

    $('div.photo-page-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<div class="slider-next-news"></div>',
        prevArrow: '<div class="slider-prev-news"></div>',
        infinite: true,
        //autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.photo-page-slider__nav'
    });

    $('div.photo-page-slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<div class="slider-next-news"></div>',
        prevArrow: '<div class="slider-prev-news"></div>',
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        //autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.photo-page-slider'
    });

    $('div.products-aside-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // arrows: false,
        infinite: true,
        nextArrow: '<div class="slider-next-aside"></div>',
        prevArrow: '<div class="slider-prev-aside"></div>'
        // autoplay: true,
        // autoplaySpeed: 4000
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
            var pos = $(this).offset().left;
            var half = $('body').width() / 2;

            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden__more').hide();

            //смещение балуна, если он дальше середины
            if (pos > half) {
                $(this).next('.catalog-item-hidden__more').addClass('shift').show();
            } else {
                $(this).next('.catalog-item-hidden__more').show();
            }

            var hideEl = $(this).next('.catalog-item-hidden__more').outerHeight() + 25;
            $(this).next('.catalog-item-hidden__more').css({'top': '-' + hideEl + 'px'});
        }
    );

    $('div.catalog-item, .catalog-item-hidden__more').mouseleave(
        function () {
            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden__more').hide();
        }
    );
}

//максимальная высота
$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};

function categoryFullHeight(el) {
    console.log(el);
    if ($('.' + el).length) {
        var categoryHeight = $('div.wrapper').height() - $('nav.nav').height() - $('header.header').height();

        $('div.' + el + '-item').height(categoryHeight);
        console.log(categoryHeight);
    }
}

//инпуты
function customPlaceholderInit() {
    var els = $('.custom-placeholder-wrap');
    els.each(function () {
        $(this).on('click', clickHandler);
        $(this).find('input, textarea').on('focus', focusHandler);
    });

    textareaDetect();

    function textareaDetect() {
        els.each(function () {
            var textarea = $(this).find('textarea');
            if (textarea.length) {
                $(this).find('.custom-placeholder').addClass('textarea-custom-placeholder');
            }
        });
    }

    function clickHandler(e) {
        var el = findParent($(e.target), 'custom-placeholder-wrap'),
            input = el.find('input, textarea');
        el.addClass('custom-placeholder-active');
        input
            .focus()
            .focusout(function () {
                var val = $(this).val().trim();
                if (!val) {
                    el.removeClass('custom-placeholder-active');
                }
            });
    }

    function focusHandler(e) {
        var el = findParent($(e.target), 'custom-placeholder-wrap');
        el.addClass('custom-placeholder-active');
        $(e.target).focusout(function () {
            var val = $(this).val().trim();
            if (!val) {
                el.removeClass('custom-placeholder-active');
            }
        });
    }
}

function findParent(el, class_) {
    var parent = el.parent();
    if (parent.hasClass(class_)) {
        return parent;
    }
    else {
        return findParent(parent, class_);
    }
}





