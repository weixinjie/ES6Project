//测试promise


{
    //可以使用Promise对象的构造函数
    const promise = new Promise(function (resolve, reject) {
        //模拟耗时操作
        setTimeout(function () {
            if (Date.parse(new Date()) % 3 == 0) {
                resolve('成功了---');
            } else {
                reject('失败了---');
            }
        }, 5000);

    });

    //监听事件
    promise.then(function (value) {
        console.log('成功了 ' + value)
    }, function (error) {
        console.log('失败了 ' + error);
    })
}


//Promise对象新建之后会立即执行
{


   /**
    promise新建了
    最后的内容
    then中的内容  resolve中的内容
    * */

    let promise = new Promise(function (resolve, reject) {
        console.log('promise新建了')
        resolve('resolve中的内容');
    });

    promise.then(function (value) {
        console.log('then中的内容  ' + value);
    });

    console.log('最后的内容');
}

//使用Promise来加载一张图片
{
    let promise = new Promise(function (resolve, reject) {
        const img = new Image();
        img.onload = function () {
            resolve(img);
        };

        img.onerror = function () {
            reject(new Error('下载失败了'));
        }
    });

    promise.then(function (img) {
        console.log(img.width);
    }, function (value) {
        console.log(value);
    });
}


//异常处理
{
    /**
     * 结论:
     * 1.如果手动调用的reject函数则会触发then里面的reject函数
     * 2.如果在执行过程中出现了异常则会被catch捕获
     * 3.如果在then函数中出现了异常则也会被catch捕获
     * 4.****最重要的  reject方法的作用，等同于抛出错误!!!!!!
     * 5.如果已经变成resolve则再跑出错误是无效的
     */
    let promise = new Promise(function (resolve, reject) {
        let handler = function () {
            if (Date.parse(new Date()) % 3 == 0) {
                resolve('成功了---');
            } else {
                reject('失败了---');
            }
        }
        setTimeout(handler(),3000);
    });

    promise.then(function (value) {
        console.log('then函数中的 '+value)
    },function (value) {
        console.log('then函数中的error  '+value)
    }).catch(function (error) {
        console.log("异常被捕获了   "+error.toString());
    });
}