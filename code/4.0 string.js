let text = "今天天气还行";
let text1 = "cheng guang wen ju";
console.log(text.length);
console.log(text1.length);

const obj = {
  name: "red",
  age: 18,
};

console.log("obj", obj.toString());

let foo = {
  toString: () => "World",
};

console.log(`Hello,${foo}!`);

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

console.log(`${capitalize("hello")},${capitalize("javascript")}!`);

let value = "";
function append() {
  value = `${value}abc`;
  console.log(value);
}
append();
append();

function printRaw(strings) {
  console.log("actual:");
  for (const item of strings) {
    console.log(item);
  }
  console.log("raw:");
  for (const item2 of strings.raw) {
    console.log(item2);
  }
}
printRaw`\u00A9${"and"}\n`;
