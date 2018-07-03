//测试this的理解
{
    //上下文的隐式传递
    function testFun() {
        console.log('hello ' + this.name);
    }

    let me = {
        name: 'weixinjie'
    }

    let you = {
        name: 'zhangrui'
    }

    testFun.call(me);
    testFun.call(you);

    //!!!!如果是箭头函数,this就是定义时的对象不是运行时的对象
    let f = () => {
        console.log(this.name);
    }

    f.call(me);
    f.call(you);
}