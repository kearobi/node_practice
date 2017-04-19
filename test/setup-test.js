var mocha = require('mocha')
var expect = require('chai').expect
let exportObject = require('../car')
let Car = exportObject.Car
let Vehicle = exportObject.Vehicle
let Toyota = exportObject.Toyota
let Lexus = exportObject.Lexus
let Tesla = exportObject.Tesla
let Garage = exportObject.Garage

describe('Sample Application', function(){
  // make let vehicle = new Vehicle()
  it("Vehicle constructor does not throw errors", function(){
    function newVehicle(){
      return new Vehicle();
    }
    expect(newVehicle).to.not.throw(Error);
  })
  it("Car constructor does not throw errors", function(){
    function newCar(){
      return new Car();
    }
    expect(newCar).to.not.throw(Error);
  })
  it("Vehicle has four wheels", function(){
    let vehicle = new Vehicle()
    expect(vehicle.wheels).to.equal(4);
    expect(vehicle.getWheels()).to.equal(4);
  })
  it("Vehicle has honk property that returns 'BEEP'", function(){
    let vehicle = new Vehicle()
    expect(vehicle.honkHorn()).to.equal("BEEP");
  })
  it("Toyota constructor does not throw errors ", function(){
    function newToyota(){
      return new Toyota();
    }
    expect(newToyota).to.not.throw(Error);
  })
  it("Toyota object goes 'WHOOP' when honked", function(){
    let toyota = new Toyota()
    expect(toyota.honkHorn()).to.equal('WHOOP');
  })
  it("Lexus constructor does not throw errors ", function(){
    function newLexus(){
      return new Lexus();
    }
    expect(newLexus).to.not.throw(Error);
  })
  it("Lexus horn goes 'beep' when honked", function(){
    let lexus = new Lexus()
    expect(lexus.honkHorn()).to.equal('beep');
  })
  it("Tesla constructor does not throw errors ", function(){
    function newTesla(){
      return new Tesla();
    }
    expect(newTesla).to.not.throw(Error);
  })
  it("Lexus horn goes 'beep' when honked", function(){
    let tesla = new Tesla()
    expect(tesla.honkHorn()).to.equal("Beep-bee-bee-boop-bee-doo-weep");
  })
  it("Vehicle year", function(){
    let vehicle = new Vehicle()
    expect(vehicle.year).to.equal(1967);
  })
  it("Vehicle year", function(){
    let vehicle = new Vehicle()
    vehicle.setYear(1969)
    expect(vehicle.year).to.equal(1969);
  })
  it("lights on and off", function(){
    let vehicle = new Vehicle()
    expect(vehicle.lightsOn).to.equal(false);
  })
  it("lights flip from on to off", function(){
    let vehicle = new Vehicle()
    vehicle.lightSwitch()
    expect(vehicle.lightsOn).to.equal(true);
  })
  it("Turn signal left, right and off", function(){
    let vehicle = new Vehicle()
    vehicle.blinker("left")
    expect(vehicle.turnSignal).to.equal("left");
  })
  it("speed", function(){
    let vehicle = new Vehicle()

    expect(vehicle.speed).to.equal(0);
  })
  it("accelerate", function(){
    let vehicle = new Vehicle()
    vehicle.accelerate()
    expect(vehicle.speed).to.equal(10);
  })
  it("braking", function(){
    let vehicle = new Vehicle()
    vehicle.accelerate()
    vehicle.braking()
    expect(vehicle.speed).to.equal(3);
  })
  it("stringify", function(){
    let car = new Car()
    car.accelerate()
    car.blinker("left")
    car.setYear(2001)
    expect(car.stringify()).to.equal("Speed: 10\nTurn Signal: left\nYear: 2001");
  })
  it("garage", function (){
    let garage = new Garage()
    garage.carCollection.push(new Tesla())
    garage.carCollection.push(new Toyota())
    garage.carCollection.push(new Lexus())
    console.log(garage.carCollection)
    expect(garage.carCollection.length).to.equal(3)
  })
  it("garage", function (){
    let garage = new Garage()
    let toyota = new Toyota()
    toyota.setYear(1970)
    let lexus = new Lexus()
    lexus.setYear(1990)
    let tesla = new Tesla()
    tesla.setYear(2017)
    garage.carCollection.push(tesla)
    garage.carCollection.push(toyota)
    garage.carCollection.push(lexus)
    garage.sort()
    expect(garage.carCollection[0].year).to.equal(1970)
  })





})
