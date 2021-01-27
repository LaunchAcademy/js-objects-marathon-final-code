import createNewSpaceship from './createNewSpaceship.js'
import createNewCrewMember from './createNewCrewMember.js'
import createNewRocket from './createNewRocket.js'

let launchpad = (ship, crewMembers, rocket) => {
  console.log('Initiating preflight procedures');
  // we use `.name` to get the name attribute of our ship
  console.log(`Welcome aboard the ${ship.name}`);
  // 4. we take that same array of crewMember objects
  // and load them into our ship's crew
  ship.loadCrew(crewMembers);
  const randomCaptain = ship.captain()
  // console.log("randomCaptain", randomCaptain);
  console.log(`The captein of the crew is ${randomCaptain.name}`)

  // mount the rocket onto our ship
  rocket.addFuel(2)
  ship.mountPropulsion(rocket)
  ship.takeoff()
}

let ourShip = createNewSpaceship("Cool Ship");


let trainCrew = (nameStrings) => {
  let arrayOfCrewMembers = []
  nameStrings.forEach((person) => {
    // console.log(person);
    let crewMember = createNewCrewMember(person)
    crewMember.trained = true
    // console.log(crewMember);
    //  crewMember.trained = !crewMember.trained
    arrayOfCrewMembers.push(crewMember)
    // console.log(arrayOfCrewMembers);
  })
  return arrayOfCrewMembers
}


// 1. we start with an array of names
let crewNames = ["ashlyn", "bri", "max"]
// 2. we use that array of names to create an array of crewMember objects
// using the `trainCrew` method
const trainedCrew = trainCrew(crewNames);

// create a new rocket
let ourFirstRocket = createNewRocket();

// 3. we hand the array of crewMember objects in to `launchpad`
// hand the rocket into our function
launchpad(ourShip, trainedCrew, ourFirstRocket);

