const createNewRocket = () => {
  return {
    fuel: 0,
    // addFuel which will be a function that accepts an integer as an argument, 
    addFuel(newFuelAmount) {
      // adds it to the rocket's fuel
      this.fuel += newFuelAmount
      // and prints out the new fuel amount.
      console.log(`The updated fuel amount is: ${this.fuel}`)
    },
    fire() {
      // Check and see if there is fuel in the fuel property.
      if(this.fuel > 0) {
        // If there is, subtract 1 from the fuel property, print that the engines have been fired, print the rocket's current fuel count, and return true.
        this.fuel -= 1
        console.log("The engines have been fired!")
        console.log(`The updated fuel amount is: ${this.fuel}`)
        return true
      } else {
        // If there is not, print that the engines failed to fire and return false.
        console.log("There was not enough fuel, the engines failed to fire!")
        return false
      }

      // if(this.fuel > 0) {
      //   // If there is, subtract 1 from the fuel property, print that the engines have been fired, print the rocket's current fuel count, and return true.
      //   this.fuel -= 1
      //   console.log("The engines have been fired!")
      //   console.log(`The updated fuel amount is: ${this.fuel}`)
      //   return true
      // }
      // // If there is not, print that the engines failed to fire and return false.
      // console.log("There was not enough fuel, the engines failed to fire!")
      // return false
    }
  }
}

export default createNewRocket

