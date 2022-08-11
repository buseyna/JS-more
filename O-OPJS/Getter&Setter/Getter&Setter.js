class Car{
    constructor(make, model, year){
        this._make = make;
        this._model =model;
        this._year = year;

    }
    get make(){
        return this._make;
    }

    set make(value){
       const possibleMakes = ["Honda", "Toyota","Nissan"];

       if (possibleMakes.includes(value)){
        this._make = value; 
       } else {
        throw Error(value + "is not a valid make")
       }
            
   }
   get description(){
    return this._year + " " + this._make + " " + this._model;
   }
}
let myCar = new Car("Nissan","Rogue",2017);
//myCar.make = "Volvo"; /* this way is wrong to set the value to volvo..*/
//myCar.make;
//myCar.model; // it will give an error
//myCar.make;

console.log(myCar.description);

