const createNewRocket = () =>{ let newRocketObject = {
   fuel:0,
   addFuel(num){
     this.fuel += num
   },
   fire(){
     if(this.fuel >0 && this.fuel < 100){
       this.fuel -= 1
       console.log("The engines have been fired")
       return true
     } else {
       console.log("The engines failed to fire, please add fuel")
       return false
     }
   }
 }
 return newRocketObject
}

export default createNewRocket