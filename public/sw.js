if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ACeema7_s6WBOGtJk_K5t/_buildManifest.js",revision:"e26326a0311cfb71a7f58bbf2f12dcd2"},{url:"/_next/static/ACeema7_s6WBOGtJk_K5t/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/0aab2981cd0061ad8c4e8c1d91425daab714ce47.82508f87331e2c5d9ab5.js",revision:"4a8095a9d6e89f8c7e039b0bcd5869fe"},{url:"/_next/static/chunks/commons.5f7a56ae4f71e081c0df.js",revision:"8af50286c54c1b2ade002fb8d90b65b7"},{url:"/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/main-f39a0f3a719290c2512d.js",revision:"e3c814e35def123f2f6336f7ae22e8ee"},{url:"/_next/static/chunks/pages/_app-de224651a79788941dd4.js",revision:"3431ca3c08a29dbc699dcd7506e31f1c"},{url:"/_next/static/chunks/pages/_error-f50b9ee345909a909d63.js",revision:"c1ac48d476390b75889e187f7dfb5c0a"},{url:"/_next/static/chunks/pages/compare-7cf8ce8d8c5a4e0e1972.js",revision:"6af4892e35d26a49d648d3e0f7d11adb"},{url:"/_next/static/chunks/pages/index-2399c4ee3d5aded40a19.js",revision:"af22022d846b10900401f895d948c19e"},{url:"/_next/static/chunks/polyfills-e0a799dda1546678fa28.js",revision:"687cf193b5e4ad4234d20b1e58db34c1"},{url:"/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/6960370ede2781717ab1.css",revision:"1cd2870bb672d1afceeab95cebe19f89"},{url:"/favicon.ico",revision:"e78c7079ca7b991b283c29e6a7af106c"},{url:"/logo.png",revision:"de6a4582054cceb76b892e513a205b41"},{url:"/logo192.png",revision:"43b0d8380e5d43a391ff2e5eff8f3b07"},{url:"/logo512.png",revision:"8fdd769467795f5b19240873f36a06de"},{url:"/manifest.webmanifest",revision:"c8c820d4b0f0400b857d85796a30025c"},{url:"/maskable_logo1024.png",revision:"366a56da8c3d06dadcfb31e8f6559b79"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
