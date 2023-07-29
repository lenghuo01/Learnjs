
//这里 this 是动态绑定的
//c++/java中this是静态绑定的
const obj={
    name :'obj',
    age:20,
    sayHi:function(){
        console.log(this.name)
    }
}
obj.sayHi()

const  obj2={
    name:"boj2",
    sayHi:obj.sayHi
}
//非严格模式下
//就近原则，谁调用，this指向谁
//把this理解为函数的隐藏参数，将函数调用者作为this的值传入
obj2.sayHi()


function Person(name,age){
    // 将构造函数中的this指向实例化对象
    this.name=name
    this.age=age
    this.getName=function(){
        return this.name
    }
    this.getAge=function(){
        return this.age
    }
}
const obj3=new Person('zhangsan',22)
console.log(obj3.name)


// 请仿写数组的yourselfForeach方法
const arr=[]


// 改变this指向
//1.call
//2.aply
//3.bind

const test={
    name:'test',
    aaa:function(time){
        console.log(time+this)
    }
}
const people={
    name:'people'
}
const test2 =test.aaa
//apply
// people.test2('30:31')
test2.apply(people,['30:31'])

//call
function test3(){
//内置属性
console.log(arguments)          //function(item){console.log(item)}
// Array.prototype.forEach.call(arguments,(item)=>console.log(item))
const hh=Array.prototype.forEach.bind(arguments)
hh(console.log)
}


test3(1,2,3)

//bind
const free=test.aaa
const bindfree=free.bind(test)
bindfree(100)


//箭头函数和普通函数的区别
// 箭头函数没有this，但是可以访问外层function类型函数的this
// 没有arguments
//箭头函数不能作为构造函数
//箭头函数没有prototype