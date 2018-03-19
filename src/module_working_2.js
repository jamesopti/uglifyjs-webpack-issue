(function(mod) {
  mod();
})(function() {
  function getMaxSeverity(ax, bx) {
    if (ax === "error") {
      return ax;
    } else {
      return bx;
    }
  }
  function main() {
    console.log(getMaxSeverity('one', 'two'));
  }
  main();
});
