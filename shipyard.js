import createNewSpaceship from "./createNewSpaceship.js";
import createNewCrewMember from "./createNewCrewMember.js";
import createNewRocket from "./createNewRocket.js";
// YOUR CODE GOES HERE

let launchpad = (ship, crew, rocket) => {
  console.log('Initiating preflight procedures');
  console.log(`Welcome aboard the ${ship.name}`)
  ship.loadCrew(crew)
  // rocket.addFuel(3)
  ship.mountPropulsion(rocket)
  ship.propulsion.addFuel(3)
  ship.takeoff()
}

let ourShip = createNewSpaceship("Eden 0")
console.log(ourShip)

let crewNames = ["Emmanuel", "Fabio", "Alexander", "Sully", "Mathias"]

const trainCrew = (crewArray) => {
  // create our array
  let formattedCrewList = []

  // fill it with our new and updated objects
  crewArray.forEach(crewMember => {
    let crewMemberObject = createNewCrewMember(crewMember)
    crewMemberObject.trained = true
    formattedCrewList.push(crewMemberObject)
  })
  
  // return that array
  console.log(formattedCrewList)
  return formattedCrewList
}

let ourFirstRocket = createNewRocket()
console.log(ourFirstRocket)


launchpad(ourShip, trainCrew(crewNames), ourFirstRocket)
// let trainedCrew = trainCrew(crewNames)
// launchpad(ourShip, trainedCrew)
