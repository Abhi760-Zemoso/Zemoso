var amount=prompt("You need to pay $25")

function calculate(amount){
    return amount-25
}
var diff=calculate(amount)
if(diff==0){
    console.log("You gave the exact amount.")
}
else if(diff>0){
    console.log("You gave too much. Your change due is $"+diff)
}
else{
    diff=-1*diff
    console.log("You gave too little. You still owe $"+diff)
}