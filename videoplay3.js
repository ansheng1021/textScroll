var w="100%";
var h="200";
function bb(){

}

function aa(){
    var content ='';
    var url2;

    //判断是否手机浏览
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){
        //window.location.href=页面地址;
        if(url.indexOf('&hhxtvs.com')>0 || url.indexOf('&.mp4')>0 || url.indexOf('&.flv')>0){
            url2=url.split('&');
            content += '<video controls="controls" width='+w+' height='+h+'><source src="'+url2[0]+'" type="video/mp4" /></video>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.mp4')>0 || url.indexOf('.flv')>0){
            content += '<video controls="controls" width='+w+' height='+h+'><source src="'+url+'" type="video/mp4" /></video>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('imgs.letv.com')>0 || url.indexOf('c0.letv.com')>0){
            url2=url.split('id=');
            url2=url2[1].split('&');
            content += '<IFRAME src="http://minisite.letv.com/tuiguang/index.shtml?vid='+url2[0]+'&autoplay=0" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('youku.com/embed/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('youku.com/player.php/')>0){
            url2=url.split('/');
            content += '<IFRAME src="http://player.youku.com/embed/'+url2[url2.length-2]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.m3u8')>0){
            url2=url.split('/');
            content += '<IFRAME src="http://vod.mumuhd.com/?url='+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('pptv.com/iframe/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('video.qiyi.com')>0){
            url2=url.split('/');
            url3=url.split('tvId=');
            url3=url3[1].split('-');
            content += '<IFRAME src="http://m.iqiyi.com/openplay.html?save_type=1&vid='+url2[3]+'&tvId='+url3[0]+'" frameBorder=0 width='+w+' height='+h+' allowfullscreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('video.iqiyi.com')>0){
            url2=url.split('/');
            url3=url.split('tvId=');
            url3=url3[1].split('-');
            content += '<IFRAME src="http://m.iqiyi.com/openplay.html?save_type=1&vid='+url2[3]+'&tvId='+url3[0]+'" frameBorder=0 width='+w+' height='+h+' allowfullscreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('sohu.com/my/')>0){
            url2=url.split('id=');
            url2=url2[1].split('&');
            content += '<IFRAME src="http://tv.sohu.com/upload/static/share/share_play.html#'+url2[0]+'_9058045_0_9001_0" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('vrs.sohu.com')>0){
            url2=url.split('/');
            content += '<IFRAME src="http://tv.sohu.com/upload/static/share/share_play.html#'+url2[3]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('video.qq.com')>0 || url.indexOf('imgcache.qq.com')>0){
            url2=url.split('vid=');
            url2=url2[1].split('&');
            content += '<IFRAME src="http://v.qq.com/iframe/player.html?vid='+url2[0]+'&auto=0" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('/iframe/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('hunantv.com')>0 || url.indexOf('mgtv.com')>0){
            url2=url.split('video_id=');
            url2=url2[1].split('&');
            content += '<video controls="controls" width='+w+' height='+h+'><source src="http://v.9le8.com/api/mgm3.php?url='+url2[0]+'" type="video/mp4" /></video>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.56.com')>0){
            url2=url.split('_');
            url2=url2[1].split('.swf');
            content += '<IFRAME src="http://www.56.com/iframe/'+url2[0]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('aixifan.com')>0){
            url2=url.split('vid=');
            url2=url2[1].split('&');
            content += '<a target="_blank" href="http://m.acfun.cn/ykplayer?date=undefined#vid='+url2[0]+'"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('hdslb.com')>0){
            url2=url.split('aid=');
            url2=url2[1].split('&');
            content += '<a target="_blank" href="http://m.bilibili.com/video/av'+url2[0]+'.html"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('yinyuetai.com')>0){
            url2=url.split('/');
            content += '<video controls="controls" width='+w+' height='+h+'><source src="http://v.9le8.com/api/yytm4.php?url='+url2[url2.length-2]+'" type="video/mp4" /></video>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('xiyou.cntv.cn')>0){
            url2=url.split('/');
            url2=url2[3].split('.');
            content += '<IFRAME src="http://static.xiyou.cctv.com/html/iframe.html?id='+url2[0]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('player.cntv.cn')>0){
            url2=url.split('videoCenterId=');
            content += '<video controls="controls" width='+w+' height='+h+'><source src="http://cntv.hls.cdn.myqcloud.com/asp/hls/main/0303000a/3/default/'+url2[1]+'/main.m3u8?maxbr=2048" type="video/mp4" /></video>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('m1905.com/v')>0){
            url2=url.split('/');
            url2=url2[url2.length-1].split('_');
            content += '<a target="_blank" href="http://www.1905.com/vod/play/'+url2[0]+'.shtml"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('#.php')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.html')>0 || url.indexOf('.shtml')>0){
            url2=url.split('/');
            content += '<a target="_blank" href="'+url+'"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else{
            content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" ></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return;
        }
    }

    else{
        if(url.indexOf('youku.com/player.php/')>0){
            url2=url.split('/');
            content += '<IFRAME src="http://player.youku.com/embed/'+url2[url2.length-2]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('youku.com/embed/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('pptv.com/iframe/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('video.sina.com.cn')>0){
            url2=url.split('vid=');
            url2=url2[1].split('_');
            content += '<embed src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return ;
        }
        else if(url.indexOf('/iframe/')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no allowFullScreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('hxtvs.com')>0){
            url2=url.split('/');
            content += '<EMBED src="http://www.yakuhd.com/Public/swf/FLVPlay.swf?vcastr_file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.56.com')>0){
            url2=url.split('_');
            url2=url2[1].split('.swf');
            content += '<EMBED src="http://tv.sohu.com/upload/swf/20160323/PlayerShell.swf?vid56='+url2[0]+'&autoplay=true" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('imgs.letv.com')>0){
            url2=url.split('?');
            content += '<EMBED src="http://img1.c0.letv.com/ptv/player/swfPlayer.swf?'+url2[1]+'&autoplay=1&isPlayerAd=0" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return;
        }
        else if(url.indexOf('video.qiyi.com')>0){
            url2=url.split('/');
            url3=url.split('tvId=');
            url3=url3[1].split('-');
            content += '<IFRAME src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid='+url2[3]+'&tvId='+url3[0]+'" frameBorder=0 width='+w+' height='+h+' allowfullscreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('video.iqiyi.com')>0){
            url2=url.split('/');
            url3=url.split('tvId=');
            url3=url3[1].split('-');
            content += '<IFRAME src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid='+url2[3]+'&tvId='+url3[0]+'" frameBorder=0 width='+w+' height='+h+' allowfullscreen="true"></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('hunantv.com')>0 || url.indexOf('mgtv.com')>0){
            url2=url.split('/');
            content += '<a target="_blank" href="'+url+'"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('m1905.com/v')>0){
            url2=url.split('/');
            url2=url2[url2.length-1].split('_');
            content += '<a target="_blank" href="http://www.1905.com/vod/play/'+url2[0]+'.shtml"><img border="0" src="http://p1.9le8.com/Public/upload/blog/2016/07/24/579445d730f16.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('aixifan.com')>0){
            url2=url.split('vid=');
            url2=url2[1].split('&');
            content += '<IFRAME src="http://m.acfun.tv/ykplayer?date=undefined#vid='+url2[0]+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.flv')>0){
            url2=url.split('/');
            content += '<EMBED src="http://www.yakuhd.com/Public/swf/FLVPlay.swf?vcastr_file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.mp4')>0){
            url2=url.split('/');
            content += '<EMBED src="http://www.yakuhd.com/Public/swf/FLVPlay.swf?vcastr_file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('#.php')>0){
            url2=url.split('/');
            content += '<IFRAME src="'+url+'" frameBorder=0 width='+w+' height='+h+' name=DhpPlayer scrolling=no></IFRAME>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.html')>0 || url.indexOf('.shtml')>0){
            url2=url.split('/');
            content += '<a target="_blank" href="'+url+'"><img border="0" src="http://p1.yakuhd.com/Public/upload/blog/2016/07/24/57943cb9369be.jpg" width='+w+' height='+h+'></a>';
            document.getElementById("playlist").innerHTML=content;
            return  ;
        }
        else if(url.indexOf('.com')>0){
            url2=url.split('/');
            content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return;
        }
        else if(url.indexOf('.cn')>0){
            url2=url.split('/');
            content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return;
        }
        else if(url.indexOf('yaku_check')>0){
            url2=url.split('/');
            content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" wmode="transparent"></EMBED>';
            document.getElementById("playlist").innerHTML=content;
            return;
        }
        else{
            content = noswf(url);
            document.getElementById("playlist").innerHTML=content;
            return;
        }

    }
}

function noswf(url){
    var conte;

    conte += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never"></EMBED>';
    //alert(conte);
    return conte;
}