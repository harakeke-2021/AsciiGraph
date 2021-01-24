const app = require('./app')
const getTotalHours = app.totalProductiveHours

test('totalProductiveHours returns the total hours that had been worked.', () => {
    // Arrange
    const hours = [
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ]

    // Act
    const numberofProductiveHours = getTotalHours(hours)

    // Assert
    expect(numberofProductiveHours).toBe(14)




})