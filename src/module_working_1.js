// FIX: Remove outer IIFE used for module resolution (AMD vs CommonJS vs Global)
(function() {
  function getMaxSeverity(ax, bx) {
    if (ax === "error") {
      return ax;
    } else {
      return bx;
    }
  }
  function main() {
    var arr = ['hey'];
    for (var i = 0; i < arr.length; i++) {
      console.log(getMaxSeverity('one', 'two'));
    }
  }
  main();
})();
