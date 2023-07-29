// class_base 继承
//多态：同一方法，在不同的对象上表现出不同的行为

class Base {
    #name='ap'
    constructor(name,age){
        //构造函数中仅放置属性

        // 属性是公开的，如何实现私有化属性？#
        this.#name=name
        this.age=age
      
    }
    //方法
    getName(){
        return this.#name
    }
    setName(name){
        this.#name=name
    }
    
}

class Student extends Base{
    constructor(name,age)
    {
        super(name,age)//调用子类的构造函数
        this.arr=[1,2,3]
    }
    sing(){
        console.log('stu1 sing')
    }
}
class teacher extends Base{
    constructor(name,age)
    {
        super(name,age)//调用子类的构造函数
        this.arr=[1,2,3]
    }
    sing(){
        console.log('teacger sing')
    }
}



const base =new Base('lisi',20)
base.setName('wangwu')
console.log(base.getName())
const student1=new Student('hhh',55)
console.log(student1.getName())
const teacher1 =new teacher('xiaoli',30)
student1.sing()
teacher1.sing()

