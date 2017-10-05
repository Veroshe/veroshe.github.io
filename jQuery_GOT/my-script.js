$(document).ready(function() {
    $('#fullpage').fullpage( {
        sectionsColor: ['gray', '#457897', '#457897', '#C4D4EC'],
        anchors: ['first-page', '2nd-page', '3rd-page', '4rd-page'],
        menu: '#myMenu',
        loopHorizontal: false
    });
    $('.fade-img').hover(function(){
        $(this).fadeTo("slow",0.15,function(){
            $(this).siblings('[class="quote"]').fadeTo("slow",1);
        });

    },
        function() {
            $(this).siblings('[class="quote"]').fadeTo("fast", 0, function () {
                $(this).siblings('[class="fade-img"]').fadeTo("slow", 1);
            });
        }
    );
    $('#myMenu').hover(function(){
            $(this).css("display","initial");
        },
        function(){
            $(this).hide("slow");
        }
    );
    $("li").hover(function(){
            $temp = $(this).css("background-color");
            $(this).css("background-color", "#7BBAEE");
        },
        function(){
            $(this).css("background-color", $temp)
        }
    );
    $('#menuButton').hover(function(){
        $('#myMenu').show("slow")

    });


    $('#flipbook').turn({
        acceleration: true,
        display: 'double',
        duration: 1000,
        width: 600,
        height: 450
     });

    $('.info').click(function(){
        $(this).children('[class="show"]').slideToggle("slow");
    })
    .css({
        'width': ($('#george').width()/3 + 'px')
    });

   $('#info-panel').hover(function() {
        $('#george').css({
            'opacity': '0.5'
        });
        },
            function(){
                $('#george').css({
                    'opacity': '1'
            });
    });
   var clicks = 0;
    $('#wikipedia').click(function(){
        var url2 = "https://en.wikipedia.org/wiki/George_R._R._Martin";
        if(clicks === 0) {
            var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=George_R._R._Martin&callback=?";

            $(this).next().css('border-bottom-right-radius', '0');
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json; charset:utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {

                    var markup = data.parse.text["*"];
                    var blurb = $('<div></div>').html(markup);
                    blurb.find('a').each(function () {
                        $(this).replaceWith($(this).html());
                    });
                    blurb.find('sup').remove();
                    blurb.find('.mw-ext-cite-error').remove();

                    $('#article').html($(blurb).find('p'))
                        .append("<div><a href =\"http://en.wikipedia.org/wiki/George_R._R._Martin\"> Read more on Wikipedia.com </a></div>");

                },
                error: function (errorMessage) {
                    alert("Error!");
                }
            });
            ++clicks;
        }
        else {
            setTimeout(function(){
                $('#wikipedia').next().css('border-bottom-right-radius', '10px');
            clicks = 0;
        }, 400);
        }


    });





});
