function myAnimal() {
  var animal = 'dog'
  return animal
}


function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

// local variable is created and destroyed everytime the function is executed and cannot be accessed outside the function


function add2(n) {
  return n

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
var theFunk = 'FUNKY!'
