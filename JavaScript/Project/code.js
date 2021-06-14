// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "orange", "yellow", "green", "indigo", "blue", "violet" ]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
  {
    firstName: "Jason",
    lastName: "Myers"
  },
  {
    firstName: "Bob",
    lastName: "Jones"
  },
  {
    firstName: "Jessika",
    lastName: "Aniston"
  },
  {
    firstName: "Robert",
    lastName: "De Niro"
  },
  {
    firstName: "Marlon",
    lastName: "Brando"
  }
]

function rand(Min,Max){
    return Math.round(Min+(Math.random()*(Max-Min)))
}

function rand100(){
    document.getElementById("p1").innerHTML=rand(0,100)
}

function randbtw(){
    let start=parseInt(document.getElementsByName("rand1")[0].value)
    console.log(start)
    let end=parseInt(document.getElementsByName("rand2")[0].value)
    document.getElementById("p2").innerHTML=rand(start,end)
}

function sdisp(){
    document.getElementById("p3").innerHTML=lorem
}

function sdisp1(){
    let n=parseInt(document.getElementsByName("rand")[0].value)
    let loremSplit=lorem.split(" ")
    document.getElementById("p4").innerHTML=loremSplit.slice(0,n).join(" ")
}

function sdisp2(){
    let n=parseInt(document.getElementsByName("rand")[1].value)
    document.getElementById("p5").innerHTML=lorem.slice(0,n)
}

function crrDate(){
    let date=new Date()
    document.getElementById("date").innerHTML=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
}

function crrTime(){
    let date=new Date()
    let hr=date.getHours()
    let m="AM"
    if(hr>=12){
        m="PM"
        if(hr>12){
            hr-=12
        }
    }
    if(m<10)
    m="0"+m
    document.getElementById("time").innerHTML=hr+":"+date.getMinutes()+" "+m
}

function i2f(){
    let i=parseFloat(document.getElementsByName("rand")[2].value)
    i/=12
    document.getElementById("i2f").innerHTML=i+" Feet"
}

function f2i(){
    let i=parseFloat(document.getElementsByName("rand")[3].value)
    i*=12
    document.getElementById("f2i").innerHTML=i+" Inches"
}

function same(){
    let first=document.getElementsByName("rand1")[1].value
    let second=document.getElementsByName("rand2")[1].value
    let p
    if(first.length==second.length){
        p="Length Equal"
    }
    else{
        p="Length not Equal"
    }
    document.getElementById("same").innerHTML=p
}

function pass(){
    let chars = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "@",
        "&",
        "$",
        "!",
        "#",
        "*",
      ];
    let p=""
    for(let i=0;i<10;i++){
          p+=chars[rand(0,chars.length-1)]
      }
      document.getElementById("pass").innerHTML=p
}

function eoro(){
    let n=parseInt(document.getElementsByName("rand")[4].value)
    let p
    if(n%2==0){
        p="Even"
    }
    else{
        p="Odd"
    }
    document.getElementById("eoro").innerHTML=p
}

function rcolor(){
    document.getElementById("rcolor").innerHTML=colors[rand(0,colors.length-1)]
}

function rname(){
    let name=names[rand(0,names.length-1)]
    document.getElementById("rname").innerHTML=name.firstName+" "+name.lastName
}
