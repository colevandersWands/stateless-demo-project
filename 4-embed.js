var embed_tests = [
  {name: 'SERR', args: ['SERR'], expected: [83, 69, 82, 82]},
  {name: ' PBQR', args: [' PBQR'], expected: [32, 80, 66, 81, 82]},
  {name: '" CVMMN!" (1)', args: [' CVMMN!'], expected: [32, 67, 86, 77, 77, 78, 33]},
];
// define an embedding strategy from user-focused string-space to computation-focused arrays of numbers
//  a natural theoretical progression would be to study mathematical sets and structure-preserving mappings
function embed(str) {
  var split_str = str.split('');

  var embeded_arg = [];
  for (var i = 0; i < split_str.length; i++) {
    embeded_arg.push(split_str[i].charCodeAt(0));
  };

  return embeded_arg;
};

// in-place documentation
console.groupCollapsed('%c embed( string ) -> arr[charcodes]', 'font-weight:bold');
console.log('takes in a string and embeds it to an array of charcodes');
console.log(embed.toString());
console.log(embed_tests);
console.groupEnd();
run_tests(embed, embed_tests, false);