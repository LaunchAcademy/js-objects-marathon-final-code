let createNewRocket = ()=>{
  let createRocketObject = {
    fuel: 0,
    addFuel(int){
      this.fuel += int
      console.log(this.fuel)
    },
    fire(){
      if (this.fuel > 0) {
        this.fuel -= 1
        console.log("The engines have been fired!")
        console.log(`Fuel count is ${this.fuel}.`)
        return true
      } else {
        console.log("The engines have failed to fire. Check fuel supply.")
        return false
    }
    }
  }
  return createRocketObject
}

export default createNewRocket
