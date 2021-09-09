// url参数变成obj
function urltoObj(url) {
  let tempurl = url;
  let keyvalue = tempurl.split("?")[1].split("&");
  let objval = {};
  keyvalue.map((item) => {
    let itemkey = item.split("=");
    objval[itemkey[0]] = itemkey[1];
  });

  return objval;
}
let url = "https://i.leiue.com/avatar/?size=100&page=10";
let res = urltoObj(url);
console.log("res", res);

// 深拷贝
/* let obj = {
  name: "lili",
  age: 18,
  hobby: ["read", "run"],
  sing: () => {
    console.log("i am singing");
  },
}; */

function deepObj(obj) {
  if (typeof obj !== "object") return "data is not a object";
  let newobj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    // 判断是否是自己自身的原素
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        newobj[key] = deepObj(obj[key]);
      } else {
        newobj[key] = obj[key];
      }
    }
  }
  return newobj;
}
