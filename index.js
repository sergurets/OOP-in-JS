const obj1 = {
    sayHi: () => console.log('Hi!')
  };
  
  const obj2 = {
    showNumber: () => console.log(parseFloat(Math.random() * 100))
  };
  
  const obj3 = {
    showRandomSymbol: () => console.log(String.fromCharCode(parseFloat(Math.random() * 100)))
  }; 
  
  const bigFatObject = makeChain(obj1, obj2, obj3);
  
  function makeChain () {
    if (!arguments.length) {
      return {}
    }
    var args = Array.prototype.slice.call(arguments);
    var obj = args[args.length - 1];
    args.splice(-1);
    args.reduceRight(function(obj, current) {
      obj.__proto__ = current;
      return obj.__proto__
    }, obj);
    return obj;
  }
  
  console.log('bigFatObject', bigFatObject);
  bigFatObject.sayHi();
  bigFatObject.showNumber();
  bigFatObject.showRandomSymbol();
