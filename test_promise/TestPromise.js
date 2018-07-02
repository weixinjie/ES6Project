//测试promise
{
    //可以使用Promise对象的构造函数
    const promise = new Promise(function (resolve, reject) {
        //模拟耗时操作
        setTimeout(function () {
            if (Date.parse(new Date()) % 3 ==0) {
                resolve('成功了---');
            }else{
                reject('失败了---');
            }
        },5000);

    });

    //监听事件
    promise.then(function (value) {
        console.log('成功了 '+value)
    },function (error) {
        console.log('失败了 '+error);
    })
}