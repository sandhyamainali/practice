var fname="Sandhya  "
var lname="Mainali"
var contact="987654321"
var email="sandhya@gmail.com"
console.log(fname);
console.log(lname);
console.log(contact);
console.log(email);
document.write( `<h1> Hello, I am ${fname} ${lname} Welcome to my Practice zone</h1>`); 

var a=10;
document.write(`${a}`);
if (true){
    var a=20
    document.write(`${a}`);
}
document.write(`${a}`);



let v=23;
document.write(v);
if(true){
    let v=30;
document.write(v);
}
document.write(v);

document.write(typeof v)




//Data Type (Primitive[boolen.string.number,undefined,null], Non-primitive-[array,object])

var drinks=["coke","pepsi","sprite"]; //array
document.write(drinks[1]);

var drink2={//object
    name1:"coke",
    price:100,
    name2:"pepsi", 
 name3:"sprite",
}
console.log(drink2)


var a=4
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)