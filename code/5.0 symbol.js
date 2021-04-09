{
  let mysym = Symbol();
  console.log(typeof mysym);

  let fooGlobalsym = Symbol.for("foo");
  console.log(typeof fooGlobalsym);

  // 重用 fooGlobalsym = Symbol.for("foo");
  let subfooGlobalsym = Symbol.for("foo");

  console.log(fooGlobalsym === subfooGlobalsym);
  // true

  let s = Symbol.for("foo");
  console.log(Symbol.keyFor(s));
  let s2 = Symbol("foo");
  console.log(Symbol.keyFor(s2));

  let sy1 = Symbol("foo");
  let sy2 = Symbol("bar");

  let o = {
    [sy1]: "foo val",
  };
  console.log("o s1", o);
}

let s1 = Symbol("foo");
let s2 = Symbol("bar");

let obj ={
    [s1] : 'foo val',
    [s1] : 'foo val',
}
