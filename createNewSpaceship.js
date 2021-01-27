let createNewSpaceship = (name) => {
  let newSpaceShip = {
    name:name,
    crew: [],
    loadCrew(newCrewMember){
      this.crew.push(newCrewMember)
      console.log(`Hello member ${newCrewMember.name}`)
    },
    captain(){
      let random = Math.floor(Math.random() * this.crew.length)
      let crewCaptain = this.crew[random].name
      return crewCaptain
    },
    propulsion:null,
    mountPropulsion(rocketObject){
      this.propulsion = rocketObject
      console.log("propulsion mounted!")
    },
    takeoff(){
      if(this.propulsion.fire()){
        console.log('To infinity and beyond!')
      } else {
        console.log('Takeoff unsuccessful')
      }
    },
    countdown(num) {
      if (num ===0) {
        console.log("Blast off!")
      } else {
        setTimeout(function () { for (let i = num; i > 0; i-- ) {
          console.log(i))
        })
        console.log('Blast off')
      }
    }
  }
return newSpaceShip
}

export default createNewSpaceship
