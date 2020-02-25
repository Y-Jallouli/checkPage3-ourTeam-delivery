/****************************fullpage configuration******************************/
new fullpage('#fullPage',{
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3'],
    navigationTooltips: ['Home', 'about us', 'by'],
    showActiveTooltip: true,
    scroollingSpeed: 3000,
})

/****************************fullpage configuration******************************/


$(window).on("load", function(){
    $(".loader").fadeOut(1000);

});


  $(document).ready(function(){

    /*! Fades in page on load */
    $('#fullPage').css('display', 'none');
    $('#fullPage').fadeIn(800);
    
    });



/****************************filter our team******************************/
filter("all");

function filter(c) {
    var element = document.getElementsByClassName("mydiv");
    if (c != "all") {
        for (i = 0; i < element.length; i++) {
            if (!element[i].classList.contains(c)) {
                element[i].classList.add('dispnone')
            } else {
                if (element[i].classList.contains('dispnone')) {
                    element[i].classList.remove('dispnone')
                }
            }
        }
    } else {
        for (i = 0; i < element.length; i++) {
            if (element[i].classList.contains('dispnone')) {
                element[i].classList.remove('dispnone');
            }
        }
    }
}