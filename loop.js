//for loop

const { add } = require("./while");

// debugger;
var a=11;
for(var i=1;i<a;i++){
    document.write(i);
    for(var j=22; j>=i;j--){
        document.write(`<h1>${i}*${j}=${i*j}</h1>`)
        break;
    }
}
var i="*";
for (var a=1;a<=12;a++){
document.write(i);
}

document.write(`<select>`)

for (var a=1;a<20;a++){
document.write(`<option>${a}</option>`)
}
document.write(`</select>`);

var a=1;
for (var a=1;a<=10;a++){
if (a==3){
    document.write(`<h1>Welcome to my zone</h1>`);
    continue;
}
document.write(`<h1> loop ${a}</h1>`);
}


for(var q=22;q<=40;q++){
    if (q==22){
        document.write("<h1>The value is equal to 22</h1>");
    }
    else{
        document.write("<h1>The value is not equal to 22</h1>");
    }
}
