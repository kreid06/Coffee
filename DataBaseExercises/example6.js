
// var mymodule = require('./mymodule.js')  

// mymodule(process.argv[2], process.argv[3], (err, data) => {
//     if (err) return err;
//     data.forEach(element => {
//         console.log(element)
//     });
// });

var mymodule = require('./mymodule.js')  
var path = require('path');

mymodule(process.argv[2],process.argv[3], (err,data) => {
    if (err) return err;
    data.forEach(element => {
        console.log(element)
    });
})