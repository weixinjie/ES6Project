function timeOut(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i === 2) {
        reject('error')
      } else{
        resolve(true)

      }
    }, 3000);
  })
}

async function testAsync() {
  let promiseArray = [];
  for (let i = 0; i < 20; i += 1) {
    let promise = timeOut(i);
    promiseArray.push(promise);
  }

  // 使用 await 的时候一定要使用 try catch 来捕获异常
  try {
    let result = await Promise.all(promiseArray);
    console.log(result);
  }catch (e) {
    console.log(`出现了错误  ${e}`);
  }
}

testAsync();
