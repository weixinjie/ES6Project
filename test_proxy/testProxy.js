function testProxyBaseUse(){
  let testObj = {
    testKey: 'defaultKey'
  };

  // 初始化代理对象，target & handler
  let proxy = new Proxy(testObj,{
    get: function (target, propertyKey, receiver) {
      console.log('拦截到 get 操作',target,propertyKey);
      if (propertyKey === 'name') {
        return '我是默认值'
      }
      return Reflect.get(target, propertyKey, receiver);
    },
    set: function (target, propertyKey, value, receiver) {
      console.log('拦截到 set 操作',target,propertyKey);
      if (propertyKey === 'name') {
          return false
      }
      return Reflect.set(target, propertyKey, value, receiver);
    }
  });

  proxy.name = 'weixinjie';
  proxy.sex = 'man';

  console.log(`proxy.name : ${proxy.name}   `,`proxy.sex : ${proxy.sex}`);
}


/**
 * 可取消的代理
 */
function testRevocableProxy(){
  let target = {};
  let handler = {};

  let {proxy, revoke} = Proxy.revocable(target, handler);
  proxy.name = 'weixinjie';
  console.log(proxy.name);
  revoke();
  // console.log(proxy.name) //TypeError: Cannot perform 'get' on a proxy that has been revoked
}

testRevocableProxy();
// testProxyBaseUse();
