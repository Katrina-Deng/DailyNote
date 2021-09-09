/*
 * @Des:
 * @Version:
 * @Author: Ellen
 * @Date: 2021-09-09 21:21:11
 * @LastEditors: Ellen
 * @LastEditTime: 2021-09-09 21:33:13
 */
class fruits {}

const seed = (growClass) =>
  class extends growClass {
    seed() {
      console.log('seed stage');
    }
  };

const flower = (growClass) =>
  class extends growClass {
    flower() {
      console.log('flower stage');
    }
  };

const apple = (growClass) =>
  class extends growClass {
    apple() {
      console.log('i got a apple');
    }
  };

function classMixins(target, ...mixins) {
  return mixins.reduce((result, current) => current(result), target);
}

class AppleJuice extends classMixins(fruits, seed, flower, apple) {
  appleJuice() {
    console.log('i make a apple Juice');
  }
}

const happy = new AppleJuice();
happy.seed();
happy.flower();
happy.apple();
happy.appleJuice();
