(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),d=n(667),c=n.n(d),s=new URL(n(293),n.b),l=new URL(n(83),n.b),p=new URL(n(992),n.b),m=new URL(n(941),n.b),u=new URL(n(723),n.b),h=new URL(n(904),n.b),f=i()(o()),b=c()(s),g=c()(l),x=c()(p),C=c()(m),v=c()(u),w=c()(h);f.push([e.id,'@font-face {\r\n  font-family: "FlavorsRegular";\r\n  src: url('+b+') format("woff2"),\r\n    url('+g+') format("woff");\r\n}\r\n\r\n@font-face {\r\n  font-family: "ArchivoMedium";\r\n  src: url('+x+') format("woff2"),\r\n    url('+C+') format("woff");\r\n}\r\n\r\n@font-face {\r\n  font-family: "NosiferRegular";\r\n  src: url('+v+') format("woff2"),\r\n    url('+w+') format("woff");\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --primary-color: #000000;\r\n  --secondary-color: #eef7ab;\r\n  --h2-color: #f09ee8;\r\n  --h3-color: #4695a4;\r\n  --main-background: linear-gradient(49deg, #6314e8, #97c9d6, #d97e92, #865859);\r\n  --main-box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px,\r\n    rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px,\r\n    rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;\r\n  --tabs-box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,\r\n    rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n  --hover-box-shadow: rgba(196, 230, 44, 0.25) 0px 30px 60px -12px inset,\r\n    rgba(187, 248, 5, 0.3) 0px 18px 36px -18px inset;\r\n  --img-box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\r\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  --card-box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n  --black-border: 1px dotted #000000;\r\n  --yellow-border: 1px dotted #eef7ab;\r\n  --thicker-black-border: 3px dotted black;\r\n  --h1-text-shadow: 4px 4px 2px rgba(145, 142, 142, 0.6);\r\n  --h2-text-shadow: 2px 4px 2px rgba(129, 129, 129, 0.6);\r\n}\r\n#content {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: "ArchivoMedium";\r\n  text-align: center;\r\n  background: var(--main-background);\r\n  background-size: 240% 240%;\r\n  animation: gradient-animation 16s ease infinite;\r\n}\r\n\r\n#main {\r\n  width: 60%;\r\n  height: 100%;\r\n  background: var(--main-background);\r\n  background-size: 240% 240%;\r\n  animation: gradient-animation 16s ease infinite;\r\n  margin-bottom: 40px;\r\n  box-shadow: var(--main-box-shadow);\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  margin-top: 25px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.tab {\r\n  font-size: 1.7rem;\r\n  padding: 10px;\r\n  border: var(--yellow-border);\r\n  font-weight: bold;\r\n  color: var(--secondary-color);\r\n  background-color: var(--primary-color);\r\n  box-shadow: var(--tabs-box-shadow);\r\n  cursor: pointer;\r\n}\r\n\r\n.tab:hover {\r\n  color: var(--primary-color);\r\n  background-color: var(--secondary-color);\r\n  border: var(--black-border);\r\n  box-shadow: var(--hover-box-shadow);\r\n}\r\n\r\nh1 {\r\n  font-family: "FlavorsRegular";\r\n  font-size: 2.5rem;\r\n  color: var(--primary-color);\r\n  text-shadow: var(--h1-text-shadow);\r\n  padding: 15px 0;\r\n}\r\n\r\nh2 {\r\n  font-family: "NosiferRegular";\r\n  font-size: 1.8rem;\r\n  color: var(--h2-color);\r\n  text-shadow: var(--h2-text-shadow);\r\n  text-decoration: underline;\r\n}\r\n\r\nh3 {\r\n  font-family: "NosiferRegular";\r\n  font-size: 1.5rem;\r\n  color: var(--h3-color);\r\n  padding-bottom: 8px;\r\n}\r\n\r\nimg {\r\n  width: 450px;\r\n  height: auto;\r\n  box-shadow: var(--img-box-shadow);\r\n}\r\n\r\n/* Home-Page */\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 25px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.description,\r\n.open-hours,\r\n.location {\r\n  width: 450px;\r\n  height: auto;\r\n  padding: 30px;\r\n  font-size: 1.3rem;\r\n  box-shadow: var(--card-box-shadow);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  padding: 7px;\r\n}\r\n\r\n.location,\r\n.open-hours {\r\n  margin-top: 20px;\r\n}\r\n\r\n/* Menu-Page */\r\n\r\n.menu-options {\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.menu-item {\r\n  width: 550px;\r\n  height: auto;\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  background-color: var(--secondary-color);\r\n  border: var(--thicker-black-border);\r\n}\r\n\r\n.menu-item img {\r\n  width: 520px;\r\n  height: auto;\r\n}\r\n.menu-item p,\r\n.menu-item h3 {\r\n  padding: 10px;\r\n}\r\n\r\n/* Background Animation */\r\n@keyframes gradient-animation {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n',""]);const y=f},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},941:(e,t,n)=>{e.exports=n.p+"7370d094e1057dd89d9e.woff"},992:(e,t,n)=>{e.exports=n.p+"a0c1a5c215af7dac66fe.woff2"},83:(e,t,n)=>{e.exports=n.p+"0831fb51532f1e597e60.woff"},293:(e,t,n)=>{e.exports=n.p+"a9295d7da0125a1bb7cf.woff2"},904:(e,t,n)=>{e.exports=n.p+"98e00e1dcbdec5f79df3.woff"},723:(e,t,n)=>{e.exports=n.p+"11997663f2affa9d21e6.woff2"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),c=n.n(d),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=n.p+"677ad5e11eb9253fc477.gif",b=()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","main");let n=document.createElement("h1");n.textContent="Sketchy Restaurant",t.appendChild(n);const r=new Image;r.src=f,t.appendChild(r);let o=document.createElement("div");o.classList.add("info");let a=document.createElement("p");a.textContent='Fill all your cartoon food cravings and childhood nostalgia in our restaurant!\n  We have everything here: from the legendary\n  "SpongeBob SquarePants" Krabby Patty to\n  "Alice in Wonderland"\'s cookies that are just begging to be\n  eaten!',a.classList.add("description");let i=document.createElement("div");i.classList.add("open-hours");let d=document.createElement("h3");d.textContent="Open Hours",i.appendChild(d);let c=document.createElement("ul"),s=document.createElement("li");s.textContent="Mon-Fri: every second of your free time";let l=document.createElement("li");l.textContent="weekend: 24/7",c.appendChild(s),c.appendChild(l),i.appendChild(c);let p=document.createElement("div");p.classList.add("location");let m=document.createElement("h3");m.textContent="Location",p.appendChild(m);let u=document.createElement("p");u.textContent="Imagination Street, Childhood Drawer",p.appendChild(u),o.appendChild(a),o.appendChild(i),o.appendChild(p),t.appendChild(o),e.appendChild(t)},g=n.p+"791f788d96481a314598.gif",x=n.p+"f3879231932fc440c971.gif",C=n.p+"9d5d3c620739452e071b.gif",v=n.p+"3c1b6a3d85cb04b86caf.gif",w=n.p+"f6dc74f5ebbb0c5f1642.gif",y=n.p+"a43bcb50d8f937f19449.gif",E=n.p+"250ffc7e016adff95a14.gif",k=n.p+"e147ce29e67f21519a47.gif",L=n.p+"70792f9eb2becbc10d17.gif",A=n.p+"5515dc706dcd0f24ad8b.gif";function S(){const e=document.querySelector("#content"),t=document.querySelector("#main");t&&e.removeChild(t)}(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("tabs");const n=document.createElement("p");n.textContent="Home",n.setAttribute("id","home-btn"),n.classList.add("tab");const r=document.createElement("p");r.setAttribute("id","menu-btn"),r.textContent="Menu",r.classList.add("tab");const o=document.createElement("p");o.setAttribute("id","contact-btn"),o.textContent="Contact",o.classList.add("tab"),t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t),n.addEventListener("click",(()=>{S(),b()})),r.addEventListener("click",(()=>{S(),(()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Menu 🍩",t.appendChild(n);const r=document.createElement("h2");r.textContent="Mains",t.appendChild(r);const o=document.createElement("div");o.classList.add("menu-options");const a=document.createElement("div");a.classList.add("menu-item");const i=document.createElement("h3");i.textContent="Comforting bowl of ramen from 'Ponyo' ";const d=new Image;d.src=g;const c=document.createElement("p");c.textContent="Served with some ham, eggs, and fresh vegetables on top, this animated dish is one of the most mouth-watering dishes in this movie.",a.appendChild(i),a.appendChild(d),a.appendChild(c);const s=document.createElement("div");s.classList.add("menu-item");const l=document.createElement("h3");l.textContent="The legendary Krabby Patty  from 'Spongebob Squarepants' ";const p=new Image;p.src=x;const m=document.createElement("p");m.textContent="No wonder Plankton wanted this dish. The Krusty Krab's most famous and iconic dish is the Krabby Patty. It resembles a meatless hamburger composed of seaweed-sea buns, underwater vegetables, sauces, and a patty; cheese can also be included. Throughout the series, it is intentionally kept a secret what the patty's secret formula is.",s.appendChild(l),s.appendChild(p),s.appendChild(m);const u=document.createElement("div");u.classList.add("menu-item");const h=document.createElement("h3");h.textContent="Congee  from 'Mulan' ";const f=new Image;f.src=C;const b=document.createElement("p");b.textContent="Rice is considered to be the most popular food to eat around the world. Due to its versatility, you can eat it on its own or pair it with a lot of different ingredients. The congee we see in Mulan is just that, rice, in a more liquidy form, with some bacon and eggs. If you are a morning person, this dish might just be for you.",u.appendChild(h),u.appendChild(f),u.appendChild(b);const S=document.createElement("div");S.classList.add("menu-item");const T=document.createElement("h3");T.textContent="Spaghetti With Meatballs from 'Lady And The Tramp' ";const I=new Image;I.src=v;const M=document.createElement("p");M.textContent="Nothing is more memorable than the Lady and the Tramp eating some spaghetti with meatballs in an alleyway. A perfect Italian dish, two simple foods combined, made one of the most iconic cartoon foods we have ever seen. Add some sauce on top of it and you will have the perfect dish on your table.",S.appendChild(T),S.appendChild(I),S.appendChild(M),o.appendChild(a),o.appendChild(s),o.appendChild(u),o.appendChild(S);const R=document.createElement("h2");R.textContent="Desserts";const N=document.createElement("div");N.classList.add("menu-item");const q=document.createElement("h3");q.textContent="Beignets from 'The Princess And The Frog' ";const P=new Image;P.src=w;const j=document.createElement("p");j.textContent="Nothing says Louisiana and New Orleans like the combination of Gumbo and Beignets. Both suit each other very nicely. Gumbo is a liquid, while a beignet is bread-like food. Nothing feels as good as picking up some gumbo with some beignets and then taking that sweet, sweet bite. When these two combine, it feels like a match made in heaven.",N.appendChild(q),N.appendChild(P),N.appendChild(j);const H=document.createElement("div");H.classList.add("menu-item");const z=document.createElement("h3");z.textContent="The Eat Me Cookies 'Alice In Wonderland' ";const U=new Image;U.src=y;const O=document.createElement("p");O.textContent="Cookies can’t speak in real life (in dreams they can). So without speaking a word, only displaying the simple term like “Eat me,” is enough to pique the interest of any person near it. A lot of attention is given to the writing on the cookie. Even a simple cookie with some writing on it is enticing and irresistible.",H.appendChild(z),H.appendChild(U),H.appendChild(O);const F=document.createElement("div");F.classList.add("menu-item");const _=document.createElement("h3");_.textContent="That iconic pink doughnut from 'The Simpsons' ";const B=new Image;B.src=E;const D=document.createElement("p");D.textContent="Mmm, donuts. Nothing says tasty like freshly baked donuts covered in bright pink glaze with colorful funfetti sprinkles. This donut is the trademark of Homer Simpson. He despises other people eating his donuts and cannot function without them. It’s an addiction that we can agree is just too relatable.",F.appendChild(_),F.appendChild(B),F.appendChild(D),o.appendChild(R),o.appendChild(N),o.appendChild(H),o.appendChild(F);const W=document.createElement("h2");W.textContent="Drinks";const G=document.createElement("p");G.textContent="[or how to drink like a Simpson!]";const K=document.createElement("div");K.classList.add("menu-item");const Z=document.createElement("h3");Z.textContent="Buzz Cola";const $=new Image;$.src=k;const J=document.createElement("p");J.textContent='"twice the sugar, twice the caffeine".',K.appendChild(Z),K.appendChild($),K.appendChild(J);const Q=document.createElement("div");Q.classList.add("menu-item");const V=document.createElement("h3");V.textContent="Duff Beer";const X=new Image;X.src=L;const Y=document.createElement("p");Y.textContent="Can't Get Enough Of That Wonderful Duff?\n  Grab an icy cold glass of Homer’s favorite drink and relax!",Q.appendChild(V),Q.appendChild(X),Q.appendChild(Y);const ee=document.createElement("div");ee.classList.add("menu-item");const te=document.createElement("h3");te.textContent="Loads of coffee";const ne=new Image;ne.src=A;const re=document.createElement("p");re.textContent="Guaranteed will wake you up!",ee.appendChild(te),ee.appendChild(ne),ee.appendChild(re),o.appendChild(W),o.appendChild(G),o.appendChild(K),o.appendChild(Q),o.appendChild(ee),t.appendChild(o),e.appendChild(t)})()})),o.addEventListener("click",(()=>{S(),(()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Contact📝",t.appendChild(n);const r=document.createElement("h3");r.textContent="Contact Us",t.appendChild(r);const o=document.createElement("div");o.classList.add("form-container");const a=document.createElement("form");a.setAttribute("action","#");const i=document.createElement("input");i.setAttribute("id","name"),i.setAttribute("name","name"),i.setAttribute("type","text"),i.setAttribute("placeholder","Name"),i.required=!0;const d=document.createElement("input");d.setAttribute("id","email"),d.setAttribute("name","email"),d.setAttribute("type","email"),d.setAttribute("placeholder","Email Address"),d.required=!0;const c=document.createElement("input");c.setAttribute("id","subject"),c.setAttribute("name","subject"),c.setAttribute("type","text"),c.setAttribute("placeholder","Subject"),c.required=!0;const s=document.createElement("textarea");s.setAttribute("id","message"),s.setAttribute("name","message"),s.setAttribute("placeholder","Message"),a.appendChild(i),a.appendChild(d),a.appendChild(c),a.appendChild(s),o.appendChild(a);const l=document.createElement("div");l.classList.add("info-data");const p=document.createElement("div");p.classList.add("phone-data");const m=document.createElement("span");m.innerText="📞 Phone Number: ",p.append(m,"800 800 LaLaLand"),l.appendChild(p);const u=document.createElement("div");u.classList.add("location-data");const h=document.createElement("span");h.innerText="🔎 Find Us: ",u.append(h,"High chances to find delicious animated food in almost any cartoon! Need to feed that imagination!"),l.appendChild(u);const f=document.createElement("div");f.classList.add("mail-data");const b=document.createElement("span");b.innerText="🖍 📍 Write us: ",f.append(b,"your-imagination@tastycartoonfood.com"),l.appendChild(f);const g=document.createElement("div");g.classList.add("references");const x=document.createElement("div");x.classList.add("reference");const C=document.createElement("p");C.textContent="Our Sketchy Restaurant's Delicious gifs were taken from: ";const v=document.createElement("a");v.textContent="HERE",v.href="https://says.com/my/fun/mouth-watering-cartoon-foods-we-wish-existed-irl",v.target="_blank";const w=document.createElement("div"),y=document.createElement("p");y.textContent="Our yummy menu's descriptions were taken from: ";const E=document.createElement("a");E.textContent="HERE",E.href="https://www.boredpanda.com/cartoon-food/?utm_source=duckduckgo&utm_medium=referral&utm_campaign=organic",E.target="_blank";const k=document.createElement("div"),L=document.createElement("p");L.textContent="Other Sources: THE INTERNET ",x.append(C,v,y,E,L),g.appendChild(x),g.appendChild(w),g.appendChild(k),t.appendChild(o),t.appendChild(l),t.appendChild(g),e.appendChild(t)})()}))})(),b()})()})();