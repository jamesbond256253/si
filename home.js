(function(document, window, $){
    $(document).ready(function(){

        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            $header = $('header');

        function headerAnchors(){
            var pageDirection = '';
            var thisElement;
            var timeout;
            $header.find('nav li a').click(function(event){
                event.preventDefault();
                $('.cube').removeClass('reverse-' + pageDirection);
                thisElement = $(this);
                pageDirection = thisElement.data('direction');
                thisElement.parent().addClass('active').siblings().removeClass('active');
                $('.cube').addClass('reverse-' + pageDirection);

                $header.addClass('go-out');
                $('#wrap').addClass('active');
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    $header.removeClass('go-out');
                    $('#wrap').removeClass('active');
                }, 1000);
            });
        }
        headerAnchors();
        
        $(window).resize(function(){
            windowWidth = $(window).width();
            windowHeight = $(window).height();
        });
    });
})(document, window, jQuery);
