'use strict';
//share
   $('.Qz-shareBtn').click(function(){
          $('.window-share').animate({bottom:'0rem'},200);
          $('.window-bg').show();
   });
   $('.change-btn').click(function(){
          $('.window-share').animate({bottom:'-4rem'},200);
          $('.window-bg').hide();
   });
    
   //分享到威信
   $('.window-share li').eq(0).click(function(){
        console.log('分享到微信');
   });
    //分享到朋友
   $('.window-share li').eq(1).click(function(){
        console.log('分享到朋友圈');
    });
   //距下次活动开始的时间
   //var s=2805380;
   //var h=s%86400;
   //console.log(h);
   function toDouble(num){
      return num<10?'0'+num:num;
   }
   setInterval(function(){

   var oDate=new Date();
   //var s=oDate.getTime();
   var h=oDate.getHours();
   var m=oDate.getMinutes();
   var s=oDate.getSeconds();
   var str=toDouble(h)+':'+toDouble(m)+':'+toDouble(s);
   $('.time-over span').html(str);
   },1000);
  //