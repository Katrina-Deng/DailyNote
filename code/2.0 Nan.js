console.log(isNaN(NaN));
console.log(isNaN(1));
console.log(isNaN("2"));
console.log(isNaN("red"));

// 测试对象不是很懂
const obj = {
  name: "red",
  age: 18,
};
console.log(toString(isNaN(obj.valueOf())));
