!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,b=Math.min,v=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=u.test(t);return a||c.test(t)?f(t.slice(2),a?2:8):i.test(t)?NaN:+t}function g(n){var t="https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages");return fetch(t).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.error(n)}))}t=function(n,t,e){var o,r,i,u,c,f,a=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=o,i=r;return o=r=void 0,a=t,u=n.apply(i,e)}function h(n){return a=n,c=setTimeout(N,t),l?g(n):u}function j(n){var e=n-f;return void 0===f||e>=t||e<0||s&&n-a>=i}function N(){var n=v();if(j(n))return T(n);c=setTimeout(N,function(n){var e=t-(n-f);return s?b(e,i-(n-a)):e}(n))}function T(n){return c=void 0,p&&o?g(n):(o=r=void 0,u)}function O(){var n=v(),e=j(n);if(o=arguments,r=this,f=n,e){if(void 0===c)return h(f);if(s)return c=setTimeout(N,t),g(f)}return void 0===c&&(c=setTimeout(N,t)),u}return t=y(t)||0,m(e)&&(l=!!e.leading,i=(s="maxWait"in e)?d(y(e.maxWait)||0,t):i,p="trailing"in e?!!e.trailing:p),O.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},O.flush=function(){return void 0===c?u:T(v())},O};var h={inputEl:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};h.inputEl.addEventListener("input",n(t)((function(){g(name).then((function(n){return t=n.map((function(n){return"<p><b>Name</b>: ".concat(n.name,"</p>\n        <p><b>Name</b>: ").concat(n.capital,"</p>\n        <p><b>Name</b>: ").concat(n.population,"</p>\n        <p><b>Name</b>: ").concat(n.flags,"</p>\n        <p><b>Name</b>: ").concat(n.languages,"</p>")})).join(""),void(h.countryInfo.innerHTML=t);var t})).catch((function(n){return console.log(n)}))}),300))}();
//# sourceMappingURL=index.c3828d84.js.map