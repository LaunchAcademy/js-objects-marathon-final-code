// YOUR CODE GOES HERE

import createNewSpaceship from "./createNewSpaceship.js"
import createNewCrewMember from "./createNewCrewMember.js"
import createNewRocket from "./createNewRocket.js"

const launchpad = (ship, trainedCrewMembers, ourFirstRocket) => {
  console.log("Initiating preflight procedures")
  console.log(`Welcome aboard the ${ship.name}!`)
  ship.loadCrew(trainedCrewMembers)
  let captain = ship.captain()
  console.log(`High-Five to captain ${captain}!`)

  //mount the rocket
  ship.mountPropulsion(ourFirstRocket)

  //Here is where we will need to call .takeoff()
  //after failing let's fuel the rocket first!
}

const ourShip = createNewSpaceship("Challenger")

const trainCrew = (names) => {
  const trainedCrew = []
  names.forEach((name) => {
    let addedCrewMember = createNewCrewMember(name)
    addedCrewMember.trained = true
    trainedCrew.push(addedCrewMember)
  })
  return trainedCrew
}

const crewNames = ["Fawaz", "Fang", "Roman"]
let trainedCrew = trainCrew(crewNames)

const ourFirstRocket = createNewRocket()
// ourFirstRocket.fire()

// //happy path
// ourFirstRocket.addFuel(100)
// ourFirstRocket.fire()

launchpad(ourShip, trainedCrew, ourFirstRocket)
