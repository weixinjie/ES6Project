/**
 * set 基本用法
 */
function testSetBaseUse(){
  let testSet = new Set();
  [0,1,2,3,2,3].forEach((item) => {testSet.add(item)});
  for(let item of testSet){
    console.log(`${item}`);
  }

  //set 可以接受一个数组作为初始化参数
  let testSet2 = new Set([0,1,2,3,3,2]);
  console.log(testSet2);
  console.log(testSet2.size);

  //数组去重
  let result = [...new Set([1,2,2,3,3,4,4])];
  console.log(`去重后的数组 ${result}`);

  // 往 Set 里面添加数据的时候不会发生类型转换 5 与 '5' 是不一样的数据类型
  testSet.clear();
  testSet.add(5);
  testSet.add('5');
  console.log(testSet);
  console.log(testSet.has('5'));
}

function testMapBaseUse(){
  let testMap = new Map([['name','weixinjie'],['value','this is value']]);
  testMap.forEach((value,key) => {
    console.log(key,value);
  })

  // map 转换成数组
  let mapToArray = [...testMap];
  console.log(mapToArray);
}

console.log('我是本地更改的东西');

testMapBaseUse();
 console.log('我是远程更改的东西');
 console.log('我是远程更改的东西'); c
 onsole.log('我是远程更改的东西');
// testSetBaseUse();
