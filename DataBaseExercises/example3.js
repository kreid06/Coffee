var fs = require('fs')  
var buf = fs.readFileSync(process.argv[2])
var string = buf.toString()
var numberLines = string.split('\n')
console.log(numberLines.length -1)