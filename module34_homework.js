/*Задание 1:
Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

//Пример 1

const book = {
    title: 'love story',
    genre: 'roman',
    pages: 185,
    str: 'foreword'
};

function printObj(obj) {
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
printObj(book);

//Пример 2

const roman = {
    kind : 'book',
    title: 'love story',
    pages: 185,
    str: 'foreword',   
};

const detective = Object.create(roman);

detective.ownAddition = "illustrations";
detective.title = "stranger";
detective.pages = "205";

function showOwn (obj) {
  for (let key in detective) {

    if (detective.hasOwnProperty(key)) {

        console.log(`${key}: ${obj[key]}`); 
    }   
  }
}
showOwn(detective);




/*Задание 2.
Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const book = {
    title: 'love story',
    genre: 'roman',
    pages: 185,
    str: 'foreword'
};

const magazine = {
   title: 'Earth',
   genre: 'travels',
   pages: 50
};

function printKey(str, obj) {

 console.log('str' in book);
}
(printKey());


/*Задание 3.
Напишите функцию, которая создает пустой объект, но без прототипа.*/

Object.create(null);

/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность. */

function KitchenApp (name, power) {
    this.name = name,
    this.power = power,
    this.isOn = false;
  }
   
  KitchenApp.prototype.getPower = function() {
     return this.isOn ? this.power : 0;
  }
  
  function Microwave (name, color) {
     this.name = name,
     this.color = color;
     this.power = 1300;
     this.getSkill = function(){
      console.log(`I can reheat food`)
    }
  }
  
  function Blender (name, color) {
     this.name = name,
     this.color = color;
     this.power = 1000;
  }
  
  function Teapot (name, color) {
     this.name = name,
     this.color = color;
     this.power = 1500;
     this.getSkill = function(){
      console.log(`I can reheat water`)
  }
  
  Microwave.prototype = new KitchenApp();
  Blender.prototype = new KitchenApp();
  Teapot.prototype = new KitchenApp();
  
  const microwave = new Microwave('microwave','red');
  const blender = new Blender('blender','black');
  const teapot = new Teapot('teapot','white');
  
  microwave.isOn = true;
  blender.isOn = true;
  
  console.log('total power of switched on appliances ' + (microwave.getPower() + 
               blender.getPower() + teapot.getPower()))
  console.log(microwave.getSkill());

/*Задание 5.
Перепишите консольное приложение из предыдущего юнита на классы */

class KitchenApp {
  constructor(name, power) {
    this.name = name,  
    this.power = power,
    this.isOn = false;
 }

 switchOn()
{
  console.log(this.name + " Включен в розетку");
  this.isOn = true;
}

  getPower(){
   //console.log(this.name + ' ' + 'прибор работает'); 
   return this.isOn ? this.power : 0;
  }
}


const microwave = new KitchenApp('microwave', 1300);
const blender = new KitchenApp('blender', 1000);
const teapot = new KitchenApp('teapot', 1500);

microwave.switchOn();
blender.switchOn();

console.log('total power of switched on appliances ' + (microwave.getPower() + blender.getPower()));


//Пример 2
class KitchenApp {
  constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isOn = false;
  }
  switchOn() {
      console.log(this.name + " Включен в розетку");
      this.isOn = true;
  }

  getPower() {
      return this.isOn ? this.power : 0;
  }
}

class Microwave extends KitchenApp {
  constructor(name, power) {
      super();
      this.name = name,
      this.power = power;
  }
  getSkill() {
      console.log(`I can reheat food`);
  }
}

class Blender extends KitchenApp {
  constructor(name, power) {
      super();
      this.name = name,
      this.power = power;
  }
  getSkill() {
      console.log(`I can mix food`);
  }
}

class Teapot extends KitchenApp {
  constructor(name, power) {
      super();      
      this.name = name,
      this.power = power;
  }
  getSkill() {
      console.log(`I can reheat water`);
  }
}

const microwave = new Microwave('microwave', 1300);
const blender = new Blender('blender', 1000);
const teapot = new Teapot('teapot', 1500);


microwave.switchOn();
blender.switchOn();


console.log('total power of switched on appliances ' + (microwave.getPower() + blender.getPower() + teapot.getPower()));
console.log(blender.getSkill());


