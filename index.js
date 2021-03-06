var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var kittens1 = [...kittens, name]
  return kittens1;
}

function prependKitten(name){
  var kittens1 = [name, ...kittens]
  return kittens1;
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
