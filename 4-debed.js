// arrays of charcodes
var debed_tests = [
  {name: 'SERR', args: [[83, 69, 82, 82]], expected: 'SERR'},
  {name: ' PBQR', args: [[32, 80, 66, 81, 82]], expected: ' PBQR'},
  {name: ' CVMM!', args: [[32, 67, 86, 77, 77, 33]], expected: ' CVMM!'},
];
function debed(arr) {
  var de_charred = [];
  for (var i = 0; i < arr.length; i++) {
    de_charred.push(String.fromCharCode(arr[i]));
  };

  var de_bedded = de_charred.join('');

  return de_bedded;
};

// in-place documentation
console.groupCollapsed('%c debed( arr[charcodes] ) -> string', 'font-weight:bold');
console.log('takes in an array of charcodes, returns the corresponding string');
console.log(debed.toString());
console.log(debed_tests);
console.groupEnd();
run_tests(debed, debed_tests, false);