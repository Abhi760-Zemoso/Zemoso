var BookCollection=[]

var Book1=prompt("Give the name of the first book")

var Book2=prompt("Give the name of the second book")

var Book3=prompt("Give the name of the third book")

var Book4=prompt("Give the name of the fourth book")

var Book5=prompt("Give the name of the fifth book")

var Book6=prompt("Give the name of the sixth book")



BookCollection.push(Book1)

BookCollection.push(Book2)

BookCollection.push(Book3)

BookCollection.push(Book4)

BookCollection.push(Book5)

BookCollection.unshift(Book6)

BookCollection.pop()

console.log(BookCollection)

