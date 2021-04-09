let obj = {
  name: "red",
  age: "18",
};

//用于判断给定的属性是否可以使用（本章稍后讨论的）for-in 语句枚举。
console.log(obj.propertyIsEnumerable("name"));
console.log(obj.valueOf());
console.log(obj.name.toString());
