const asciichart = require('asciichart')
const { rawListeners } = require('process')

const readline = require('readline')

InhouseHours = [8, 8, 8, 8, 8, 0, 0]

ExpectHours = [9, 9, 9, 9, 9, 5, 5]

function totalProductiveHours(arr){

    let totalHours = 0

    for(i = 0; arr.length > i; i++){
        totalHours += arr[i]
    }
    
    return totalHours
}

function extendArray(arr, amount){
    const mod_arr = []
    for (i = 0; arr.length > i; i++)
    {
        for(ie = 0; amount > ie; ie++)
        {
            mod_arr.push(arr[i])
        }
    }    
    return mod_arr
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function CheckForNumber(input, limit)
{
  try{

    const regex = new RegExp('^[0-9]+$')
    if(!regex.test(input)){
      throw 'Please enter a number next time.'
    }
    else if(input > limit)
    {
      throw 'I am sorry but I can not allow for you to work more than 24 hours in a single day.'
    }
    else {
      return Number(input)
    }
  } catch (e) {
    return Error(e)
  }
}

function pushtoArray(arr, input) {
  try {

    arr.push(input)
  }
  catch (err) {
    console.error(err)
    rl.close()
  }
}

function incrementLimit(readlineLoop) {
  readlineLoop = readlineLoop + 1
  if (readlineLoop >= 7) {
  }
  return readlineLoop
}

function changeAtLimit(readlineLoop) {
  if (readlineLoop >= 7)
  {
    return false
  }
  else
  {
    return true
  }
}

function displayGraph(arr) {
    console.log (asciichart.plot (arr))
}

function displayDate(arr, day)
{
   if (day >= 7)
   {
     console.log(arr[day])
   }
   else
   {
     console.log('How many productive hours have you had on ' + arr[day])
   }
}

function GetProductiveHoursFromUser()
{
  const message = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'PRESS ANYTHING TO CONTINUE']
  const UserArray = []
  const extendedArray = []

  let readlineLoop = 0
  let stageForInput = true

displayDate(message, readlineLoop)

rl.on('line', (input) => {
    if (stageForInput === true){
      const inputNumber = CheckForNumber(input, 24)
      if (typeof inputNumber === error){
        console.error(inputNumber)
      }


      pushtoArray(UserArray, inputNumber)
      readlineLoop = incrementLimit(readlineLoop)
      stageForInput = changeAtLimit(readlineLoop)
      displayDate(message ,readlineLoop)
    }
    else{
      const extendedArray = extendArray(UserArray, 3)
      console.log('these are all the hours you have worked hard towards your goals this week.')
      displayGraph(extendedArray)
      console.log('You worked a total of ' + totalProductiveHours(UserArray) + ' productive hours this week.')
      rl.close()
    }
  })
}


GetProductiveHoursFromUser()

module.exports = {
  totalProductiveHours,
  CheckForNumber
}