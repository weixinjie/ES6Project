//测试TestGenerator
{
    function* testGenerator() {
        yield 'hello';
        yield 'word';
        return 'end';
    }
    let testFun = testGenerator();
    console.log(testFun.next());
    console.log(testFun.next());
    console.log(testFun.next());
    console.log(testFun.next());
}