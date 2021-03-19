!function(){"use strict";function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e(document.images,1);this.img=n[0];var r=e(document.getElementsByClassName("wrapper"),1);this.parentDiv=r[0];var i=e(document.getElementsByClassName("gamestate"),1);this.gameStateDiv=i[0],this.setActive=this.setActive.bind(this),this.oldIndex=null}var r,i,a;return r=t,(i=[{key:"init",value:function(){this.img.parentElement.removeChild(this.img),this.createCells()}},{key:"createCells",value:function(){for(var e=0;e<16;e+=1){var t=document.createElement("div");this.parentDiv.appendChild(t)}}},{key:"setActive",value:function(){document.images[0]&&this.removeImg();var e=this.parentDiv.children,t=function(e){var t;do{t=Math.floor(16*Math.random())+0}while(e===t);return t}(this.oldIndex);this.oldIndex=t,e[t].appendChild(this.img)}},{key:"removeImg",value:function(){document.images[0].parentElement.removeChild(this.img)}},{key:"gameState",value:function(e,t){this.gameStateDiv.innerHTML="\n    <h3>".concat(t,"</h3>\n    Попал: <strong>").concat(e.vic,"</strong>, Промахнулся: <strong>").concat(e.loose,"</strong> \n    ")}}])&&n(r.prototype,i),a&&n(r,a),t}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gui=t,this.scores={vic:0,loose:0},this.checkTarget=this.checkTarget.bind(this)}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.gui.parentDiv.addEventListener("click",this.checkTarget),this.gui.setActive(),this.timerId=setInterval((function(){e.checkScores(!1)||(e.gui.gameState(e.scores,""),e.gui.setActive())}),1e3)}},{key:"checkScores",value:function(e){return this.scores.loose>=5||this.scores.vic>=5?(clearInterval(this.timerId),this.gui.parentDiv.removeEventListener("click",this.checkTarget),this.gui.gameState(this.scores,"Игра окончена"),!0):(e?this.scores.loose-=1:this.scores.loose+=1,!1)}},{key:"checkTarget",value:function(e){e.target===this.gui.img&&(this.scores.vic+=1,this.gui.removeImg(),this.checkScores(!0))}}])&&i(t.prototype,n),r&&i(t,r),e}(),o=new r;o.init(),new a(o).init()}();