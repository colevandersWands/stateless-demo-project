console.groupCollapsed(' some compositions');


// strings
var str_identity_tests = [
    {name: 'asdf', args:['asdf'], expected: 'asdf'},
    {name: 'aA', args:['aA'], expected: 'aA'},
    {name: 'Aa', args:['Aa'], expected: 'Aa'},
  ];
function str_identity(str) {
  return debed(embed(str));
};
// in-place documentation
console.groupCollapsed('%c str_identity( string ) -> string', 'font-weight:bold');
console.log('takes in a string and returns the same string by embedping then debedping it');
console.log(str_identity.toString());
console.log(str_identity_tests);
console.groupEnd();
run_tests(str_identity, str_identity_tests, false);


// strings
var arr_identity_tests = [
  {name: '[83, 69, 82, 82]', args: [[83, 69, 82, 82]], expected: [83, 69, 82, 82]},
  {name: '[32, 80, 66, 81, 82]', args: [[32, 80, 66, 81, 82]], expected: [32, 80, 66, 81, 82]},
  {name: '[32, 67, 86, 77, 77, 78, 33]', args: [[32, 67, 86, 77, 77, 78, 33]], expected: [32, 67, 86, 77, 77, 78, 33]},
];
function arr_identity(str) {
  return embed(debed(str));
};
// in-place documentation
console.groupCollapsed('%c arr_identity( arr[charcodes] ) -> arr[charcodes]', 'font-weight:bold');
console.log('takes in an arr[charcodes] and returns the same arr after debedping & embedping it');
console.log(arr_identity.toString());
console.log(arr_identity_tests);
console.groupEnd();
run_tests(arr_identity, arr_identity_tests, false);


// strings
var full_thing_tests = [
    {name: 'asdf', args:['asdf'], expected: 'adfs'},
    {name: 'aA', args:['aA'], expected: 'Aa'},
    {name: 'Aa', args:['Aa'], expected: 'Aa'},
  ];
function full_thing(str) {
  return debed(sort(embed(str)));
};
// in-place documentation
console.groupCollapsed('%c full_thing( string ) -> string', 'font-weight:bold');
console.log('takes in a string and returns the letters sorted by charcode');
console.log(full_thing.toString());
console.log(full_thing_tests);
console.groupEnd();
run_tests(full_thing, full_thing_tests, false);


console.groupEnd();