 $(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });
    $(".menu").click(function () {
        $(".wrapper").toggleClass("slim");
        $(".navi").toggleClass("visible");
        $(".person").toggleClass("visible");
        $("header ul").toggleClass("visible");
    });    

	$(".navi li").click(function () {
		$(".navi li").removeClass("select");
        $(this).toggleClass("select");
    }); 
    $('.switching span').click(function(){
        var span = $(this);
        $('.switching span, .chart-rates, .current-rate').removeClass('active');
        span.addClass('active');
        if(span.hasClass('btc'))
            $('#chart-btc, #rate-btc').addClass('active');
        else
            $('#chart-rm, #rate-rm').addClass('active');
    });
    $(".back a").click(function () {
        $("#modal-auth").toggleClass("visible");
    });     
    $("#modal-auth i.close").click(function () {
        $("#modal-auth").removeClass("visible");
    });     
 });