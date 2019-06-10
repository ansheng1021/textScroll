/*
* create by ansheng1021
* */
(function ($) {
    $.fn.textScroll = function (width,height,speed) {
        $(this).wrap('<marquee id="scrollWrap" loop="infinite" direction="up"></marquee>')
        if (width){
            if (width.toString().indexOf('px') >=0){
                $('#scrollWrap').attr('width',width)
            }else{
                width = width+'px'
                $('#scrollWrap').attr('width',width)
            }
            if (width == '100%'){
                $('#scrollWrap').attr('width','100%')
            }
        }else{
            $('#scrollWrap').attr('width','100%')
        }
        if (height){
            if (height.toString().indexOf('px') >=0){
                $('#scrollWrap').attr('height',height)
            }else{
                height = height+'px'
                $('#scrollWrap').attr('height',height)
            }
            if (height =='100%'){
                $('#scrollWrap').attr('height','100%')
            }
        }else{
            $('#scrollWrap').attr('height','100px')
        }
        if (speed){
            $('#scrollWrap').attr('scrolldelay',speed)
        }else{
            $('#scrollWrap').attr('scrolldelay',200)
        }
    }
})(jQuery)