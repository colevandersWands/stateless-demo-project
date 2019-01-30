function run_tests(_target, _cases, _log) {
  for (let t_case of _cases) {
    
    // process user input (test cases)
    const expected = t_case.expected;
    let args = JSON.parse(JSON.stringify(t_case.args));
    
    // perform core logic (run test case and assert)
    const actual = _target(...args);
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual) && typeof actual === 'number';
    } else {
      pass = actual === expected;
    };

    // communicate result to developer 
    if (!pass && _log) {
      args = JSON.parse(JSON.stringify(t_case.args));
      const report = _target(...args, true);
      console.groupCollapsed(`%c  ${t_case.name}: \n`, 'color:orange');
      console.log(`%c    actual: ${typeof report.result},`, 'color:red', report.result);
      console.log(`%c    expected: ${typeof expected},`, 'color:blue', expected);
      console.log(`   log: `, report.log);
      console.groupEnd();
    } else if (!pass) {
      console.groupCollapsed(`%c  ${t_case.name}: \n`, 'color:orange');
      console.log(`%c    actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c    expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};
// in-place documentation
console.groupCollapsed('%c run_tests( function, arr[test cases] [, boolean] ) -> (prints test results)', 'font-weight:bold');
  console.log(` 
   runs the function against it's test cases
    failing test cases will be logged along with actual & expected values
   set the boolean flag to true if your function is self-logging
    run_tests will run the failing cases once more with the _log flag set true
    it will then print the test case, actual & expected, as well as the debug log
  `);
  console.log(run_tests.toString());
  
  console.groupCollapsed('-- example --');
    console.log(' add_3_nums(num, num, num [, bool]) -> num OR {result:num, log}');
    const add_3_nums_tests = [
        {name: '1,2,3 -> 6', args:[1,2,3], expected: 6},
        {name: '1,2,3 -> 7', args:[1,2,3], expected: 7},
      ];
    function add_3_nums(a, b, c, _log) {    const log = [{a,b,c}];
      const step_1 = a + b;                 log.push({step_1});
      const step_2 = step_1 + c;            log.push({step_2});

      if (!_log) {
        return step_2;
      }                              else {
                                            return {result:step_2, log};
                                          };
    };
    console.log(add_3_nums.toString());
    console.log(add_3_nums_tests);
    console.log('is the function or the test case wrong?');
    run_tests(add_3_nums, add_3_nums_tests, true);
  console.groupEnd();
console.groupEnd();










