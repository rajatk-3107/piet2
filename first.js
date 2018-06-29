exports.sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!a || !b) {
            reject({
                success: false,
                msg: "Please eneter all details"
            })
        } else {
            resolve({
                success: true,
                sum: a + b
            })
        }
    })
}

exports.subtract = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!a || !b) {
            reject({
                success: false,
                msg: "Please eneter all details"
            })
        } else {
            resolve({
                success: true,
                sum: a - b
            })
        }
    })
}