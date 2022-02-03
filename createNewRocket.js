const createNewRocket = () => {
  const rocket = {
    fuel : 0,
    addFuel(int){
      this.fuel += int
      console.log(`${this.fuel} fuel is the new fuel amount`)
    },
    fire() {
      if (this.fuel > 0) {
        // remove 1 from fuel
        this.fuel -= 1
        // fire the rocket
        console.log("The engines have been fired");
        // print current fuel count
        console.log(`${this.fuel} fuel left`)
        // return true
        return true
      } else {
        // there is not enough fuel
        // print engines have failed
        console.log("Engines have failed to fire");
        // return false
        return false
      }
    }
  }
  return rocket
}

export default createNewRocket