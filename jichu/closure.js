//闭包,函数通过词法作用域引用变量，区别于形参
const obj={
    name:20
}
function closure(){
console.log(obj)
}
function hhh(obj){
    console.log(obj)
}

closure()
hhh(obj )



const arr =[1,2,3,4,5,6]
const result = []
// var定义了之后，i就不能再变换类型
for(var i = 0;i<arr.length;i++){

    // const clo =function(){
    //     return i//内部没有传递参数的话，绑定外部i的地址
    // }
    function wr(inn){ 
        return function(){   
            return inn
        }
    }
    result.push(wr(i))
}
console.log(result[0]())


// 函数curring，柯里化
 // 一个函数只有一个参数 ->y=f(x),不支持多参，所以用闭包来将多参转化为单参
 //lambda表达式和lambda演算x，λx.y, (λx.y) z
 // 一个函数有多个参数y=f(x,y,z,m,n)
 function add(x,y,z){
    return test(x)(y)(z)
}
 function test (x){
   return  function (y){
        return function(z){
            return x+y+z
        }
    }
 }
console.log(add(1,2,3))

// 考题，实现一个函数，函数返回柯里化函数 
add(1,2,3,4)
// function add(a,b,c,d){return a+b+c+d}
mul(1,2)
// function mul(a,b){return a*b}
function currying(){

}

const addCurring=currying(add)
const mulCurring=currying(mul)
addCurring(1)(2)(3)(4)
mul(1)(2)