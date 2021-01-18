const asciichart = require('asciichart')
const { rawListeners } = require('process')

const readline = require('readline')

InhouseHours = [8, 8, 8, 8, 8, 0, 0]

ExpectHours = [9, 9, 9, 9, 9, 5, 5]



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

UserArray = []
const UserWeekData = rl.on('line', (input) => {
    try{
        numInput = Number(input)//1 error for when they are not using the number datatype
        if(numInput > 24)
        //one error for when the user is over 24
        {
            throw error
        }
        UserArray.push(input)
        console.log(UserArray)
    }
    catch(err){
        console.log('the user is only allowed to give us a number as input' + err.stack)

    }
})