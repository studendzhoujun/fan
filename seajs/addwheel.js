'use strict';
define(function(require,exports,module){
	  var Bd=require('addEvent');
	exports.addWheel=function(obj,fn){
                function fnwheel(ev){
	    		var oEvent=ev||event;
	    		var beok=true;
	    		beok=oEvent.wheelDelta?oEvent.wheelDelta<1:oEvent.detail>1;
	    		fn&&fn(beok);
	    		oEvent.preventDefault&&oEvent.preventDefault();
	    		return false;
	    	   };
	    	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
                  Bd.addEvent(obj,'DOMMouseScroll',fnwheel)
	    	}else{
	    		  Bd.addEvent(obj,'mousewheel',fnwheel)
	    	}
	};
});