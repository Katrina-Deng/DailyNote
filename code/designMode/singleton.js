class Singleton {
  static instance = null;
  constructor(name, age) {
    // 已经有实例
    if (Singleton.instance) {
      return Singleton.instance;
    }
    // 绑定实例到第一次创建的实例中
    Singleton.instance = this;
    this.name = name;
    this.age = age;
  }
}

class Singleton2 {
  #instance = null;
  constructor(name, age) {
    // 已经有实例
    if (this.#instance) {
      return this.#instance;
    }
    // 绑定实例到第一次创建的实例中
    this.#instance = this;
    this.name = name;
    this.age = age;
  }
}

module.exports = { Singleton, Singleton2 };
