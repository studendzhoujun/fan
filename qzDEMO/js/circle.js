'use strict';
    //分享参数
    var title='406惠购';
    var desc='活动描述描述';
    var imgUrl='';
    var link='https://www.baidu.com/';
	//判断登录状态
    var userId=21;
    function isLogin(fn){
            if(userId==0){  //未登录,先注销再调登录
                AppInterface.call('/common/logout',function(data){
                     if(data.success){
                         AppInterface.call('/common/login',function(data){
                              if(data.success){
                                    userId=data.data.userId;//登录成功返回userId，重写userId此时为登录状态
                                    storage.setCookie('userId',data.data.userId);
                                    storage.setCookie('token',data.data.token);
                                    fn&&fn();
                                }
                         })
                     }
                })
            }else{  //userId 有值
               fn&&fn();
            }
    }
    //显示弹层
	function showShare(){
        $('.window-share').animate({bottom:'0rem'},200);
        $('.window-bg').show();
        $('.change-btn').click(function(){
            $('.window-share').animate({bottom:'-4rem'},200);
            $('.window-bg').hide();
        });
    }
		  //分享到威信
           $('.window-share li').eq(0).click(function(){
                console.log('分享到微信')
                AppInterface.call('/common/share',{
                        type:'weixin',
                        title:title,
                        desc:desc,
                        imgUrl:Base64.encode(imgUrl),
                        link:Base64.encode(link)
                    },function(data){
                        if(data.success){
                            AppInterface.toast('分享成功');
                            $('.window-share').animate({bottom:'-4rem'},200);
                            $('.window-bg').hide();
                        }
                 });
           });
           //分享到朋友
         $('.window-share li').eq(1).click(function(){
                 console.log('分享到朋友圈')
                 AppInterface.call('/common/share',{
                        type:'pengyouquan',
                        title:title,
                        desc:desc,
                        imgUrl:Base64.encode(imgUrl),
                        link:Base64.encode(link)
                    },function(data){
                        if(data.success){
                            AppInterface.toast('分享成功');
                           $('.window-share').animate({bottom:'-4rem'},200);
                           $('.window-bg').hide();
                        }
                   });
            });
    //分享按钮点击登录直接分享；未登录调app登录;
    $('.Index-shareBtn').click(function(){
        isLogin(showShare);
    });
    //中间商品的点击调app内的商品详情页;
     $('.Index-foryou a').click(function(){
        console.log('aaa')
        var productid=$(this).attr('productid');
        var shopid=$(this).attr('shopid');
        var producturl=$(this).attr('producturl');
        AppInterface.call('/product/detail', {shopId: shopid, productId: productid});
    });
     //美易理财活动页
     $('.Index-active').click(function(){
        var url='https://www.baidu.com/';
        console.log('跳美易');
       AppInterface.call('/common/localJump', {url: Base64.encode(url)});
     });