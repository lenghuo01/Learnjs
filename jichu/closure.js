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
hhh(obj)