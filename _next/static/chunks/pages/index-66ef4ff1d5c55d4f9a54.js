(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var s,l=(s=n(7294))&&s.__esModule?s:{default:s},i=n(1063),a=n(4651),c=n(7426);var o={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[t+"%"+n+(s?"%"+s:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,s=a.useRouter(),u=l.default.useMemo((function(){var t=i.resolveHref(s,e.href,!0),n=r(t,2),l=n[0],a=n[1];return{href:l,as:e.as?i.resolveHref(s,e.as):a||l}}),[s,e.href,e.as]),h=u.href,f=u.as,x=e.children,m=e.replace,v=e.shallow,p=e.scroll,j=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var g=(t=l.default.Children.only(x))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),b=r(w,2),N=b[0],k=b[1],y=l.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);l.default.useEffect((function(){var e=k&&n&&i.isLocalURL(h),t="undefined"!==typeof j?j:s&&s.locale,r=o[h+"%"+f+(t?"%"+t:"")];e&&!r&&d(s,h,f,{locale:t})}),[f,h,k,j,n,s]);var C={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,l,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[s?"replace":"push"](n,r,{shallow:l,locale:c,scroll:a}))}(e,s,h,f,m,v,p,j)},onMouseEnter:function(e){i.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(s,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof j?j:s&&s.locale,L=s&&s.isLocaleDomain&&i.getDomainLocale(f,Z,s&&s.locales,s&&s.domainLocales);C.href=L||i.addBasePath(i.addLocale(f,Z,s&&s.defaultLocale))}return l.default.cloneElement(t,C)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=s.useRef(),o=s.useState(!1),d=r(o,2),u=d[0],h=d[1],f=s.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,l=r.observer,i=r.elements;return i.set(e,t),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),a.delete(s))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,u]);return s.useEffect((function(){if(!i&&!u){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[f,u]};var s=n(7294),l=n(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1435)}])},1664:function(e,t,n){e.exports=n(2167)},1435:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(7294),s=n(1664),l=n(5893),i=function(){return(0,l.jsxs)("footer",{className:"text-xs text-center md:mt-20",children:["Challenge by"," ",(0,l.jsx)(s.default,{href:"https://www.frontendmentor.io?ref=challenge",children:(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"text-pri-100",children:"Frontend Mentor"})}),". Coded by",(0,l.jsx)(s.default,{href:"https://www.github.com/avatarfreak",children:(0,l.jsxs)("a",{target:"_blank",rel:" noopener noreferrer",className:"text-pri-100",children:[" ","avatarfreak"]})}),"."]})},a=n(885),c=n(3908),o=function(e){var t=e.item;return(0,l.jsx)("li",{className:"menu-item ",children:(0,l.jsx)(s.default,{href:"#!",children:(0,l.jsx)("a",{children:t})})})},d=function(e){var t=e.isOpen,n=(e.setIsOpen,r.useContext(c.Q).collection);return(0,l.jsx)("div",{className:"\n      ".concat(t?"block":"hidden"," fixed inset-0 bg-black/75 z-2\n    md:inset-auto\n    md:relative\n    md:bg-transparent\n    md:block\n"),children:(0,l.jsx)("ul",{className:" fixed inset-0  w-3/4 font-bold text-lg py-20 px-6  space-y-8 h-full bg-neutral-140  md:relative md:inset-auto md:flex md:space-x-6 md:space-y-0 md:py-0 md:h-0 md:text-base md:text-neutral-110 md:font-normal ",children:n.menu.map((function(e,t){return(0,l.jsx)(o,{item:e},t)}))})})},u=function(e){var t=e.isOpen,n=e.setIsOpen;return(0,l.jsx)("button",{onClick:function(){return n((function(e){return!e}))},className:"z-50 md:hidden",children:t?(0,l.jsx)("svg",{width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fill:"#69707D",fillRule:"evenodd"})}):(0,l.jsx)("svg",{width:"16",height:"15",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z",fill:"#69707D",fillRule:"evenodd"})})})},h=function(){return(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(s.default,{href:"/",children:(0,l.jsx)("a",{children:(0,l.jsx)("svg",{width:"138",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z",fill:"#1D2026",fillRule:"nonzero"})})})})})},f=n(3097),x=function(){var e=r.useContext(f.A),t=e.carts,n=e.removeProduct,s=e.addProduct,l=e.isCardActive,i=e.setIsCardActive;return{carts:t,price:125,quantity:t.map((function(e){return e.quantity})).slice(-1)[0],isCardActive:l,setIsCardActive:i,addProduct:s,removeProduct:n}},m=function(){var e=x().quantity;return(0,l.jsx)("div",{children:e>0?(0,l.jsx)("span",{className:"absolute -top-1 -right-2 h-[0.8125rem] w-[1.125rem] rounded-full bg-pri-100 flex justify-center items-center",children:(0,l.jsx)("p",{className:"text-neutral-140 text-10px font-bold pointer-events-none",children:e})}):""})},v=function(){var e=x().setIsCardActive;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(m,{}),(0,l.jsx)("button",{onClick:function(){return e((function(e){return!e}))},className:"block btn",children:(0,l.jsx)("svg",{width:"22",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z",fill:"#000",fillRule:"nonzero"})})})]})},p=function(){return(0,l.jsx)("div",{className:" h-8 w-8 md:h-12 md:w-12 border-2 border-transparent rounded-full hover:border-pri-100 ",children:(0,l.jsx)("img",{src:"/images/image-avatar.png",alt:"avatar"})})},j=function(){var e=r.useState(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1];return(0,l.jsx)("header",{children:(0,l.jsxs)("nav",{className:"relative flex items-center justify-between p-6 md:border-b ",children:[(0,l.jsxs)("div",{className:"flex space-x-4 md:space-x-8 md:flex-row-reverse",children:[(0,l.jsx)(u,{isOpen:n,setIsOpen:s}),(0,l.jsx)(d,{isOpen:n,setIsOpen:s}),(0,l.jsx)(h,{})]}),(0,l.jsxs)("nav",{className:"flex items-center justify-between space-x-4",children:[(0,l.jsx)(v,{}),(0,l.jsx)(p,{})]})]})})},g=function(e){var t=e.addToCart;return(0,l.jsx)("div",{className:"md:flex-1 w-full",children:(0,l.jsxs)("button",{onClick:t,className:"btn pgt-hover transition flex items-center justify-center w-full space-x-4 my-6 bg-pri-100 rounded-lg py-5 text-neutral-140 px-4 shadow-md",children:[(0,l.jsx)("svg",{width:"22",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z",fill:"#fff",fillRule:"nonzero"})}),(0,l.jsx)("span",{className:"text-base font-bold",children:"Add to card"})]})})},w=function(e){var t=e.quantity,n=e.handleDecrement,r=e.handleIncrement;return(0,l.jsx)("div",{className:"md:flex-1/2 w-full",children:(0,l.jsxs)("div",{className:"flex items-center justify-between my-6 bg-neutral-130 rounded-lg py-5 px-4 w-full shadow-md",children:[(0,l.jsx)("button",{onClick:n,className:"btn pgt-hover p-2 ",children:(0,l.jsxs)("svg",{width:"12",height:"4",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,l.jsx)("defs",{children:(0,l.jsx)("path",{d:"M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z",id:"a"})}),(0,l.jsx)("use",{fill:"#FF7E1B",fillRule:"nonzero",xlinkHref:"#a"})]})}),(0,l.jsx)("p",{"aria-live":"polite",className:"font-bold",children:t}),(0,l.jsx)("button",{onClick:r,className:"btn pgt-hover p-2",children:(0,l.jsxs)("svg",{width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,l.jsx)("defs",{children:(0,l.jsx)("path",{d:"M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z",id:"b"})}),(0,l.jsx)("use",{fill:"#FF7E1B",fillRule:"nonzero",xlinkHref:"#b"})]})})]})})},b=function(){var e=x().addProduct,t=r.useState(0),n=(0,a.Z)(t,2),s=n[0],i=n[1];return(0,l.jsxs)("div",{className:"w-full md:flex md:space-x-4",children:[(0,l.jsx)(w,{quantity:s,handleDecrement:function(){0!==s&&i((function(e){return e-1}))},handleIncrement:function(){i((function(e){return e+1}))}}),(0,l.jsx)(g,{addToCart:function(){0!==s?(e(s,125,"image-product-1-thumbnail.jpg"),i(0)):e(0,125,"image-product-1-thumbnail.jpg")}})]})},N=function(){var e=x(),t=e.quantity,n=e.price,r=e.removeProduct;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex  py-6 space-x-4",children:[(0,l.jsx)("div",{className:"flex-flex-shrink-0",children:(0,l.jsx)("img",{src:"/images/image-product-1-thumbnail.jpg",alt:"sneaker",width:"50",height:"50"})}),(0,l.jsxs)("div",{className:"text-neutral-110 font-base flex-auto w-full",children:[(0,l.jsx)("p",{children:"Autumn Limited Edition..."}),(0,l.jsxs)("p",{children:["".concat(n,".00 x ").concat(t),(0,l.jsx)("span",{className:"font-bold text-neutral-100 text-base",children:"  $".concat(n*t,".00 ")})]})]}),(0,l.jsx)("button",{onClick:function(){return r()},className:"btn",children:(0,l.jsx)("img",{src:"/images/icon-delete.svg",alt:"delete items",height:"18",width:"14"})})]}),(0,l.jsx)("button",{className:"btn pgt-hover bg-pri-100 text-center w-full py-4 rounded-xl text-neutral-140 font-bold ",children:"Checkout"})]})},k=function(){var e=x(),t=e.quantity,n=e.isCardActive;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsx)("div",{className:"max-w-96 w-11/12 absolute -top-1 overflow-hidden shadow-2xl rounded-2xl sm:right-2 ",children:(0,l.jsxs)("div",{className:"  left-0 w-full bg-neutral-130 py-6  rounded-xl",children:[(0,l.jsx)("h4",{className:"top pb-6 border-b font-bold px-6 ",children:"Cart"}),t>0?(0,l.jsx)("div",{className:"px-6",children:(0,l.jsx)(N,{})}):(0,l.jsx)("p",{className:"text-center py-12 font-bold text-neutral-110 ",children:"Your cart is empty."})]})})})},y=function(){var e=r.useContext(c.Q).collection;return(0,l.jsxs)("div",{className:"flex justify-between items-center space-x-8 md:justify-start md:flex-wrap md:space-x-0 ",children:[(0,l.jsxs)("h3",{className:"text-2xl text-neutral-100 text-3xl font-bold md:mr-4",children:[(0,l.jsx)("span",{children:"$"}),e.discountedPrice[0],".00"]}),(0,l.jsx)("span",{className:"bg-pri-110 text-pri-100 rounded-lg py-1 px-3 font-bold mr-4 block ",children:e.discount}),(0,l.jsxs)("span",{className:"line-through text-neutral-120 font-bold text-base  md:w-full md:mt-2 ",children:["$",e.price[0],".00"]})]})},C=function(){var e=r.useContext(c.Q).collection;return(0,l.jsxs)("section",{children:[(0,l.jsx)("p",{className:"text-pri-100 text-base uppercase py-6 text-xs font-bold md:text-sm md:tracking-wider",children:e.subTitle}),(0,l.jsx)("h2",{className:"text-3xl text-neutral-100 font-bold md:text-5xl",children:e.title}),(0,l.jsxs)("p",{className:"text-neutral-110 py-6",children:[" ",e.description," "]}),(0,l.jsx)(y,{})]})},Z=function(){return(0,l.jsxs)("div",{className:"px-6 flex flex-col items-center justify-center flex-1  w-full",children:[(0,l.jsx)(C,{}),(0,l.jsx)(b,{}),(0,l.jsx)(k,{})]})},L=n(3935),P=function(e){var t=e.isOpen,n=e.setIsOpen,s=e.children,i=r.useState(!1),c=(0,a.Z)(i,2),o=c[0],d=c[1];return console.log(t),r.useEffect((function(){return d(!0),function(){return d(!1)}}),[]),t&&o?(0,L.createPortal)((0,l.jsx)("div",{className:"fixed inset-0 bg-black/75 hidden sm:block z-50",children:(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:(0,l.jsxs)("div",{className:" max-w-lg w-full z-50",children:[(0,l.jsx)("div",{className:"flex justify-end mr-5",children:(0,l.jsx)("button",{onClick:function(){return n(!t)},className:"close p-2 btn",children:(0,l.jsx)("svg",{width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fill:"#fff",fillRule:"evenodd"})})})}),(0,l.jsx)("div",{className:"w-full",children:s})]})})}),document.getElementById("modal")):null},M=function(e){var t=e.handleClickPrev,n=e.handleClickNext;return(0,l.jsxs)("div",{className:"absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-3 sm:px-0 sm: -translate-y-full sm:-mt-13",children:[(0,l.jsx)("button",{onClick:t,className:"nav btn  inline-block flex items-center justify-center h-11 w-11 rounded-full bg-neutral-140",children:(0,l.jsx)("svg",{width:"12",height:"18",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M11 1 3 9l8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})}),(0,l.jsx)("button",{onClick:n,className:"nav btn next inline-block flex items-center justify-center h-11 w-11 rounded-full bg-neutral-140",children:(0,l.jsx)("svg",{width:"13",height:"18",xmlns:"http://www.w3.org/2000/svg",className:"hover:text-pri-100",children:(0,l.jsx)("path",{d:"m2 1 8 8-8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})})]})},E=function(e){var t=e.images,n=e.handleClickPrev,s=e.handleClickNext,i=e.setWidth,a=e.xPosition,c=r.useRef(null),o=r.useCallback((function(){var e,t;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});var r=null===(t=c.current)||void 0===t?void 0:t.clientWidth;i(r),n()}),[c,n,i]);return r.useEffect((function(){if(c.current){var e=c.current.clientWidth;i(e)}window.onresize=o}),[i,o]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"relative  sm:max-w-[29rem] m-auto overflow-hidden sm:rounded-xl shadow-md",children:[(0,l.jsx)("div",{ref:c,style:{transform:"translateX(".concat(a,"px)")},className:"flex  transform duration-500 transition w-full",children:t.map((function(e,t){return(0,l.jsx)("img",{src:"/images/".concat(e),alt:e},t)}))}),(0,l.jsx)("div",{className:"sm:hidden",children:(0,l.jsx)(M,{handleClickNext:s,handleClickPrev:n})})]})})},I={thumbnail:["image-product-1-thumbnail.jpg","image-product-2-thumbnail.jpg","image-product-3-thumbnail.jpg","image-product-4-thumbnail.jpg"],original:["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]},H=function(e){var t=e.img,n=e.idx,r=e.index,s=e.setIndex,i=e.width,a=e.setXPosition;return(0,l.jsx)("div",{className:"hidden sm:block",children:(0,l.jsx)("button",{className:"btn border-2 h-24 rounded-xl ".concat(r===n?"border-pri-100":"border-transparent","  "),onClick:function(){return function(e){var t=i*e;0===e?(s(0),a(0)):(s(e),a(-t))}(n)},children:(0,l.jsx)("img",{src:"/images/".concat(t),alt:t,width:"92",height:"92",className:" rounded-xl  ".concat(r===n?"opacity-50":"opacity-100"," ")})})})},R=function(){var e=r.useState(0),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=r.useState(0),c=(0,a.Z)(i,2),o=c[0],d=c[1],u=r.useState(0),h=(0,a.Z)(u,2),f=h[0],x=h[1],m=r.useRef(null);r.useEffect((function(){if(m.current){var e=m.current.clientWidth;d(e)}}),[d]);var v=function(){0!==n&&(s(n-1),x(f+o))},p=function(){n===I.original.length-1?(s(0),x(0)):(s(n+1),x(f-o))};return(0,l.jsxs)("div",{className:"relative max-w-lg m-auto",children:[(0,l.jsx)(E,{images:I.original,setWidth:d,xPosition:f,handleClickPrev:v,handleClickNext:p}),(0,l.jsx)(M,{handleClickNext:p,handleClickPrev:v}),(0,l.jsx)("div",{className:"flex justify-around mt-12",children:I.thumbnail.map((function(e,t){return(0,l.jsx)(H,{idx:t,img:e,setIndex:s,index:n,width:o,setXPosition:x},t)}))})]})},_=function(){var e=r.useState(0),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=r.useState(0),c=(0,a.Z)(i,2),o=c[0],d=c[1],u=r.useState(0),h=(0,a.Z)(u,2),f=h[0],x=h[1],m=r.useState(!1),v=(0,a.Z)(m,2),p=v[0],j=v[1],g=function(e){var t=(0,r.useState)(!1),n=t[0],s=t[1];return(0,r.useEffect)((function(){var t=window.matchMedia(e);t.matches!==n&&s(t.matches);var r=function(){return s(t.matches)};return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[n,e]),n}("(min-width: 1024px)"),w=function(){0!==n&&(s(n-1),d(o+f))},b=function(){n===I.original.length-1?(s(0),d(0)):(s(n+1),d(o-f))};return(0,l.jsxs)("div",{className:"sm:flex sm:flex-col sm:flex-1 w-full ",children:[g?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"cursor-pointer",onClick:function(){return j(!0)},children:(0,l.jsx)(E,{images:I.original,setWidth:x,xPosition:o,handleClickPrev:w,handleClickNext:b})}),(0,l.jsx)(P,{isOpen:p,setIsOpen:j,children:(0,l.jsx)(R,{})})]}):(0,l.jsx)(E,{images:I.original,setWidth:x,xPosition:o,handleClickPrev:w,handleClickNext:b}),(0,l.jsx)("div",{className:"my-4 space-x-7 flex items-center justify-center",children:I.thumbnail.map((function(e,t){return(0,l.jsx)(H,{idx:t,img:e,setIndex:s,index:n,width:f,setXPosition:d},t)}))})]})},A=function(){return(0,l.jsxs)("div",{className:"relative w-full md:mt-12 lg:flex lg:items-center lg:justify-center",children:[(0,l.jsx)(_,{}),(0,l.jsx)(Z,{})]})},O=function(){return(0,l.jsxs)("div",{className:"max-w-[90rem] mx-auto",children:[(0,l.jsx)(j,{}),(0,l.jsx)(A,{}),(0,l.jsx)(i,{})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);