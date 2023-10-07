// Code your solution in this file!


const returnFirstTwoDrivers = function(divers){
    return divers.slice(0,2)
}

const returnLastTwoDrivers =  function(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (fare) => {
    return (ride) => {return fare*ride}
}

const fareDoubler = (fare) => {return fare*2}
const fareTripler = (fare) => {return fare*3}

const selectDifferentDrivers = (arrayOfDrivers, randonFunction) => {
    if (randonFunction === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if ( randonFunction === returnLastTwoDrivers ){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}