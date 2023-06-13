const createNewSpaceship = (providedName) => {
  return {
    name: providedName,
    crew: [],
    propulsion: null,
    loadCrew(crewArray) {
      crewArray.forEach(crewMember => {
        // let name = crewMember.name
        // let trained = crewMember.trained
        // let { name, trained } = crewMember
        // let crewMemberName = crewMember.name
        let { name: crewMemberName } = crewMember

        console.log(`${crewMemberName} is now aboard the ${this.name}`)
        this.crew.push(crewMember)
      })
    },
    mountPropulsion(newRocket) {
      this.propulsion = newRocket
      console.log("Your new rocket has been mounted!")
    },
    takeoff() {
      // fire the propulsion drives
      // if(this.propulsion.fire() === true) {
      if(this.propulsion.fire()) {
        // if they fire, print takeoff noise
        console.log("VROOOOOOOOOOOOM 🚀")
      } else {
        // if they fail, print unsuccess message
        console.log("Your spaceship failed to take off 😢")
      }
    }
  }
}

export default createNewSpaceship