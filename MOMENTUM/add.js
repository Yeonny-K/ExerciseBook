const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
  },
    div: function(a, b){
        return a / b ;
 },
    pow: function(a, b){
        return a**b;
    },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(10, plusResult);
const divResult = calculator.div(100, minusResult);
const powResult = calculator.pow(plusResult, minusResult);


console.log(plusResult);
console.log(minusResult);
console.log(divResult);
console.log(powResult);
