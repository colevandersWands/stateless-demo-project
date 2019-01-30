function display_result() {                                 var new_entry = {};
  // read and process user input
  var input = document.getElementById('input').value;       new_entry['1. input'] = input;

  // pass user input through core logic
  var embedded = embed(input);                              new_entry['2. embedded'] = embedded;
  var sorted = sort(embedded);                              new_entry['3. sorted'] = sorted;
  var result = uniquify(sorted);                            new_entry['4. result'] = result;
  var debedded = debed(result);                             new_entry['5. debedded'] = debedded;

  // write final computation to user
  var output = document.getElementById('cheated');           log.push(new_entry);
  output.innerHTML = debedded;
};

// in-place documentation
console.groupCollapsed('%c disply_result() -> (displays result to dom)', 'font-weight:bold');
console.log('reads user input from dom, passes it through core logic, writes result to dom');
console.log(display_result.toString());
console.groupEnd();
