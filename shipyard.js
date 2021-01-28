import createNewSpaceship from './createNewSpaceship.js'
import createNewCrewMember from './createNewCrewMember.js'
import createNewRocket from './createNewRocket.js'
// -----------------------
// Our first section creates our functions

let launchpad = (shipPassedIn, crewForShip, rocketForPropulsion) => {
  console.log('Initiating preflight procedures')
  console.log(`Welcome aboard ${shipPassedIn.name}`)
  shipPassedIn.loadCrew(crewForShip)
  let shipCaptain = shipPassedIn.captain()
  console.log(`Your captain for this flight will be ${shipCaptain.name}\n\n-----\n\n`)
  rocketForPropulsion.addFuel(100000)
  shipPassedIn.mountPropulsion(rocketForPropulsion)
  shipPassedIn.takeoff()
}

let trainCrew = (crewArray) =>{
  let trainedCrew = crewArray.map(crewMember => {
    let member = createNewCrewMember(crewMember)
    member.trained = true
    return member
  })
  return trainedCrew
}

// -----------------------------
// Our second section uses the modules we made to create objects we can use
// we also
let shipOne = createNewSpaceship("The Defiant")
let shipTwo = createNewSpaceship("PickOne")
let crewNames = ['Warf', 'Dax', 'Sisko']
let secondCrewNames = ['Kara', 'Matt', 'Patrick']


let ourFirstRocket = createNewRocket()
// --------------------------------------
//Our third section uses the function we created in conjunction with the objects we created.
//for the first two we load them into variables, for the final we simply exectute the function
let trainedCrew = trainCrew(crewNames)
let secondTrainedCrew = trainCrew(secondCrewNames)
launchpad(shipOne, trainedCrew, ourFirstRocket)


//for extra examples you can comment these in!
// launchpad(shipTwo, secondTrainedCrew)


// launchpad(shipOne, secondTrainedCrew)
