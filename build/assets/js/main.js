$(document).ready(function () {

    scrollMenu();

    tabsScroll();

    detailsInfo();

    if ($(document).width() < 641) {
        $('.products-promo p').liTextLength({
            length: 120,                                    //Видимое кол-во символов
            afterLength: '',                                //Текст после видимого содержания
            fullText: true,                                    //Добавить ссылку для отображения скрытого текста
            moreText: '<div class="more-title">Читать далее...</div>',                //Текст ссылки до показа скрытого содержания
            lessText: '<div class="more-title">Свернуть</div>'    //Текст ссылки после показа скрытого содержанияДобавить ссылку для отображения скрытого текста
        });

        $('div.action-more-item-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // dots: true,
            nextArrow: '<div class="slider-next"></div>',
            prevArrow: '<div class="slider-prev"></div>',
            arrows: true
        });
    }

    if ($(document).width() < 731) {
        $('div.more-news-block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // dots: true,
            nextArrow: '<div class="slider-next"></div>',
            prevArrow: '<div class="slider-prev"></div>',
            arrows: true
        });
    }

    spoilarBrand();

    mobileMenu();

    $('.product-item__info').setMaxHeights();
    $('.product-item__description').setMaxHeights();
    $('.catalog-item-wrap').setMaxHeights();

    cropText($('.aside-news__txt'), 300);
    cropText($('.catalog-item__description'), 300);

    checkUnccheck();

    customPlaceholderInit();

    searchHeader();

    lineTooltip();

    if ($(document).width() > 1301) {
        catalogShowHidden();

        categoryFullHeight('category');
        categoryFullHeight('special-offers');
    }

    hoverImages('div.partners-item');

    $('.products-item__title').setMaxHeights();

    //отправить файл
    $(".label-wrap-file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });

    $('a.palette, a.modalbox').fancybox({
        closeBtn: true,
        padding: 0,
        margin: [60, 14, 0, 14],
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.7)'
                }
            }
        }
    });

    buttonUp();

    //************************** sliders *********************************
    $('div.slider-index').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('div.partners-wrap').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6
                }
            },

            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
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
        // centerMode: true,
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
            },

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            },

            {
                breakpoint: 338,
                settings: {
                    slidesToShow: 1
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
        asNavFor: '.photo-page-slider',
        responsive: [
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
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

    if ($(document).width() > 1042) {
        $('div.select-brand-wrap').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: '<div class="slider-next-aside"></div>',
            prevArrow: '<div class="slider-prev-aside"></div>'
        });
    }


    //************************** style for android *********************************
    if ( $(document).width() < 680 && device.androidPhone() ) {

        $('head').append('<link href="assets/css/android.css" rel="stylesheet" type="text/css">');

    }

    //************************** swipe mobile menu *********************************
    if ( $(document).width() <= 1041 ) {
        swipeMove();
    }
    function swipeMove() {
        var topBeforeSwipe;

        $(document).swipe({
            //Generic swipe handler for all directions
            swipeLeft:function() {
                topBeforeSwipe = $(window).scrollTop();

                $('div.mobile-menu').addClass('show-menu');
                $('div.body-overlay').addClass('activity');
            },

            swipeRight:function() {
                $('div.mobile-menu').removeClass('show-menu');
                $('div.body-overlay').removeClass('activity');

                $('html, body').animate({scrollTop: topBeforeSwipe}, 0);
            },

            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 300
        });
    }



});


//кнопка вверх
function buttonUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#toTop').css({'display':'flex'});
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
    $('span.search-img').on('click', function () {
        $('form.search-form').toggleClass('show-search-form');
        $(this).hide();
    });

    $('.search-form__close').on('click', function () {
        $(this).parent('form.search-form').removeClass('show-search-form');
        $('span.search-img').fadeIn(300);
    });
}

