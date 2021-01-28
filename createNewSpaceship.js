let createNewSpaceship = (name) =>{
  let newShipObject = {
    name,
    crew: [],
    rocket:null,
    loadCrew(crewArray){
      crewArray.forEach(member => {
        this.crew.push(member)
        console.log(`${member.name} has joined the crew!`)
      })
    },
    captain(){
      let num = Math.floor(Math.random() * this.crew.length)
      return this.crew[num]
    },
    mountPropulsion(rocketObject){
      this.propulsion = rocketObject
      console.log("Propulsion has been mounted")
    },
    takeoff(){
      if (this.propulsion.fuel > 0 ){
      this.propulsion.fire()
      console.log("Up and Atom!")
    } else {
      console.log("Not enough fuel, we could not launch.")
    }
    }
  }
  return newShipObject
}

export default createNewSpaceship