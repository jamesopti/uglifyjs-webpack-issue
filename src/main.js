console.log('*** MAIN START ***');

try {
  // Should console.log "two"
  require('./module_broken');
} catch(err) {
  console.log('Testing module_broken error:');
  console.log(err);
  console.log('\n\n');
}

try {
  // Should console.log "two"
  require('./module_working_1');
  console.log('module_working_1 OK \n\n');
} catch(err) {
  console.log(err);
}

try {
  // Should console.log "two"
  require('./module_working_2');
  console.log('module_working_2 OK \n\n');
} catch(err) {
  console.log(err);
}

console.log('*** MAIN END ***');
