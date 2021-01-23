const { test, expect } = require("@jest/globals")

const app = require('./app')


//Return total 

test('Get total contents from an array', () => {
    const listeners = [
        12,
        23,
        41,
        789,
        312,
        12312312,
    ]
    const listenersArrayTotal = app.totalProductiveHours(listeners)


})




//I will need to run off on my own and do some quick research on jest