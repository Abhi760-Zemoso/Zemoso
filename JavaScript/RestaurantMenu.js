var restaurantMenu = {
    name: "The Restaurant",
    menu : [
        {name: "pizza", price: 10},
        {name: "pasta", price: 8},
        {name: "ravioli", price: 7},
        {name: "cantuccini", price: 4},
        {name: "apperitivo", price: 3}
    ],
    listMenu: function () {
        var items = ""
        for (var i = 0; i < 5; i++) {
            items = items + (i+1) + "." + this.menu[i].name + " : $" + this.menu[i].price + "\n"
        }
        alert(items)
    },
    choose: function () {
        var answer = prompt ("Type item number 1 - 5")
        if (answer >= 1){
            alert("You choose : " + this.menu[answer-1].name)
        } else {
            alert("Not in the menu")
        }
    }
}