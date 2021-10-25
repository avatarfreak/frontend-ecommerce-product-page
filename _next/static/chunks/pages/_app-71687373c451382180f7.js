(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3097:function(e,t,r){"use strict";r.d(t,{A:function(){return n}});var n=r(7294).createContext({})},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8542)}])},7826:function(){},9008:function(e,t,r){e.exports=r(639)},8542:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return w}});r(4111),r(7826);var o=r(9008),c=r(3908),i=r(885),u=r(3097),a=r(7294),s=r(907);var l,f=r(181);function d(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,f.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.add="ADD_CART",e.remove="DELETE_CART"}(l||(l={}));var b=function(e,t){switch(t.type){case l.add:return y(y({},e),{},{carts:[].concat(d(e.carts),[t.payload])});case l.remove:return{carts:e.carts.filter((function(e){return 1===e.id}))};default:return e}},v=r(5893),m={carts:[]},h=function(e){var t=e.children,r=a.useReducer(b,m),n=(0,i.Z)(r,2),o=n[0],c=n[1],s=a.useState(!1),f=(0,i.Z)(s,2),d=f[0],p=f[1],y=o.carts;return(0,v.jsx)(u.A.Provider,{value:{carts:y,addProduct:function(e,t,r){var n=Number((new Date).getTime());c({type:l.add,payload:{id:n,product:r,price:t,quantity:e}})},removeProduct:function(){c({type:l.remove})},isCardActive:d,setIsCardActive:p},children:t})};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.Component,r=e.pageProps;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(o.default,{children:[(0,v.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,v.jsx)("meta",{name:"description",content:"E-commerce product page challenged by avatarfreak"}),(0,v.jsx)("title",{children:"Frontend Mentor | E-commerce product page"})]}),(0,v.jsx)(h,{children:(0,v.jsx)(c.F,{children:(0,v.jsx)(t,j({},r))})})]})}},3908:function(e,t,r){"use strict";r.d(t,{F:function(){return a},Q:function(){return u}});var n=r(885),o=r(7294),c=JSON.parse('{"menu":["Collections"," Men"," Women"," About"," Contact"],"subTitle":"Sneaker Company","title":"Fall Limited Edition Sneakers","description":"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\u2019ll withstand everything the weather can offer.","discount":"50%","discountedPrice":[125],"price":[250]}'),i=r(5893),u=o.createContext({}),a=function(e){var t=e.children,r=o.useState(c),a=(0,n.Z)(r,2),s=a[0];a[1];return(0,i.jsx)(u.Provider,{value:{collection:s},children:t})}},4111:function(){},907:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},885:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);