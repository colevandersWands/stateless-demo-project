var log = [];
var entry_schema = {
    '1. input': 'string from text input', 
    '2. mapped': ['unsorted charcodes'],
    '3. result': ['sorted charcodes'],
    '4. demapped': 'string of sorted letters' 
  };

console.groupCollapsed(' log: array of objects recording user actions')
console.log(' each time the handler is called, a new entry is pushed into the log');
console.log('   this can happen by pressing the \'sort letters\' button');
console.log('   or by calling \'handler()\' directly from the console');
console.log(' to review the log, simply enter \'log\' into the console');
console.log(' all log entries are of this form: ', entry_schema);
console.groupEnd();