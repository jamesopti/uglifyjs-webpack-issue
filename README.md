# Webpack4 + UglifyJS Issue

## Package Details
- webpack @4.1.1
- uglifyJS-webpack-plugin @1.2.3

## Instructions
`npm install`

`npm run build`

`node dist/bundle.js`

###Expected

```javascript
*** MAIN START ***
two
*** MAIN END ***
```

###Actual
```javascript
*** MAIN START ***
/Users/jfox/webpack_playground/dist/bundle.js:1
(function (exports, require, module, __filename, __dirname) { !function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n){console.log("*** MAIN START ***"),function(){!function(){for(var e=["hey"],n=0;n<e.length;n++)console.log("error"==(o="one")?o:bx);var o}()}(),console.log("*** MAIN END ***")}]);


ReferenceError: bx is not defined
    at /Users/jfox/webpack_playground/dist/bundle.js:1:731
    at /Users/jfox/webpack_playground/dist/bundle.js:1:741
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:744)
    at o (/Users/jfox/webpack_playground/dist/bundle.js:1:172)
    at /Users/jfox/webpack_playground/dist/bundle.js:1:579
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:588)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
```

Repeating the same steps with `webpack.mode = 'development'` shows the expected output.
