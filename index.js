function Animal (breed) {
  this.getBreed = function() {
    console.log(breed)
  };
}

function Dog (breed) {
  if (!(this instanceof Dog)) {
    return new Dog(breed);
  }
  Animal.apply(this, arguments);
}

const haski = new Dog('haski');
const pitBul = Dog('pitBull');
haski.getBreed(); // haski
// still works
pitBul.getBreed(); // pitBull
console.log(pitBul, haski);
console.log(pitBul instanceof Dog) // true
