
class Vehicle {
  constructor() {
    this.year = 1967
    this.wheels = 4
    this.lightsOn = false
    this.turnSignal = "off"
    this.speed = 0

  this.setYear = function(year) {
    this.year = year
  }

  this.getWheels = function(){
    return this.wheels
  }
  this.honkHorn = function() {
    return "BEEP"
  }

  this.lightSwitch = function() {
    this.lightsOn = !this.lightsOn
  }

  this.blinker = function(direction){
    this.turnSignal = direction
  }
  this.accelerate = function() {
    this.speed += 10
  }
  this.braking = function() {
    this.speed -= 7
  }
}
}


class Car extends Vehicle {
  constructor() {
    super()
    this.stringify = function(){
      return "Speed: " + this.speed + "\nTurn Signal: " + this.turnSignal +  "\nYear: " + this.year
    }
  }
}

class Toyota extends Car {
  constructor(){
    super()
    this.honkHorn = function(){
      return "WHOOP"
    }
  }
}

class Lexus extends Car {
  constructor(){
    super()
    this.honkHorn = function() {
      return 'beep'
    }
  }
}

class Tesla extends Car {
  constructor(){
    super()
    this.honkHorn = function() {
      return "Beep-bee-bee-boop-bee-doo-weep"
    }
  }
}

class Garage {
  constructor(){
  this.carCollection = []
  this.sort = function(){
    this.carCollection.sort(function(a, b){
      return a.year - b.year
    })
  }
  }
}

module.exports = {
  Vehicle: Vehicle,
  Car: Car,
  Toyota: Toyota,
  Lexus: Lexus,
  Tesla: Tesla,
  Garage: Garage
}
