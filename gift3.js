function animateWord(index) {

    let words = document.querySelectorAll('.words');
    let word = document.querySelectorAll('.word');

    if (index < word.length - 1) {
        $(`#words${index + 1}`).css('border-right', '2px solid black').addClass('doiMauChu').one('animationend', function () {
            $(`#words${index + 1}`).removeClass('doiMauChu').css({
                'border-right': '0px solid black',
                'width': '100%',
                'animation': 'none'
            });

            // Gọi hàm animateWord cho phần tử tiếp theo
            animateWord(index + 1);
        });
    }
    else {
        $(`#words${index + 1}`).css('border-right', '2px solid black').addClass('doiMauChu').one('animationend', function () {
            $(`#words${index + 1}`).removeClass('doiMauChu').css({
                'border-right': '0px solid black',
                'width': '100%',
                'animation': 'none',
                'overflow': 'visible'
            });

            $('#arrow').css('display', 'block');

            // Gọi hàm animateWord cho phần tử tiếp theo
            animateWord(index + 1);
        });
    }
}

window.onload = function () {

    $(".candles").click(function () {
        var audio = document.getElementById("backgroundMusic");
        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "top": -90, "opacity": 1 }, "fast");

        audio.pause();
    });

    let words = document.querySelectorAll('.words');
    let word = document.querySelectorAll('.word');

    $('.open').click(function () {

        var audio = document.getElementById("backgroundMusic");
        audio.volume = 0.1;
        audio.play();

        $('.lid.one').css({
            'transform': 'rotateX(90deg)',
            'transition': '0.5s',
            'z-index': '3'
        });
        $('.letter').css({
            'transform': 'translateY(-50px)',
            'transition': '0.5s',
            'transition-delay': '0.5s'
        });

        $('#letter').click(function () {
            $(this).css('pointer-events', 'none');
            $('.open').addClass('fadeIn').on('animationend', function () {
                $(this).removeClass('fadeIn').addClass('hidden');
                $('.envelope').addClass('fadeIn').on('animationend', function () {
                    $(this).removeClass('fadeIn').addClass('hidden');
                    $('.wrapper').css('background-color', 'transparent');
                    setTimeout(function () {
                        $('#letter').addClass('fadeIn').on('animationend', function () {
                            $(this).removeClass('fadeIn').addClass('hidden');
                            setTimeout(function () {
                                $('.wrapper').css('display','none');
                                $('#myLetter').removeClass('hidden').addClass('leftToRight').on('animationend', function () {
                                    $(this).removeClass('leftToRight');
                    
                                        $('#myLetter p').removeClass('hidden');
                                        // for (let x = 0; x < word.length; x++) {

                                        //     $(`#words${x + 1}`).addClass('doiMauChu').one('animationend', function () {


                                        //         $(this).removeClass('doiMauChu').css({
                                        //             'border-right': '0px solid black',
                                        //             'width': '100%',
                                        //             'animation': 'none'

                                        //         });


                                        //     });
                                        // }

                                        $('#myLetter p').removeClass('hidden');

                                      
    
                                        // Bắt đầu animation cho phần tử đầu tiên
                                        animateWord(0);
                                        $('#words1').css('border-right', '0px solid black');


            



                                });
                            }, 2000);
                        })
                    }, 1500)
                });
            })
        });

    });




    $('#arrow').on('mouseenter', function () {
        $('#myLetter').addClass('tanHinhChill').on('animationend', function () {
            $(this).removeClass('tanHinhChill');
            $(this).css('opacity', '0.5');
        });
    });

    $('#arrow').on('mouseleave', function () {
        // $('#myLetter').addClass('tanHinhChill1').on('animationend', function () {
        //     $(this).removeClass('tanHinhChill1');
        //     $(this).css('opacity', '1');
        // });
        $('#myLetter').css('opacity', '1');
    });

    $('#arrow').on('click', function () {

        $('#myLetter').addClass('fadeIn').on('animationend', function () {

            $(this).removeClass('fadeIn').addClass('hidden');
            $('#birthday-cake').css('display', 'block').addClass('fadeOut').on('animationend', function () {
                $(this).removeClass('fadeOut').css({
                    'display': 'block',
                    'opacity': '1'
                })
            });
        });
    })

}