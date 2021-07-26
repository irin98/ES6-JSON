const person={
    firstname:"irin",
    lastname:"george",
    age:22,
    eyecolor:"black"
};
let id =Symbol('id');
person[id]= 180093;

console.log(person[id]);
