# Webpack4 + UglifyJS Issue

## Package Details
- webpack @4.1.1
- uglifyJS-webpack-plugin @1.2.3

## Instructions
`npm install`

`npm run build`

`node dist/bundle.js`

### Expected

```javascript
*** MAIN START ***
Testing module_broken error:
two
module_broken OK

two
module_working_1 OK


two
module_working_2 OK

two
two
module_working_3 OK

*** MAIN END ***
```

### Actual
```javascript
*** MAIN START ***
Testing module_broken error:
ReferenceError: bx is not defined
    at /Users/jfox/webpack_playground/dist/bundle.js:1:892
    at /Users/jfox/webpack_playground/dist/bundle.js:1:902
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:905)
    at e (/Users/jfox/webpack_playground/dist/bundle.js:1:172)
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:963)
    at e (/Users/jfox/webpack_playground/dist/bundle.js:1:172)
    at console.log.r (/Users/jfox/webpack_playground/dist/bundle.js:1:579)
    at Object.<anonymous> (/Users/jfox/webpack_playground/dist/bundle.js:1:588)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)


two
module_working_1 OK


two
module_working_2 OK

two
two
module_working_3 OK
```

Repeating the same steps with `webpack.mode = 'development'` shows the expected output.
