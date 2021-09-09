/*
 * @Des:
 * @Version:
 * @Author: Ellen
 * @Date: 2021-04-11 12:09:07
 * @LastEditors: Ellen
 * @LastEditTime: 2021-09-09 21:32:07
 */
const { Singleton, Singleton2 } = require('./singleton.js');
console.log(typeof Singleton);

let lili = new Singleton('lili', 12);

console.log(lili);

let lili2 = new Singleton('lili2', 13);

console.log(lili2);

console.log(lili === lili2);
console.log(typeof Singleton.instance);

let jack = new Singleton2('jack', 12);

console.log(jack);

let jack2 = new Singleton2('jack2', 13);

console.log(jack2);

console.log(jack === jack2);
console.log(typeof Singleton2.instance);
