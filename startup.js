var bundlePath = './build/app.js';

if(typeof process !== 'undefined' && process.env.NODE_ENV === 'dev') {

    bundlePath = 'http://localhost:8080/build/app.js';
}

var bundleScriptEl = document.createElement('script');
bundleScriptEl.src = bundlePath;
document.currentScript.parentNode.insertBefore(bundleScriptEl, document.currentScript);
