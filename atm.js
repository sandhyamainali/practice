//Atm machine work process
var pin = '0871';
var type = "savings ";
var totalamt = '100,000';
var amt = parseInt(prompt("Enter the amount"));

if (pin == parseInt(prompt("Enter the pin"))) {
    document.write("<h1>Welcome to our service </h1>");
    if (type == savings) {
        document.write("<h1>Enter the amount</h1>");
        if (amt >= totalamt) {
            document.write("<h1>Insufficient amount /n Please recheck your amount</h1>");
        }
        else {
            document.write("<h1>Thanks for using our service</h1>");
        }
    }
    else{
        document.write("<h1>Invalid Pin</h1>");
    }
}
   