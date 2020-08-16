/**
 * 测试属性的简写
 */
function testAttrShorthand() {
  console.log('测试操作');
  const foo = "bar";
  const testObject = { foo };
  console.log(testObject);
}

/**
 * 属性的定义
 */
function testAttrDefine() {
  //   let testObj = {};
  //   testObj.attr_1 = 'weixinjie';
  //   testObj['attr_' + '2'] = 'zhangrui';
  //   这些代码都没用了 仅做测试使用

  console.log(testObj);
}

/**
 *  函数都有一个 name 属性，用来表示函数的名称
 */
function testFunctionName() {
  //   console.log(`testAttrDefine 函数的名称为 ${testAttrDefine.name}`);
}

/**
 * 测试属性的可枚举性
 */
function testAttrEnumerable() {
  let testObj = { foo: "weixinjie", key2: "zhangrui" };

  let descriptor = Object.getOwnPropertyDescriptor(testObj, "foo");
  let keys = Object.keys(testObj);
  let values = Object.values(testObj);
  console.log(descriptor, keys, values);
}

/**
 * 对象合并 merge
 */
function testAssign() {
  let objA = { a: "a", b: "b" };
  let objB = { c: "c", b: "d" };

  let result = Object.assign(objB, objA); // A 会覆盖 B 的内容
  console.log(result);
}

/**
 * 获取对象父类
 */
function testGetProtoType() {
  let obj = {};
  let result = Object.getPrototypeOf("foo");
  console.log(result);
}

testGetProtoType();
// testAssign();
// testAttrEnumerable();
// testFunctionName();
// testAttrDefine();
// testAttrShorthand();
