const createNewSpaceship = (name) => {
  const newSpaceship = {
    name: name,
    crew: [],
    propulsion: null,
    mountPropulsion(rocket) {
      this.propulsion = rocket
      console.log("Propulsion has been mounted");
    },
    loadCrew(arrayCrewMembers) {
      for (let i = 0; i < arrayCrewMembers.length; i++) {
        const crewMember = arrayCrewMembers[i]
        // crewMember = {name: "", trained: true}
        const {name} = crewMember
        this.crew.push(crewMember)
        console.log(`${name} aboard the ${this.name}`);
      }
    },
    captain () {
      let randNum = Math.floor(Math.random() * this.crew.length)
      return this.crew[randNum].name
    },
    takeoff() {
      //Fires the propulsion drive
        // if it fires successfully print a load takeoff noise
        //Otherwise print it was unsuccessfully.
        
    }
  }
  return newSpaceship
}

export default createNewSpaceship
