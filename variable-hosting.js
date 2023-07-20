//变量提升问题
//编译器允许未定义先使用

var a =1
function test(){
    console.log(a)
    // 暂时性死区
    var a=2
}
test()