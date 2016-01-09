'use strict';
define(function(require,exports,module){
	var Ad=require('addwheel');
	exports.onload=function(str){
		var oDiv=document.querySelector(str);
        	Ad.addWheel(oDiv,function(dir){
                    if(dir){
                    	oDiv.style.height=oDiv.offsetHeight+5+'px';
                    }else{
                    	oDiv.style.height=oDiv.offsetHeight-5+'px';
                    }
        	})
	};
});