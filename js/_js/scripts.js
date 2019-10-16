//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend flipclock.min.js
//@prepros-prepend owl.carousel.min.js
/*@prepros-prepend jquery.fancybox.min.js*/

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });

    $(function () {
        /* Таймер */
        var clock;
        var futureDate = new Date("October 18, 2019 00:00 AM UTC+3");
        var currentDate = new Date();
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        function dayDiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24);
        }
        if (dayDiff(currentDate, futureDate) < 100) {
            $('.clock').addClass('twoDayDigits');
        } else {
            $('.clock').addClass('threeDayDigits');
        }
        if (diff < 0) {
            diff = 0;
            $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3985&clean=true&lg=ru');
            $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3988&clean=true&lg=ru');
            $('.prepayment, .timer,.cost-sale, .cost-today').remove();
            $('.cost-full span').css('textDecoration', 'none');
        }
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'ru',
            callbacks: {
                stop: function () {
                    $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3985&clean=true&lg=ru');
                    $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3988&clean=true&lg=ru');
                    $('.prepayment, .timer,.cost-sale, .cost-today').remove();
                    $('.cost-full span').css('textDecoration', 'none');
                }
            },
        });
    });
    $(function () {
        $('#video-revs ').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ["<", ">"],
            dots: true,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    });
    /* Видео */
    $(".video-wrapper img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&autoplay=1&rel=0" allowfullscreen></iframe>')
    });
    $(function () {
        $('#video-revs .owl-prev, #video-revs .owl-next').click(function () {
            $('.video-wrapper-revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
            });
            $(".video-rev-img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
        });
    });
    /*Конец документа*/
});