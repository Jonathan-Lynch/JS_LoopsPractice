function while_Loop() {
    var text = "";
    var i = 0;
    while (i < 5) {
      text += "The number is " + i;
      i++;
    }
    console.log(text)
}

function carLoop() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";
    var i = 0;
    while (i < cars.length) {
    text += cars[i] + " ";
    i++;
}
    console.log(text)
}
