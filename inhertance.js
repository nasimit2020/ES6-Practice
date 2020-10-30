class Parents{
    constructor(){
        this.fatherName = "Schwerzngger"
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Bappy")
console.log(baby);
console.log(baby2);