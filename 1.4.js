const someObj = {
  method1: function () {
    return "404";
  },
  method2: function () {
    return "404";
  },
};

const proxy = new Proxy(someObj, {
  get: function (target, property) {
    return function () {
      return "404";
    };
  },
});

console.log(proxy.method1());
console.log(proxy.method2());
