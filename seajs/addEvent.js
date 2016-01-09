'use strict';
define(function(require,exports,module){
	exports.addEvent=function(obj,sEv,fn){
            if(obj.addEventListener){
	    		obj.addEventListener(sEv,fn,false)
	    	}else{
	    		obj.attachEvent('on'+sEv,fn)
	    	}
	};
});