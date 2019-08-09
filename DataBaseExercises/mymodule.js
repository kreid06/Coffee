var fs = require('fs') ;
var path = require('path');

// module.exports = function (dir, ext, cb) {
//     if (err) return console.error(err)
//         fs.readdir(dir,  function (err, fileContents) {
//             if (err) return cb(err);
//             const newArray = (fileContents.filter((file) => 
//                 path.extname(file)== `.${ext}`));
//                 cb(null, newArray);
//     })
// }

module.exports =  (dir,ext,cb) => {
    
    fs.readdir(dir, function (err, fileContents) {
        if (err) return cb(err)
        var newArray = [];
        
        fileContents.forEach((file) => {
            if (file.includes(`.${ext}`)) {
                newArray.push(file)
            } 
        })
        cb(null,newArray);
    })
}