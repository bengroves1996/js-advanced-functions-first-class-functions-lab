// Code your solution in this file!
const returnFirstTwoDrivers = function(list_of_drivers){ 
    let bin = []
    bin.push(list_of_drivers[0])
    bin.push(list_of_drivers[1])
    return bin
}

const returnLastTwoDrivers = function(list_of_drivers){
    let i = list_of_drivers.length
    let bin = []
    bin.push(list_of_drivers[i-2])
    bin.push(list_of_drivers[i-1])
    return bin 
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (multiplier) {
    return function(fare){
        return multiplier*fare
    }
}

const fareDoubler = function(fare){
    return fare*2
}

const fareTripler = function(fare){
    return fare*3
}

function selectDifferentDrivers(list_of_drivers, function_called){
    return function_called(list_of_drivers)
}

