// arrays of sorted integers, with or without duplicates
var uniquify_tests = [
    {name: '[3,3,3,3,3,3,3]', args: [[3,3,3,3,3,3,3]], expected: [3]},
    {name: '[0,0,1,1,4,5]', args: [[0,0,1,1,4,5]], expected: [0,1,4,5]},
    {name: '[3,4,5,6,7]', args: [[3,4,5,6,7]], expected: [3,4,5,6,7]},
    {name: '[76,76,89,90,92,92]', args: [[76,76,89,90,92,92]], expected: [76,89,90,92]},
    {name: '[5]', args: [[5]], expected: [5]},
    {name: '[]', args: [[]], expected: []},
  ];
function uniquify(arr) {
  const no_duplicates = [];
  let last_unique_number;

  for (const number of arr) {
    if (number !== last_unique_number) {
      no_duplicates.push(number);
      last_unique_number = number;
    };
  };
  
  return no_duplicates;
};

// in-place documentation
console.groupCollapsed('%c uniquify( arr ) -> arr', 'font-weight:bold');
console.log('takes in an array of sorted numbers, returns an array with duplicates removed');
console.log(uniquify.toString());
console.log(uniquify_tests);
console.groupEnd();
run_tests(uniquify, uniquify_tests, false);