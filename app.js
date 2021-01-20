const asciichart = require('asciichart')
const { rawListeners } = require('process')

const readline = require('readline')

InhouseHours = [8, 8, 8, 8, 8, 0, 0]

ExpectHours = [9, 9, 9, 9, 9, 5, 5]

//the readline config

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//colour config

const ExpectHoursChart =
    config = {
        colors: [
        asciichart.lightcyan
        ]
    }

const InputHoursChart = 
config = {
    colors: [
        asciichart
    ]
}

//total hours

function totalProductiveHours(arr){

    let totalHours = 0

    for(i = 0; arr.length > i; i++){
        totalHours += arr[i]
    }
    
    return totalHours
}

//add onto an array


//the extend Arrays function is so that it may duplicate the indexes inside an array and returns a new larger array.
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
//once we have the users array we will have to run this over it
//so that the array ios presentable.

UserArray = []



const UserWeekData = rl.on('line', (input) => {
    const regex = new RegExp('^[0-9]+$')
    try{
        if(regex.test(input)){
            const inputNumber = Number(input)//ok now that I have my input stored as a number I would like to add it to the array
        }
        else{
            throw new Error('Please enter a number next time.')
        }
        if(Number(input) > 24)
        {
            throw new Error('I am sorry but I can not allow for you to work more than 24 hours in a single day.')
        }
        UserArray.push(input)
    }
    catch(err){
        console.log(err)
    }
})