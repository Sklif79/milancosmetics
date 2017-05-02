$(document).ready(function () {


    // validatePopups();

    // $('.expo__item-title').setMaxHeights();




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






});





//плагин обрезки текста
$(document).ready(function () {
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
                    $elTextHidden = $('<span>').addClass('elTextHidden').html(textHidden),
                    $afterLength = $('<span>').addClass('afterLength').html(o.afterLength + ' '),
                    $more = $('<span>').addClass('more').html(o.moreText);
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
                ;
            }
            ;
        });
    };

    // if ($(window).width() < 497) {
    //     //инициализация
    //     $('#tab-description').liTextLength({
    //         length: 597,                                    //Видимое кол-во символов
    //         afterLength: '...',                                //Текст после видимого содержания
    //         fullText: true,                                    //Добавить ссылку для отображения скрытого текста
    //         moreText: '<div class="description-more"><span>Подробнее</span></div>',                //Текст ссылки до показа скрытого содержания
    //         lessText: '<div class="description-more"><span>Свернуть</span></div>'    //Текст ссылки после показа скрытого содержания
    //     });
    // }

});


$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};

//валидатор формы попап
function validatePopups() {
    var myLanguage = {
        errorTitle: "Ошибка отправки формы!",
        requiredField: "Это обязательное поле",
        requiredFields: "Вы задали не все обязательные поля",
        badTime: "Вы задали некорректное время",
        badEmail: "Вы задали некорректный e-mail",
        badTelephone: "Вы задали некорректный номер телефона",
        badSecurityAnswer: "Вы задали некорректный ответ на секретный вопрос",
        badDate: "Вы задали некорректную дату",
        lengthBadStart: "Значение должно быть в диапазоне",
        lengthBadEnd: " символов",
        lengthTooLongStart: "Значение длинее, чем ",
        lengthTooShortStart: "Значение меньше, чем ",
        notConfirmed: "Введённые значения не могут быть подтверждены",
        badDomain: "Некорректное значение домена",
        badUrl: "Некорретный URL",
        badCustomVal: "Введённое значение неверно",
        andSpaces: " и пробелы ",
        badInt: "Значение - не число",
        badSecurityNumber: "Введённый защитный номер - неправильный",
        badUKVatAnswer: "Некорректный UK VAT номер",
        badStrength: "Пароль не достаточно надёжен",
        badNumberOfSelectedOptionsStart: "Вы должны выбрать как минимум ",
        badNumberOfSelectedOptionsEnd: " ответов",
        badAlphaNumeric: "Значение должно содержать только числа и буквы ",
        badAlphaNumericExtra: " и ",
        wrongFileSize: "Загружаемый файл слишком велик (максимальный размер %s)",
        wrongFileType: "Принимаются файлы следующих типов %s",
        groupCheckedRangeStart: "Выберите между ",
        groupCheckedTooFewStart: "Выберите как минимум ",
        groupCheckedTooManyStart: "Выберите максимум из ",
        groupCheckedEnd: " элемент(ов)",
        badCreditCard: "Номер кредитной карты некорректен",
        badCVV: "CVV номер некорректно",
        wrongFileDim: "Неверные размеры графического файла,",
        imageTooTall: "изображение не может быть уже чем",
        imageTooWide: "изображение не может быть шире чем",
        imageTooSmall: "изображение слишком мало",
        min: "минимум",
        max: "максимум",
        imageRatioNotAccepted: "Изображение с таким соотношением сторон не принимается",
        badBrazilTelephoneAnswer: "Введённый номер телефона неправильный",
        badBrazilCEPAnswer: "CEP неправильный",
        badBrazilCPFAnswer: "CPF неправильный"
    };

    $.validate({
        language: myLanguage
    });
}