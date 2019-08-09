var fs = require('fs') ;

    fs.readdir(process.argv[2],  function (err, fileContents) {
        fileContents.forEach((file) => {
            if (file.includes('.md')) {
                console.log(file)
            }
        })
    });


    // var fs = require('fs')
    // var path = require('path')
    
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })

