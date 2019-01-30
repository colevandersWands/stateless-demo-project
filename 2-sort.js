// arrays of integers
var sort_tests = [
    {name: '[3,5,7,4,2,7,0]', args: [[3,5,7,4,2,7,0]], expected: [0,2,3,4,5,7,7]},
    {name: '[7,6,5,4,3]', args: [[7,6,5,4,3]], expected: [3,4,5,6,7]},
    {name: '[3,4,5,6,7]', args: [[3,4,5,6,7]], expected: [3,4,5,6,7]},
    {name: '[1,2,1,2]', args: [[1,2,1,2]], expected: [1,1,2,2]},
    {name: '[5]', args: [[5]], expected: [5]},
    {name: '[]', args: [[]], expected: []},
  ];
function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var ind1 = arr.length / 2;
    var ind2 = arr.length;
    var left = arr.slice(0, ind1);
    var right = arr.slice(ind1, ind2);
    var rec_l = sort(left);
    var rec_r = sort(right);
    var built = merge(rec_l, rec_r);
    return built;
  };
};

// in-place documentation
console.groupCollapsed('%c sort( arr ) -> arr', 'font-weight:bold');
console.log('takes in an array of numbers, returns a sorted array of numbers');
console.log(sort.toString());
console.log(sort_tests);
console.groupEnd();
run_tests(sort, sort_tests, false);