
 
$(window).resize(function() {
    if ($(window).width()>720) {
        $(".navbar .navbar-menus").css('display','inline-block');
     }
     else {
        $(".navbar .navbar-menus").css('display','none');
        $("#toggle").removeClass('on');
        alert
     }
});
$("#toggle").click(function() {
    $(this).toggleClass("on");
    $(".navbar .navbar-menus").slideToggle();
});