// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// getWage(baseSalary, overtime, rate);
// console.log(getWage(baseSalary, overtime, rate));

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest("Mango", 28);

// console.log(mango);

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");

class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    this._name = name;
    this._roomNumber = roomNumber;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const mango = new Guest('Mango', 26);

// обращение к get и set не требует вызова - т.е. без ()
console.log(mango.name); // Mango

mango.name = 'Mango the Fluffy';
console.log(mango.name); // Mango the Fluffy
