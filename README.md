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
ReferenceError: bx is not defined
    at /Users/jfox/webpack_playground/dist/bundle.js:1:699
    at /Users/jfox/webpack_playground/dist/bundle.js:1:709
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:712)
    at e (/Users/jfox/webpack_playground/dist/bundle.js:1:172)
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:770)
    at e (/Users/jfox/webpack_playground/dist/bundle.js:1:172)
    at n (/Users/jfox/webpack_playground/dist/bundle.js:1:579)
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:588)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
*** MAIN END ***
```

Repeating the same steps with `webpack.mode = 'development'` shows the expected output.
