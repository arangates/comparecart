if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_z1b1eyAg2XYXFIevCejJ/_buildManifest.js",revision:"0ded160ec5c758936e4f8c9f2afb7e3d"},{url:"/_next/static/_z1b1eyAg2XYXFIevCejJ/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/commons.a6380e44e1e61e829588.js",revision:"3b70f12312b2ed6cf89e85a45d56004a"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.967c64c909a544bf93bf.js",revision:"5d7dc9f159fe02619aa43e93ada855d0"},{url:"/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/main-fdbc5bac9bf812c50bef.js",revision:"84b77c59bd96553fcc574e47bc03fb95"},{url:"/_next/static/chunks/pages/_app-6ef0e7c22cdf6864df33.js",revision:"554e6e9d58cba924b58c1723716dac02"},{url:"/_next/static/chunks/pages/_error-f50b9ee345909a909d63.js",revision:"c1ac48d476390b75889e187f7dfb5c0a"},{url:"/_next/static/chunks/pages/index-ecf861fc46980e4163c4.js",revision:"cbffd35cf4860616aeb7e0f818102750"},{url:"/_next/static/chunks/polyfills-b4c9a36a8d9b649404fa.js",revision:"a48d4613d0d8a928054ac053d572d8b2"},{url:"/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/2344944d8f6b3174d57a.css",revision:"8eca0cf6505d0ee7506a729c5607c762"},{url:"/favicon.ico",revision:"e78c7079ca7b991b283c29e6a7af106c"},{url:"/logo.png",revision:"de6a4582054cceb76b892e513a205b41"},{url:"/logo192.png",revision:"43b0d8380e5d43a391ff2e5eff8f3b07"},{url:"/logo512.png",revision:"8fdd769467795f5b19240873f36a06de"},{url:"/manifest.webmanifest",revision:"c8c820d4b0f0400b857d85796a30025c"},{url:"/maskable_logo1024.png",revision:"366a56da8c3d06dadcfb31e8f6559b79"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
