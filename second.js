var add = require('./first')
    /**
     * add ={
     *  sum: fn(),
     *  subtract: sl()
     * }
     */

add.subtract(4, 5).then(data => {
    console.log(data)
}, err => {
    console.log(err)
})