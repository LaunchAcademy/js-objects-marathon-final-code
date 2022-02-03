const createNewSpaceship = (name) => {
  return {
    name: name,
    crew: [],
    propulsion: null,

    loadCrew(trainedCrew) {
      trainedCrew.forEach((crewMember) => {
        const { name } = crewMember
        console.log(`${name} is now aboard the ${this.name}.`)
        this.crew.push(crewMember)
      })
    },
    captain() {
      const randomNumber = Math.floor(Math.random() * this.crew.length)
      console.log(`Today's captain is ${this.crew[randomNumber].name}`)
    },
    mountPropulsion(rocket) {
      this.propulsion = rocket
      console.log(`The propulsion mounted!`)
    },
    takeoff() {
      if (this.propulsion.fire()) {
        console.log(`VROOM`)
      } else {
        console.log("Takeoff was unsuccessful.")
      }
    },
  }
}

export default createNewSpaceship
