
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


function Person(){
    // 将构造函数中的this指向实例化对象
    this.name='zhangsan '
    this.age=20
}
const obj3=new Person()
console.log(obj3)