//тултипы линеек продукции
function lineTooltip() {
    $('a.catalog-item-hidden__el-lnk').mouseenter(
        function () {
            var pos = $(this).offset().left;
            var half = $('body').width() / 2;

            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden-wrap').hide();

            //смещение балуна, если он дальше середины
            if (pos > half) {
                $(this).next('.catalog-item-hidden-wrap').addClass('shift').fadeIn(200);
            } else {
                $(this).next('.catalog-item-hidden-wrap').fadeIn(200);
            }

            var hideEl = $(this).next('.catalog-item-hidden-wrap').outerHeight();
            $(this).next('.catalog-item-hidden-wrap').css({'top': '-' + hideEl + 'px'});
        }
    );

    $('div.catalog-item, .catalog-item-hidden-wrap').mouseleave(
        function () {
            $('a.catalog-item-hidden__el-lnk').next('.catalog-item-hidden-wrap').hide();
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
    if ($('.' + el).length && $(document).width() > 640) {
        var categoryHeight;

        if ($(document).width() > 1041) {
            categoryHeight = $('div.wrapper').height() - $('nav.nav').height() - $('header.header').height();
        } else {
            categoryHeight = $('div.wrapper').height() - $('header.header').height();
        }


        $('div.' + el + '-item').height(categoryHeight);
    } else {
        return false;
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

//обрезка текста
function cropText(item, size) {
    if (item.length) {

        item.each(function () {
            var newsContent = $(this),
                newsText = newsContent.text();

            if (newsText.length > size) {
                newsContent.text(newsText.slice(0, size));
            }

        });
    }
}

// выбрать/отменить все input
function checkUnccheck() {
    $('.popup').on("click", "span.select-all", function () {
        $(this).parent().parent('.price-selection').find('.checkbox').prop('checked', true);
    });

    $('.popup').on("click", "span.reset-all", function () {
        $(this).parent().parent('.price-selection').find('.checkbox').prop('checked', false);
    });
}

//цветные изображения приховере
function hoverImages(el) {
    var newSrc, src, oldSrc;

    $('.partners-wrap').on('mouseenter', el, function () {
        newSrc = $(this).find('img').attr("data-src-hover");
        oldSrc = $(this).find('img').attr("src");
        src = $(this).find('img').attr("src", newSrc);
    });

    $('.partners-wrap').on('mouseleave', el, function () {
        $(this).find('img').attr("src", oldSrc);
    });
}

//ховеры в каталоге в карточке
function catalogShowHidden() {
    $('div.catalog-item-hidden').slideUp(0);
    $('div.catalog-item').mouseenter(function () {
        $(this).css({'z-index': '11'}).find('div.catalog-item-hidden').slideDown(100);
    });

    $('.catalog-item').mouseleave(function () {
        $(this).css({'z-index': '12'}).find('div.catalog-item-hidden').slideUp(100);
        var self = $(this);
        setTimeout(function () {
            self.css({'z-index': ''});
        }, 100);
    });
}

//окно реквизитов
function detailsInfo() {
    $('div.contacts-info').on('click', 'div.contacts-details span', function () {
        $(this).next().toggleClass('block');
        $(this).toggleClass('active');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest("div.contacts-details").length &&
            $("div.contacts-details__info").hasClass("block")) {

            $('div.contacts-details span').toggleClass('active');
            $("div.contacts-details__info").removeClass("block");
            e.stopPropagation();
            e.preventDefault();
        }
    });
}

// мобильное меню
function mobileMenu() {
    var topBeforeClick;

    $(document).on('click', 'div.header-mobile-ico', function () {
        topBeforeClick = $(window).scrollTop();

        $('div.mobile-menu').addClass('show-menu');
        $('div.body-overlay').addClass('activity');


        $(document).on('click', function (e) {
            if (
                !$(e.target).closest("div.mobile-menu").length
                && !$(e.target).closest('div.header-mobile-ico').length
                && $('div.mobile-menu').hasClass('show-menu')
            ) {

                $('div.mobile-menu').removeClass('show-menu');
                $('div.body-overlay').removeClass('activity');
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    $('div.mobile-menu-header__backward').on('click', function () {
        $('div.mobile-menu').removeClass('show-menu');
        $('div.body-overlay').removeClass('activity');

        $('html, body').animate({scrollTop: topBeforeClick}, 0);
    });
}

function spoilarBrand() {
    if ($(document).width() < 1042) {
        var heightBrandFull = $('.select-brand-wrapper').height();
        var heightBrand = $('.select-brand-item').outerHeight() + 2;


        $('.select-brand-wrapper').height(heightBrand);

        $('body').on('click', '.select-brand-more', function () {
            $('.select-brand-wrapper').toggleClass('active');


            if ($('.select-brand-wrapper').hasClass('active')) {
                $('.select-brand-wrapper').height(heightBrandFull);
            } else {
                $('.select-brand-wrapper').height(heightBrand);
            }
        });
    }
}

//анимашка верхних табов
function tabsScroll() {
    $('body').on('click', 'div.scroll-tabs', function () {
        var elemAnim = $(this).prev('div.nav-tabs-scroll-wrap'),

            animateOption = {
                duration: 500,
                easing: 'linear'
            },

            docWidth = $(document).width() - 50;

        elemAnim.toggleClass('active');
        $(this).toggleClass('active');

        var widthScroll = +elemAnim.width() - docWidth + 'px';

        if (elemAnim.hasClass('active')) {
            elemAnim.animate({'left': '-' + widthScroll}, animateOption);
        } else {
            elemAnim.animate({'left': '0'}, animateOption);
        }
    });
}


//плагин
jQuery.fn.liTextLength = function (options) {
    // настройки по умолчанию
    var o = jQuery.extend({
        length: 150,                                    //Видимое кол-во символов
        afterLength: '...',                                //Текст после видимого содержания
        fullText: true,                                    //Добавить ссылку для отображения скрытого текста
        moreText: '<br>полный&nbsp;текст',                //Текст ссылки до показа скрытого содержания
        lessText: '<br>скрыть&nbsp;полный&nbsp;текст'    //Текст ссылки после показа скрытого содержания
    }, options);
    return this.each(function () {
        var
            $el = $(this),
            elText = $.trim($el.text()),
            elLength = elText.length;
        if (elLength > o.length) {
            var
                textSlice = $.trim(elText.substr(0, o.length)),
                textSliced = $.trim(elText.substr(o.length));
            if (textSlice.length < o.length) {
                var
                    textVisible = textSlice,
                    textHidden = $.trim(elText.substr(o.length));
            } else {
                var
                    arrSlice = textSlice.split(' '),
                    popped = arrSlice.pop(),
                    textVisible = arrSlice.join(' ') + ' ',
                    textHidden = popped + textSliced + ' ';
            }
            ;
            var
                $elTextHidden = $('<div>').addClass('elTextHidden').html(textHidden),
                $afterLength = $('<div>').addClass('afterLength').html(o.afterLength + ' '),
                $more = $('<div>').addClass('more').html(o.moreText);
            $el.text(textVisible).append($afterLength).append($elTextHidden);
            var displayStyle = $elTextHidden.css('display');
            $elTextHidden.hide();
            if (o.fullText) {
                $el.append($more);
                $more.click(function () {
                    if ($elTextHidden.is(':hidden')) {
                        $elTextHidden.css({display: displayStyle});
                        $more.html(o.lessText);
                        $afterLength.hide();
                    } else {
                        $elTextHidden.hide();
                        $more.html(o.moreText);
                        $afterLength.show();
                    }
                    ;
                    return false;
                });
            } else {
                $elTextHidden.remove();
            }
        }
    });
};

function resizeWindow() {
    $(window).resize(
        function () {
            window.location.reload();
        }
    );
}

//нижний отступ в акциях
function actionMargin() {
    var actionMarginBottom = parseFloat($('.action-item').css('margin-left')) * 2 + 'px';

    $('.action-item').css({'margin-bottom':actionMarginBottom});
}

//скролл меню
function scrollMenu() {
    var nav = $('nav.nav');

    $(window).scroll(function() {
        if($(this).scrollTop() >= 119) {
            $('nav.nav').addClass('nav-fixed');
        }
        else{
            $('nav.nav').removeClass('nav-fixed');
        }
    });
}