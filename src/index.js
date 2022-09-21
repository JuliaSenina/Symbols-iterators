export default class Team {
  constructor() {
    this.members = new Set();
  };
  
  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже добавлен");
    };
    this.members.add(character);
  };
  
  addAll(...characters) {
    for (const elem of characters) {
      this.members.add(elem);
    };
  };
  
  toArray() {
    const arr = [];
    this.members.forEach((elem) => {
      arr.push(elem);
    });
    return arr;
  };

  [Symbol.iterator]() {
    let count = 0;
    let last = this.members.size;
    return {
      next() {
        if(count < last) {
          return {
            done: false,
            value: count++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}