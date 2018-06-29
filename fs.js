const fs = require('fs')

fs.appendFile('xyz.txt', 'hjdvjc', (err, data) => {
    if (err) {
        console.log("File not created")
    } else {
        console.log("File saved")
    }
})

// fs.open('abc.txt', 'wff', (err, data) => {
//     if (err) {
//         console.log("File not created")
//     } else {
//         console.log("File saved")
//     }
// })

fs.unlink('abc.txt', (err) => {
    if (!err) {
        console.log("File deleted")
    }
})