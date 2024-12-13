//FizzBuzz game
//if the number is divisible by 3 output is Fizz
//if the number is divisible by 5 output is Buzz
//if the number is divisible by 3 & 5 output is FizBuzz
//if the the number is not divisible by any of them return the number
//if that is not a number return undefined


function FizBuzz(x){
    if (typeof x!=="number"){
        return "Not a number"
    }
    if (x%3==0 && x%5==0){
       return FizBuzz;
    }
    if(x%3==0){
        return "Fizz";
    }
    if(x%5==0){
        return "Buzz";
    }
    if(x%3!==0 && x%5!==0){
        return x
    }
    else return undefined;

}

let num = FizBuzz("nabin");
console.log(num);