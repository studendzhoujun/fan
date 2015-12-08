'use strict';
function json2url(json){
	var arr=[];
	for(var name in json){
		arr.push(name+'='+json[name])
	};
	return arr.join('&')
}

function ajax(json){
	if(!json.url)return;
    json.date=json.date||{};
    json.type=json.type||'get';

    if(window.XMLHttpRequest){
    	var Ajax=new XMLHttpRequest();
    }else{
    	var Ajax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    switch(json.type.toLowerCase()){
    	case 'get':
    Ajax.open('GET',json.url+'?'+json2url(json.date),true);
    Ajax.send();
        break;
        case 'post':
    Ajax.open('POST',json.url,true);
    Ajax.setRequestHeader('content-type','application/x-www-form-urlencoded')
    Ajax.send(json2url(json.date));
    break;
  }

    Ajax.onreadystatechange=function(){
    	if(Ajax.readyState==4){
    		if(Ajax.status>=200&&Ajax.status<=300||Ajax.status==304){
    			json.success&&json.success(Ajax.responseText);
    		}else{
    			json.error&&json.error(Ajax.status)
    		}
    	}
    };


}