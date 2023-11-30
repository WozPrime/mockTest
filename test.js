function fizzBuzz(n) {
    if (n % 3 ==0 && n % 5==0) {
            return "FizzBuzz";
        } else if (n % 3==0){
            return "Fizz";
        } else if (n % 5==0) {
            return "Buzz"
        } else {
            return n;
        }
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    for (let i = 1; i < n+1; i++) {
       console.log(fizzBuzz(i)); 
    }
    
}