(function(t){function e(e){for(var a,o,n=e[0],c=e[1],d=e[2],u=0,h=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var c=r[n];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),i=r.n(a);i.a},"13b4":function(t,e,r){},"1e0d":function(t,e,r){"use strict";var a=r("eda9"),i=r.n(a);i.a},"1eb1":function(t,e,r){"use strict";var a=r("13b4"),i=r.n(a);i.a},5236:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ScoreScreen",{directives:[{name:"show",rawName:"v-show",value:1==t.gameOver,expression:"gameOver == true"}],attrs:{timer:t.timer,pictureNumber:t.pictureNumber,playerName:t.playerName},on:{saveScore:function(e){return t.saveScore(e)},resetGame:function(e){return t.resetGame()}}}),r("InfoPanel",{attrs:{pictureNumber:t.pictureNumber,pictureFolder:t.pictureFolder,portrait1:t.portrait1,portrait2:t.portrait2,portrait3:t.portrait3,timer:t.timer}}),r("div",{directives:[{name:"show",rawName:"v-show",value:0==t.pictureNumber,expression:"pictureNumber == 0"}],staticClass:"picture-buttons"},[r("div",[r("button",{staticClass:"picture-select",staticStyle:{color:"gold"},on:{click:function(e){t.pictureNumber=1,t.pictureFolder="star",t.inGame=!0,t.startGame()}}},[t._v("Star Wars ")]),r("ol",t._l(t.scores1.slice(0,5),(function(e){return r("li",{key:e.Name},[t._v(" "+t._s(e.name)+" - "+t._s(e.score)+" ")])})),0)]),r("div",[r("button",{staticClass:"picture-select",staticStyle:{color:"red"},on:{click:function(e){t.pictureNumber=2,t.pictureFolder="wedding",t.inGame=!0,t.startGame()}}},[t._v("Wedding ")]),r("ol",t._l(t.scores2.slice(0,5),(function(e){return r("li",{key:e.name},[t._v(" "+t._s(e.name)+" - "+t._s(e.score)+" ")])})),0)]),r("div",[r("button",{staticClass:"picture-select",staticStyle:{color:"lightgreen"},on:{click:function(e){t.pictureNumber=3,t.pictureFolder="waldo",t.inGame=!0,t.startGame()}}},[t._v("Waldo ")]),r("ol",t._l(t.scores3.slice(0,5),(function(e){return r("li",{key:e.name},[t._v(" "+t._s(e.name)+" - "+t._s(e.score)+" ")])})),0)])]),r("Star",{directives:[{name:"show",rawName:"v-show",value:1==t.pictureNumber,expression:"pictureNumber == 1"}],attrs:{portrait1:t.portrait1,portrait2:t.portrait2,portrait3:t.portrait3,data1:t.data1,gameOver:t.gameOver},on:{setGameOver:function(e){return t.updateGameOver(e)}}}),r("Wedding",{directives:[{name:"show",rawName:"v-show",value:2==t.pictureNumber,expression:"pictureNumber == 2"}],attrs:{portrait1:t.portrait1,portrait2:t.portrait2,portrait3:t.portrait3,data2:t.data2,gameOver:t.gameOver},on:{setGameOver:function(e){return t.updateGameOver(e)}}}),r("Waldo",{directives:[{name:"show",rawName:"v-show",value:3==t.pictureNumber,expression:"pictureNumber == 3"}],attrs:{portrait1:t.portrait1,portrait2:t.portrait2,portrait3:t.portrait3,data3:t.data3,gameOver:t.gameOver},on:{setGameOver:function(e){return t.updateGameOver(e)}}})],1)},s=[],o=(r("4160"),r("159b"),r("8aa5")),n=r.n(o),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info-panel"},[r("div",{directives:[{name:"show",rawName:"v-show",value:0==t.pictureNumber,expression:"pictureNumber == 0"}]},[t._v(" Choose a picture to start the timer ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.pictureNumber,expression:"pictureNumber != 0"}],staticClass:"portrait-container"},[r("div",{staticClass:"button-container"},[r("button",{on:{click:t.giveUp}},[t._v("Give up")])]),r("div",{staticClass:"portrait"},[r("img",{directives:[{name:"show",rawName:"v-show",value:"star"==t.pictureFolder,expression:"pictureFolder=='star'"}],attrs:{src:"https://i.ibb.co/w6D9d8q/star1.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"wedding"==t.pictureFolder,expression:"pictureFolder=='wedding'"}],attrs:{src:"https://i.ibb.co/hRKKqyP/wedding1.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"waldo"==t.pictureFolder,expression:"pictureFolder=='waldo'"}],attrs:{src:"https://i.ibb.co/YPVqTnm/waldo1.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:t.timer<10,expression:"timer < 10"}],staticClass:"portrait-overlay",attrs:{id:"portrait-overlay1",src:"https://i.ibb.co/kyQGgmL/found.png",alt:""}}),t._v(" "+t._s(t.portrait1)+" ")]),r("div",{staticClass:"portrait"},[r("img",{directives:[{name:"show",rawName:"v-show",value:"star"==t.pictureFolder,expression:"pictureFolder=='star'"}],attrs:{src:"https://i.ibb.co/KXTD5Ld/star2.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"wedding"==t.pictureFolder,expression:"pictureFolder=='wedding'"}],attrs:{src:"https://i.ibb.co/4sKzrCK/wedding2.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"waldo"==t.pictureFolder,expression:"pictureFolder=='waldo'"}],attrs:{src:"https://i.ibb.co/J2tbTjH/waldo2.png",alt:""}}),r("img",{staticClass:"portrait-overlay",attrs:{id:"portrait-overlay2",src:"https://i.ibb.co/kyQGgmL/found.png",alt:""}}),t._v(" "+t._s(t.portrait2)+" ")]),r("div",{staticClass:"portrait"},[r("img",{directives:[{name:"show",rawName:"v-show",value:"star"==t.pictureFolder,expression:"pictureFolder=='star'"}],attrs:{src:"https://i.ibb.co/3dzTNLw/star3.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"wedding"==t.pictureFolder,expression:"pictureFolder=='wedding'"}],attrs:{src:"https://i.ibb.co/bKbpLLd/wedding3.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:"waldo"==t.pictureFolder,expression:"pictureFolder=='waldo'"}],attrs:{src:"https://i.ibb.co/K9fY31G/waldo3.png",alt:""}}),r("img",{directives:[{name:"show",rawName:"v-show",value:t.timer<10,expression:"timer < 10"}],staticClass:"portrait-overlay",attrs:{id:"portrait-overlay3",src:"https://i.ibb.co/kyQGgmL/found.png",alt:""}}),t._v(" "+t._s(t.portrait3)+" ")]),r("p",[t._v("Timer: "+t._s(t.timer))])])])},d=[],l={props:["pictureNumber","pictureFolder","portrait1","portrait2","portrait3","timer"],methods:{giveUp:function(){window.location.reload()}}},u=l,h=(r("c824"),r("2877")),p=Object(h["a"])(u,c,d,!1,null,"7d06886e",null),m=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"picture-container",attrs:{id:"container"}},[r("img",{staticClass:"game-img",attrs:{src:"https://i.ibb.co/3FZXYy8/star.jpg",alt:""},on:{click:function(e){return t.showCoords()}}})])},y=[],f={props:["portrait1","portrait2","portrait3","data1"],data:function(){return{x:0,y:0,charactersFound:0}},methods:{showCoords:function(){this.removeBox();var t=event.target.getBoundingClientRect();this.x=event.clientX-(t.left+10),this.y=event.clientY-(t.top-70),this.makeBox(this.x,this.y)},makeBox:function(t,e){var r=this,a=document.getElementById("container"),i=document.createElement("div");i.setAttribute("id","red-box"),i.classList.add("selection-container"),i.style.position="absolute",i.style.left=t+"px",i.style.top=e+"px",i.style.width="fit-content",i.style.height="80px",i.style.zIndex=2,i.style.backgroundColor="transparent",i.style.display="flex";var s=document.createElement("div");s.style.width="50px",s.style.height="70px",s.style.border="2px solid red",s.style.zIndex=2,s.style.backgroundColor="transparent",i.appendChild(s);var o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.height="fit-content",o.style.backgroundColor="transparent";var n=document.createElement("button");n.classList.add("character-option"),n.innerText=this.portrait1,n.addEventListener("click",(function(){return r.checkSelection(1)}));var c=document.createElement("button");c.classList.add("character-option"),c.innerText=this.portrait2,c.addEventListener("click",(function(){return r.checkSelection(2)}));var d=document.createElement("button");d.classList.add("character-option"),d.innerText=this.portrait3,d.addEventListener("click",(function(){return r.checkSelection(3)})),o.appendChild(n),o.appendChild(c),o.appendChild(d),i.appendChild(o),a.appendChild(i)},checkSelection:function(t){1==t?this.x>this.data1.x1-25&&this.x<this.data1.x1+25&&this.y>this.data1.y1-25&&this.y<this.data1.y1+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):2==t?this.x>this.data1.x2-25&&this.x<this.data1.x2+25&&this.y>this.data1.y2-25&&this.y<this.data1.y2+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):3==t&&this.x>this.data1.x3-25&&this.x<this.data1.x3+25&&this.y>this.data1.y3-25&&this.y<this.data1.y3+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver())},changeBoxID:function(t){var e=document.getElementById("red-box");e.removeChild(e.childNodes[1]),e.setAttribute("id","green-box"+t),e.childNodes[0].style.border="3px solid lightGreen"},removeBox:function(){var t=document.getElementById("container"),e=document.getElementById("red-box");t.contains(e)&&e.parentNode.removeChild(e)},markPortrait:function(t){var e=document.getElementById("portrait-overlay"+t);e.style.display="block"},checkGameOver:function(){3==this.charactersFound&&(window.scrollTo(0,0),this.$emit("setGameOver",!0))}}},g=f,x=Object(h["a"])(g,v,y,!1,null,null,null),b=x.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"picture-container",attrs:{id:"container2"}},[r("img",{staticClass:"game-img",attrs:{src:"https://i.ibb.co/0M5F93q/wedding.jpg",alt:""},on:{click:function(e){return t.showCoords()}}})])},k=[],N={props:["portrait1","portrait2","portrait3","data2"],data:function(){return{x:0,y:0,charactersFound:0}},methods:{showCoords:function(){this.removeBox();var t=event.target.getBoundingClientRect();this.x=event.clientX-(t.left+10),this.y=event.clientY-(t.top-70),this.makeBox(this.x,this.y)},makeBox:function(t,e){var r=this,a=document.getElementById("container2"),i=document.createElement("div");i.setAttribute("id","red-box"),i.classList.add("selection-container"),i.style.position="absolute",i.style.left=t+"px",i.style.top=e+"px",i.style.width="fit-content",i.style.height="80px",i.style.zIndex=2,i.style.backgroundColor="transparent",i.style.display="flex";var s=document.createElement("div");s.style.width="50px",s.style.height="70px",s.style.border="2px solid red",s.style.zIndex=2,s.style.backgroundColor="transparent",i.appendChild(s);var o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.height="fit-content",o.style.backgroundColor="transparent";var n=document.createElement("button");n.classList.add("character-option"),n.innerText=this.portrait1,n.addEventListener("click",(function(){return r.checkSelection(1)}));var c=document.createElement("button");c.classList.add("character-option"),c.innerText=this.portrait2,c.addEventListener("click",(function(){return r.checkSelection(2)}));var d=document.createElement("button");d.classList.add("character-option"),d.innerText=this.portrait3,d.addEventListener("click",(function(){return r.checkSelection(3)})),o.appendChild(n),o.appendChild(c),o.appendChild(d),i.appendChild(o),a.appendChild(i)},checkSelection:function(t){1==t?this.x>this.data2.x1-25&&this.x<this.data2.x1+25&&this.y>this.data2.y1-25&&this.y<this.data2.y1+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):2==t?this.x>this.data2.x2-25&&this.x<this.data2.x2+25&&this.y>this.data2.y2-25&&this.y<this.data2.y2+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):3==t&&this.x>this.data2.x3-25&&this.x<this.data2.x3+25&&this.y>this.data2.y3-25&&this.y<this.data2.y3+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver())},changeBoxID:function(t){var e=document.getElementById("red-box");e.removeChild(e.childNodes[1]),e.setAttribute("id","green-box"+t),e.childNodes[0].style.border="3px solid lightGreen"},removeBox:function(){var t=document.getElementById("container2"),e=document.getElementById("red-box");t.contains(e)&&e.parentNode.removeChild(e)},markPortrait:function(t){var e=document.getElementById("portrait-overlay"+t);e.style.display="block"},checkGameOver:function(){3==this.charactersFound&&(window.scrollTo(0,0),this.$emit("setGameOver",!0))}}},C=N,E=(r("1e0d"),Object(h["a"])(C,w,k,!1,null,"4915c8a1",null)),O=E.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"picture-container",attrs:{id:"container3"}},[r("img",{staticClass:"game-img",attrs:{src:"https://i.ibb.co/MSF0SvC/waldo.jpg",alt:""},on:{click:function(e){return t.showCoords()}}})])},_=[],F={props:["portrait1","portrait2","portrait3","data3","gameOver"],data:function(){return{x:0,y:0,charactersFound:0}},methods:{showCoords:function(){this.removeBox();var t=event.target.getBoundingClientRect();this.x=event.clientX-(t.left+10),this.y=event.clientY-(t.top-70),console.log("x:"+this.x+" y:"+this.y),this.makeBox(this.x,this.y)},makeBox:function(t,e){var r=this,a=document.getElementById("container3"),i=document.createElement("div");i.setAttribute("id","red-box"),i.classList.add("selection-container"),i.style.position="absolute",i.style.left=t+"px",i.style.top=e+"px",i.style.width="fit-content",i.style.height="80px",i.style.zIndex=2,i.style.backgroundColor="transparent",i.style.display="flex";var s=document.createElement("div");s.style.width="50px",s.style.height="70px",s.style.border="2px solid red",s.style.zIndex=2,s.style.backgroundColor="transparent",i.appendChild(s);var o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.height="fit-content",o.style.backgroundColor="transparent";var n=document.createElement("button");n.classList.add("character-option"),n.innerText=this.portrait1,n.addEventListener("click",(function(){return r.checkSelection(1)}));var c=document.createElement("button");c.classList.add("character-option"),c.innerText=this.portrait2,c.addEventListener("click",(function(){return r.checkSelection(2)}));var d=document.createElement("button");d.classList.add("character-option"),d.innerText=this.portrait3,d.addEventListener("click",(function(){return r.checkSelection(3)})),o.appendChild(n),o.appendChild(c),o.appendChild(d),i.appendChild(o),a.appendChild(i)},checkSelection:function(t){1==t?this.x>this.data3.x1-25&&this.x<this.data3.x1+25&&this.y>this.data3.y1-25&&this.y<this.data3.y1+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):2==t?this.x>this.data3.x2-25&&this.x<this.data3.x2+25&&this.y>this.data3.y2-25&&this.y<this.data3.y2+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver()):3==t&&this.x>this.data3.x3-25&&this.x<this.data3.x3+25&&this.y>this.data3.y3-25&&this.y<this.data3.y3+25&&(this.charactersFound++,this.changeBoxID(t),this.markPortrait(t),this.checkGameOver())},changeBoxID:function(t){var e=document.getElementById("red-box");e.removeChild(e.childNodes[1]),e.setAttribute("id","green-box"+t),e.childNodes[0].style.border="3px solid lightGreen"},removeBox:function(){var t=document.getElementById("container3"),e=document.getElementById("red-box");t.contains(e)&&e.parentNode.removeChild(e)},markPortrait:function(t){var e=document.getElementById("portrait-overlay"+t);e.style.display="block"},checkGameOver:function(){3==this.charactersFound&&(window.scrollTo(0,0),this.$emit("setGameOver",!0))}}},G=F,I=(r("c49f"),Object(h["a"])(G,B,_,!1,null,"032f70ac",null)),S=I.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overlay-container"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"top"},[t._v(" You found them all! ")]),r("div",{staticClass:"middle"},[t._v(" Your Score: "+t._s(t.timer))]),r("div",{staticClass:"middle2"},[t._v(" Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.playerName,expression:"playerName"}],staticClass:"name-input",attrs:{type:"text"},domProps:{value:t.playerName},on:{input:function(e){e.target.composing||(t.playerName=e.target.value)}}}),r("button",{staticClass:"score-button",on:{click:t.saveScore}},[t._v(" Submit ")])])])])},T=[],P={props:["timer","pictureNumber"],data:function(){return{playerName:""}},methods:{saveScore:function(){this.$emit("saveScore",this.playerName),this.$emit("resetGame")}}},D=P,j=(r("1eb1"),Object(h["a"])(D,L,T,!1,null,"6c8b34b0",null)),$=j.exports,z={apiKey:"AIzaSyB5zsTwDhBwDZQRVXdDpDeEH7a5a6dFLJs",authDomain:"image-tag-game.firebaseapp.com",databaseURL:"https://image-tag-game.firebaseio.com",projectId:"image-tag-game",storageBucket:"image-tag-game.appspot.com",messagingSenderId:"934200685818",appId:"1:934200685818:web:3c81efd9ea89d1c5710543"};n.a.initializeApp(z);var A=n.a.firestore(),K={name:"App",components:{InfoPanel:m,Star:b,Wedding:O,Waldo:S,ScoreScreen:$},data:function(){return{pictureNumber:0,pictureFolder:"waldo",portrait1:"",portrait2:"",portrait3:"",timer:0,inGame:!1,data1:[],data2:[],data3:[],scores1:[],scores2:[],scores3:[],gameOver:!1,playerName:""}},firestore:{imageGames:A.collection("image-games")},methods:{startGame:function(){this.startTimer(),this.setPortraitNames()},startTimer:function(){var t=this;setInterval((function(){return t.updateTimer()}),1e3)},updateTimer:function(){0==this.gameOver&&this.timer++},setPortraitNames:function(){if(1==this.pictureNumber)this.portrait1=this.data1.name1,this.portrait2=this.data1.name2,this.portrait3=this.data1.name3;else if(2==this.pictureNumber)this.portrait1=this.data2.name1,this.portrait2=this.data2.name2,this.portrait3=this.data2.name3;else{if(3!=this.pictureNumber)return;this.portrait1=this.data3.name1,this.portrait2=this.data3.name2,this.portrait3=this.data3.name3}},updateGameOver:function(t){this.gameOver=t},saveScore:function(t){this.playerName=t,""!=this.playerName&&(1==this.pictureNumber?A.collection("star-scores").add({name:this.playerName,score:this.timer}):2==this.pictureNumber?A.collection("wedding-score").add({name:this.playerName,score:this.timer}):3==this.pictureNumber&&A.collection("waldo-score").add({name:this.playerName,score:this.timer}))},resetGame:function(){setTimeout((function(){window.location.reload()}),2200)}},created:function(){var t=this;A.collection("image-games").get().then((function(e){e.docs.forEach((function(e){"Boss Nass"==e.data().name1?t.data1=e.data():"Thor"==e.data().name1?t.data2=e.data():"Tom"==e.data().name1&&(t.data3=e.data())}))})),A.collection("star-scores").orderBy("score").get().then((function(e){e.docs.forEach((function(e){t.scores1.push(e.data())}))})),A.collection("wedding-score").orderBy("score").get().then((function(e){e.docs.forEach((function(e){t.scores2.push(e.data())}))})),A.collection("waldo-score").orderBy("score").get().then((function(e){e.docs.forEach((function(e){t.scores3.push(e.data())}))}))}},Y=K,W=(r("034f"),Object(h["a"])(Y,i,s,!1,null,null,null)),M=W.exports,R=r("0ff2");a["a"].use(n.a),a["a"].use(R["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,r){},c49f:function(t,e,r){"use strict";var a=r("5236"),i=r.n(a);i.a},c824:function(t,e,r){"use strict";var a=r("c8c5"),i=r.n(a);i.a},c8c5:function(t,e,r){},eda9:function(t,e,r){}});
//# sourceMappingURL=app.5f5c416a.js.map