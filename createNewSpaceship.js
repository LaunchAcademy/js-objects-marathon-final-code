// let createNewSpaceship = (name) => {
//   return {
//     name
//   }
//   { name: name }
// }


// createNewSpaceship("Cool Ship")
// {
//   name: "Cool Ship"
// }

// createNewSpaceship("Serenity")
// {
//   name: "Serenity"
// }

// "name" is the key, "providedName" is the value
// "name" could also be called an attribute or property of the object

let createNewSpaceship = (providedName) => {
  return {
    name: providedName,
    crew : [],
    propulsion: null,
    loadCrew(arrayOfCrewMemberObjects) {
      // 5. We take the array of crewMember objects and add them
      // into our spaceship's `crew` array

      // console.log("arrayOfCrewMemberObjects", arrayOfCrewMemberObjects);
      // console.log("this.crew", this.crew);
      arrayOfCrewMemberObjects.forEach((person) => {
        // console.log("person", person);
        this.crew.push(person);
        // console.log("this.crew", this.crew);
        let { name } = person;
        console.log(`${name} is now aboard the ${this.name}.`);
        // let { name: crewName } = person;
        // console.log(`${crewName} is now aboard the ${this.name}.`);
      })
    },
    captain() {
      console.log("finding a random captain");
      const crewIndex = Math.floor(Math.random() * this.crew.length)
      return this.crew[crewIndex]
    },
    mountPropulsion(rocketObject) {
      this.propulsion = rocketObject
      console.log("Your new propulsion has been mounted!")
    },
    takeoff() {
      // fire the propulsion drives
      // if the engines fire
      // if(this.propulsion.fire() === true) {
      // if(true)
      if(this.propulsion.fire()) {
        // print a really convincing takeoff noise
        console.log("VROOOOOOOOM")
      } else {
        // if they fail
        // print that takeoff was unsuccessful
        console.log("The takeoff was unsuccessful. Womp womp")
      }
    }
  }
}

export default createNewSpaceship;