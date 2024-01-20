// 1. Use Fuction express waxaa laga wadaa in 
// waa function kaligii oo assing variabls u sameyneyn
//The main difference is that function expressions are not hoisted, 
//meaning they cannot be used before they are defined. 
//The function names (cube, fullName, power, sumCubes).

let cube = function(x) {
    return x * x * x;
  };
  
  // 2.
  let fullName = function(first, last) {
    return first + " " + last;
  };
  
  // 3.
  let power = function(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  };
  
  // 4.
  let sumCubes = function(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  };


  // Part 2/3: Mechanics of Hoisting-- Answers and correct way

    
  //1. Why does JavaScript output undefined instead of throwing an error in the following code? 
    // In JavaScript, variables are hoisted to the top of their scope, 
    // allowing them to be accessed throughout the function or script.
    // However, only the declaration is hoisted, not the initialization. 
    //If a variable is called before being initialized, it will be undefined.
      
    var message; // Declaration is hoisted
    console.log(message); // Initialization hasn't happened yet, so logs 'undefined'
    message = 'Hi there!'; // Initialization happens here


    //2. Why does JavaScript throw an error instead of logging undefined in the following code?
    
    // The error occurs due to how JavaScript handles hoisting. 
    //During the compile phase, variable and function declarations are moved to the top of their scope. 
    //Only declarations are hoisted, not initializations. 
    //The code tries to log a variable before it's initialized, resulting in a reference error. 
    //If using var instead of let, it would log undefined, but let causes a reference error due to the temporal dead zone/block scope.


    let message; // Declaration is hoisted
    console.log(message); // At this point, message is undefined
    message = 'Hi there!'; // Initialization happens here

  
    
    //3. Why does JavaScript not throw any errors when the following code is executed? 

    // the reason this code is not throwing anay error is js using mecatisim called hoisting.

    //JavaScript hoists function declarations to the top during the compile phase. 
    //Even if the function is declared after a console.log(showMessage()) line, 
    //JavaScript interprets it as if the function were declared before.

    //Here’s how JavaScript sees the code:

    function showMessage(){
        return 'Hi there!';
      }
      
      console.log(showMessage());

    
    
    
    //4. Part 3/3: Code Restructuring

    // Restructure the following instances of code to work correctly:


        var values = [10, 20, 30];

    for(var i = 0; i < values.length; i++){
    console.log(values[i]);
    }



    //  Restructure the following instances of code to work correctly:


        var lastLogin = '1/1/1970';

    function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
    };

    console.log(welcome('Charlie', 'Munger'));


    