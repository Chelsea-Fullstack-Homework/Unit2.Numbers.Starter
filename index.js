//Prompt the user for a list of integers separated by commas
const str = '1,2,3,3,5,9';
// window.prompt('enter some numbers, like this', '1,2,3,3,5,9');



// Complete the Numbers class below
// the constructor has already been provided
class Numbers{
  constructor(data){
    //data can either be a string or an array of numbers
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    //return the count of numbers in data
    let accum = 0;
    for (let index in this.data) {
      accum++;
    }
    return accum;
  }
  printNumbers(){
    //print the numbers in data
    for (let index in this.data) {
      console.log(index + ": " + this.data[index]);
    }
  }
  odds(){
    //return the odd numbers in data
    const odds = [];
    for (let index in this.data) {
      if (this.data[index] % 2 !== 0) {
        odds.push(this.data[index]);
      }
    }
    return odds;
  }
  evens(){
    //return the even numbers in data
    const evens = [];
    for (let index in this.data) {
      if (this.data[index] % 2 === 0) {
        evens.push(this.data[index]);
      }
    }
    return evens;
  }
  sum(){
    //return the sum of the numbers
  }
  product(){
    //return the product of the numbers
  }
  greaterThan(target){
    //return the numbers greater than the target
  }
  howMany(target){
    //return the count of a given number
  }
}

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number
