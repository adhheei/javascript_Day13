let obj ={
    name :"Adi",
    age :21,
    address:{
        city :"valanchery",
        pin:65000
    }
}

let clone = structuredClone(obj);
obj.age=20;
clone.address.pin=679572;
clone.address.city="Irimbiliyam";
console.log(obj)
console.log(clone)