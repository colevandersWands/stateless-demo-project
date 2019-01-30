function guess_it() {                                        var new_entry = {};
  // read and process user input
  var arg = document.getElementById('input').value;         new_entry['1. arg'] = arg;
  var expected = document.getElementById('guess').value;    new_entry['2. expected'] = expected;

  // pass user input through core logic
  var actual = debed(uniquify(sort(embed(arg))));           new_entry['3. actual'] = actual;
  var correct = expected === actual;                        new_entry['4: correct'] = correct;

  /* tell user it worked */                                 log.push(new_entry  );
  var output = document.getElementById('output');
  if (correct) {
    output.innerHTML = 'correct!';
    output.style.backgroundColor = 'green';
  } else {
    output.innerHTML = 'try again';
    output.style.backgroundColor = 'orange';
  };
};

// in-place documentation
console.groupCollapsed('%c guess_it() -> (asserts user guess against actual charecters)', 'font-weight:bold');
console.log('reads user input from dom, calculates the actual result, asserts against the guess, displays to user');
console.log(guess_it.toString());
console.groupEnd();
