class CounterModel {
  constructor() {
    this.counter = 0;
    console.log('hello');
  }
  
  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}


//console.log((new CounterModel()).constructor);

module.exports = CounterModel;
