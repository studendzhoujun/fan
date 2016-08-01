'use strict';
//share
var name='';
   $('.Qz-shareBtn').click(function(){
        if(index==null||!name){
          console.log('请选择性别or输入正确的姓名字符');
        }else{
          console.log(index);
          location.href='index.html?index='+index+'&name='+name;
        }
   });
  var index=null;
 $('.for-you-quanziBtn p').click(function(){
       var _this=$(this);
       index=$(this).index();
       var sibling=_this.siblings();
       switch(index){
            case 0:
                _this.addClass('on1');
                sibling.removeClass('on2');
            break;
            case 1:
                _this.addClass('on2');
                sibling.removeClass('on1');
            break;
       }
       //console.log(index);
 });

  //user-scroll
      var oUl=document.querySelector('ul');
      oUl.innerHTML+=oUl.innerHTML;
      var len=oUl.children.length-1;
      console.log(len)
      var i=1;
      oUl.style.WebkitTransition='1s all ease';
    function move(){
         oUl.style.WebkitTransform='translateY('+(-23*i)+'px)';
           i++;
       // console.log(i+'clientLeft='+oUl.clientLeft)
        if(i==len){
            i=2;
            oUl.style.WebkitTransition='';
            oUl.style.WebkitTransform='translateY(0px)';
            //console.log(oUl.clientLeft+'=1')
            var left = oUl.clientLeft;
            //console.log(oUl.clientLeft+'=2')
            oUl.style.WebkitTransition='1s all ease';
            oUl.style.WebkitTransform='translateY(-23px)';

           }else{
            oUl.style.WebkitTransition='1s all ease';
           }
        }

        setInterval(move,1000);