var A = 20;
var B = 40;
var C = 50;

const prompt = require('prompt-sync')();
// change the quantity of A_val,B_val,C_val as per your requirement
// they are quantity of A,B,C
var A_val = parseInt(prompt("Enter the quantity of product A: "), 10);
var B_val = parseInt(prompt("Enter the quantity of product B: "), 10);
var C_val = parseInt(prompt("Enter the quantity of product C: "), 10);

var wrapA = parseInt(prompt("Do you want to wrap product A? Type 0 for no and 1 for yes: "), 10);
var wrapB = parseInt(prompt("Do you want to wrap product B? Type 0 for no and 1 for yes: "), 10);
var wrapC = parseInt(prompt("Do you want to wrap product C? Type 0 for no and 1 for yes: "), 10);

var totalcost = A*A_val+B*B_val+C*C_val;
var totalquantity = A_val+B_val+C_val;
const flat10 = () =>{
    if(totalcost>200){
        return totalcost*(0.9);
    }
    return totalcost
}

const bulk5 = () =>{
    var val1 = A*A_val,val2=B*B_val,val3=C*C_val;
    if(A_val>10 ){
        val1 = A*A_val*0.95
    }
    if(B_val>10){
        val2 = B*B_val*0.95
    }
    if(C_val>10){
        val3 = C*C_val*0.95
    }
    return val1+val2+val3
}

const bulk10 = () =>{
    if(totalquantity>20){
        return totalcost*0.9
    }
    return totalcost
}

const tiered50 = () =>{
    if(totalquantity>30)
    {
        var val1 = A*A_val,val2=B*B_val,val3=C*C_val;
        if(A_val>15)
        {
            val1 = (A_val-15)*A*0.5 + 15*A;
        }
        if(B_val>15)
        {
            val2 = (B_val-15)*B*0.5 + 15*B;
        }
        if(C_val>15)
        {
            val3 = (C_val-15)*C*0.5 + 15*C;
        }
        return val1+val2+val3
    }
    return totalcost
}

console.log(`Quantity of A is ${A_val}`);console.log(`Quantity of B is ${B_val} `);console.log(`Quantity of C is ${C_val} `);
console.log(`subtotal = ${totalcost}`);

var ProductCost = Math.min(flat10(),bulk5(),bulk10(),tiered50());
// console.log(`The total cost is ${ProductCost}`);
if(ProductCost===totalcost)
{
    console.log("Sorry you don't get any discount the total price remailns "+ProductCost);
}
else if(ProductCost===flat10()){
    console.log("Congratulations you got the flat_10_discount now the total price is "+ProductCost);
}
else if(ProductCost===bulk5()){
    console.log("Congratulations you got the bulk_5_discount now the total price is "+ProductCost);
}
else if(ProductCost===bulk10()){
    console.log("Congratulations you got the bulk_10_discount now the total price is "+ProductCost);
}
else if(ProductCost===tiered50()){
    console.log("Congratulations you got the tiered_50_discount now the total price is "+ProductCost);
}


var wrapfeeA=0,wrapfeeB=0,wrapfeeC=0;
if(wrapA===1)
{
    wrapfeeA=A_val;
}
if(wrapB===1)
{
    wrapfeeB=B_val;
}
if(wrapC===1)
{
    wrapfeeC=C_val;
}
var wrapfee = wrapfeeA+wrapfeeB+wrapfeeC;
console.log(`The wrap fee is ${wrapfee}`);

var shippingFee = (Math.ceil((A_val+B_val+C_val)/10))*5;
console.log(`Shipping fee is ${shippingFee}`);

console.log(`Total cost is ${ProductCost+wrapfee+shippingFee}`);
