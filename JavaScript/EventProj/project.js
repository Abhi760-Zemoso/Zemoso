function B1pressed(){
    document.getElementById("p1").innerHTML="Button 1 was clicked"
    alert("Button 1 was clicked")
}

function I1change(){
    var inp=document.getElementById("i1").value
    document.getElementById("p2").innerHTML="Characters typed "+inp.length
}

document.getElementById("b2").addEventListener("click",B2pressed)

function B2pressed(){
    var p=document.getElementById("p3")
    document.body.removeChild(p)
}

document.getElementById("i2").addEventListener("input",I2change)

function I2change(){
    var len=document.getElementById("i2").value.length
    document.getElementById("p4").style.fontSize=len+"em"
}