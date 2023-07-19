//  创建 属性读取 属性修改 属性删除
//1. 对象类型  引用类型
//创建对象
var obj = {
name: 'zhangsan',
age:'18 '
}

//增加属性
obj.value = '320'


// 设置属性
obj.name = 'wangwu'
//或者
obj['age']=20
// 删除属性
delete obj.value

// 添加变量
var str = 'hhh'
obj[str]='lll'
// 读取属性
console.log( obj)
console.log( obj.age)
console.log( obj['age'])