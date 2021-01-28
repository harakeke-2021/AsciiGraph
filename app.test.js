const app = require('./app')
const getTotalHours = app.totalProductiveHours
const getNumberCheck = app.CheckForNumber

test('totalProductiveHours returns the total hours that had been worked.', () => {
    //test total productive hours.
    // Arrange.
    const hoursInArray = [
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ]

    // Act.
    const numberofProductiveHours = getTotalHours(hoursInArray)

    // Assert.
    expect(numberofProductiveHours).toBe(14)


})

test('testing number check', () => {

    //test extend array.
    // Arrange.
    const input1 = 29
    const input2 = '6'
    const input3 = 12
    const input4 = 900

    // Act.
    const inputTesting1 = getNumberCheck(input1, 24)
    
    // Assert.
    console.log(inputTesting1)
    
    expect(inputTesting1).toStrictEqual(new Error('I am sorry but I can not allow for you to work more than 24 hours in a single day.'))
      
})



    //test push to array.

    //test increment limit.

    //test change at limit.

    //test display date.
