//测试箭头函数
{
    //注意 v是指参数  =>后面的是返回值
    var f = v =>v;
    //上面的箭头函数代表
    var ff = function (v) {
        return v;
    }



    //如果不需要参数或者需要多个参数则用括号将箭头函数包裹一下
    var fff  = ()=>5;
    var ffff = (a,b) => a+b;

    //如果箭头函数的函体多于一行,则用打括号包裹并且使用return语句返回
    var fffff = (a,b) =>{
        a =1;
        b =2;
        return a+b;
    }

    console.log(fffff(1,3));

    //*****如果函数返回的是一个对象，则再对象外面加上一个括号 !!!!!!注意 是括号
    var f1 = (a,b) =>(
        {id:a,name:b}
    );
    console.log(f1('123','weixinjie'))

    //重要!!!!   箭头函数体内部的this对象，就是定义时所在的对象，而不是运行时所在的对象

}