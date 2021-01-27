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

    //test extend array. Expectations:
    // Arrange.
    const input1 = 29
    const input2 = '6'
    const input3 = 12
    const input4 = 900

    // Act.
    const inputTesting1 = getNumberCheck(input1, 24)
    const inputTesting2 = getNumberCheck(input2, 24)
    const inputTesting3 = getNumberCheck(input3, 24)
    const inputTesting4 = getNumberCheck(input4, 800)
    
    // Assert.
    
    console.log(inputTesting1)
    expect(inputTesting1).toThrow('Please enter a number next time.')

})
    // function CheckForNumber(input, limit)
    // {
    //       const regex = new RegExp('^[0-9]+$')
    //         if(!regex.test(input)){
    //         throw 'Please enter a number next time.'
    //       }
    //       else if(input > limit)
    //       {
    //           throw 'I am sorry but I can not allow for you to work more than 24 hours in a single day.'
    //         }
    //       else {
    //         return Number(input)
    //       }
    // }

    //test check for numbers. Expectations: takes in a number and a limit and will return an error depending on if the limit is reached for not and depending on the datatype that it receives



    //test push to array. Expectations:

    //test increment limit. Expectations:

    //test change at limit. Expectations:

    //test display date. Expectations:

    //there is no way that I can think of at the moment for how we could test for display graph.
