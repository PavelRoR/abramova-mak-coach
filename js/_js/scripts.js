//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend owl.carousel.min.js
/*@prepros-prepend jquery.fancybox.min.js*/

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
                481: {
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