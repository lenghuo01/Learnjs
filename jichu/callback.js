// 回调函数（和API没任何关系，和异步没有任何关系）
// 函数作为参数传递给另一个函数

// platform平台
// 我们自己传递的函数

//plat form 执行完会得到一个数字1
function platform (callback){
callback()

}
function x()
{
    console.log('这是个回调函数')
}

// 回调函数，被一个第三方函数调用
const fn = function()

{
    console.log('这是个回调函数')
}
// 作为参数传递给第三方API
platform(fn)

//平台函数不通过return返回值，而是通过回调函数传递返回值
// callback 函数最大的用处是和异步相关

//回调地狱
function pl(pp,ff)
{
 ff({name: pp })
}

const ff = function(obj)
{
    console.log(obj)
    // 这里才能获取平台函数的返回值
}

pl(23,ff)