class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = null;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}


class buider {
    constructor(){
        this.car = new Car ()

    }

    setBrand(brand){
        this.car.brand = brand;
        return this;
    }

    setModel(model){
        this.car.model = model
        return this;
    }

    setYear(year){
        this.car.year = year 
        return this;
    }

    setEngine(engine){
        this.car.engine = engine
        return this
    }

    setColor(color){
        this.car.color = color;
        return this;
    }

    setGps(gps){
        this.car.gps = gps
    }

    build() {
      return this.car;
    }
}

class CarDirector {
    static carroBom(){
      return new buider()
      .setBrand("Toyota")
      .setModel("Corolla")
      .setYear(2024)
      .setEngine("2.0")
      .setColor("Preto")
      .setGps(true)
      .build()
    }

    static carroRuim(){
      return new buider()
      .setBrand("Honda")
      .setModel("Civic")
      .setYear(2023)
      .setEngine("1.5 Turbo")
      .setColor("Prata")
      .setGps(false)
      .build()
    }
} 

// Cliente precisa lembrar a ordem e todos os parâmetros
const car1 = CarDirector.carroBom();
const car2 = CarDirector.carroRuim();

car1.showDetails();
car2.showDetails();
