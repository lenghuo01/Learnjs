
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