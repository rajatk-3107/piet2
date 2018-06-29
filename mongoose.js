var mongoose = require('mongoose')
var dbPerson = require('./models/person')

mongoose.connect('mongodb://localhost/abc', (err, data) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Databse connected")
    }
})


// new dbPerson({
//     name: "Zenways",
//     age: 10,
//     fathersName: "djfj",
//     phone: [8800734046],
//     active: true,
//     email: "abc@abc.com",
//     createdOn: new Date(),
//     address: {
//         line1: 'sbdj',
//         line2: "djhsjf",
//         city: "sdj",
//         state: "dhvkd",
//         pincode: 122018,
//         country: "India"
//     }
// }).save((err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Data saved.- ---", data)
//     }
// })

// dbPerson.find({}, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

dbPerson.findOneAndUpdate({ email: "abc@abc.com" }, { $set: { age: 45 } }, (err, uppdated) => {
    if (err) {
        console.log(err)
    } else {
        console.log("data updated")
    }
})