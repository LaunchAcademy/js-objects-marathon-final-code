const createNewRocket = () => {
  return {
    fuel: 0,
    addFuel(gallonsOfFuel){
      // this.fuel = this.fuel + gallonsOfFuel
      this.fuel += gallonsOfFuel
      console.log(`Updated fuel amount is ${this.fuel}`)
    },
    fire() {
      if(this.fuel > 0) {
        // subtract 1 from the fuel property
        // this.fuel = this.fuel - 1
        this.fuel -= 1
        // print that the engines have fired
        console.log("The engines have fired! :) ");
        // print the current fuel count
        console.log(`The current fuel count is ${this.fuel}`);
        // return true
        return true
      } else {
        // print that the engines failed to fire
        console.log("The engines failed to fire :'( ");
        // return false
        return false
      }
    }
  }
}

export default createNewRocket;