const rocket = () => {
  return {
    fuel: 0,
    addFuel(fuelToAdd) {
      this.fuel += fuelToAdd
      console.log(this.fuel)
    },
    fire() {
      if (this.fuel > 0) {
        this.fuel -= 1
        console.log("The engines have been fired")
        console.log(`Current fuel level is ${this.fuel}`)
        return true
      } else {
        console.log("The engines have failed to fire")
        return false
      }
    },
  }
}

export default rocket
