import createNewSpaceship from "./createNewSpaceship.js"
import createNewCrewMember from "./createNewCrewMember.js"
import rocket from "./createNewRocket.js"

const launchpad = (ship, crewMembers, ourFirstRocket) => {
  console.log("Initiating preflight procedures")
  console.log(`Welcome aboard the ${ship.name}!`)
  ship.loadCrew(crewMembers)
  ship.captain()
  ship.mountPropulsion(ourFirstRocket)
  ship.propulsion.addFuel(5)
  ship.takeoff()
}

const ourShip = createNewSpaceship("U.S.S. Enterprise")

const crewNames = ["Johnny", "Suzie", "Maylene"]

const trainCrew = (crew) => {
  const members = crew.map((member) => {
    const currentMember = createNewCrewMember(member)
    currentMember.trained = true
    return currentMember
  })
  return members
}

const crew = trainCrew(crewNames)
const ourFirstRocket = rocket()

launchpad(ourShip, crew, ourFirstRocket)
