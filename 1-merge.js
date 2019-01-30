// two sorted arrays
var merge_tests = [
    {name: '[3,4,5], [6,7,8]', args:[[3,4,5],[6,7,8]], expected: [3,4,5,6,7,8]},
    {name: '[3,4,6], [5,7,8]', args:[[3,4,6],[5,7,8]], expected: [3,4,5,6,7,8]},
    {name: '[6,7,8], [3,4,5]', args:[[6,7,8],[3,4,5]], expected: [3,4,5,6,7,8]},
    {name: '[4,6,8], [5,7,9]', args:[[4,6,8],[5,7,9]], expected: [4,5,6,7,8,9]},
  ];
function merge(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2.concat(arr1);
  } else if (arr2.length === 0) {
    return arr1.concat(arr2);
  } else {
    if (arr1[0] < arr2[0]) {
      return [arr1.shift()].concat(merge(arr1, arr2));
    } else {
      return [arr2.shift()].concat(merge(arr1, arr2));
    };
  }
};

// in-place documentation
console.groupCollapsed('%c merge( arr1, arr2 ) -> arr', 'font-weight:bold');
console.log('takes in two sorted arrays of numbers and sort-merges them');
console.log(merge.toString());
console.log(merge_tests);
console.groupEnd();
run_tests(merge, merge_tests, false);


//  built this to debug while developing
//  it looks like more work, but makes debugging a breeze once you're used to it
//  try uncommenting this and using the logs to find my mistake
// function merge(arr1, arr2, _log) {               var log = {0:{1: arr1.slice(), 2:arr2.slice()}};
//   var base_1 = arr1.length === 0;               
//   var base_2 = arr2.length === 0;                log[1] = {b1: base_1, b2: base_2};
//   if (base_1) {
//     var turn_1 = arr2.concat(arr1);              log[2] = {turn: turn_1};
//     if (!_log) { return turn_1;  }        else  { return {result:turn_1, log:log}; }
//   } else if (base_2) {
//     var turn_2 = arr1.concat(arr2);              log[2] = {turn: turn_2};
//     if (!_log) { return turn_2;  }        else  { return {result:turn_2, log:log}; }
//   } else {
//     if (arr1[0] < arr2[1]) {                     log[3] = 'arr1';
//       var item = arr1.shift();                   log[4] = item;
//       var broke = arr1;                          log[5] = broke.slice();
//       var recursed = merge(arr1,arr2,_log);      log[6] = recursed.log;
//                                                  if(_log) {recursed = recursed.result};
//       var built = [item].concat(recursed);       log[7] = built.slice();
//       if (!_log) { return built;  }       else  { return {result:built, log:log}; };

//     } else {                                     log[3] = 'arr2';
//       var item = arr2.shift();                   log[4] = item;
//       var broke = arr2;                          log[5] = broke.slice();
//       var recursed = merge(arr1,arr2,_log);      log[6] = recursed.log; 
//                                                  if(_log) {recursed = recursed.result};
//       var built = [item].concat(recursed);       log[7] = built.slice();
//       if (!_log) { return built;  }       else  { return {result:built, log:log}; };
//     };
//   }
// };
// run_tests(merge, merge_tests, true);