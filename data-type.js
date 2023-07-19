// 1.undefine基础数据类型空值
//const定义常量，let定义变量，var定义全局变量，直接写变量名a=1;
var a
console.log(a)

//2. null 引用数据类型空值
//一般对象的默认值是null
var b =null
console.log(b);
//3. string
var c = "http://www.baidu.com"
var d ='getsomething'
var e = `${c}/${d}`//多行字符串，可以插入变量，写成什么样，打印什么样
var cd =c + '/' +d
console.log(e)
 
//4.number 没有浮点类型和整形的区别
console.log(1)
console.log(1.1)

//5. boolean true false
console.log(true)
console.log(false)

//es2015 , symbol类型
//确保生成的变量不会重复吧
var x1 =Symbol('对象描述')
var x2 =Symbol('对象描述')
//== 数据类型转换，如果比较的数据类型不同，则转换成相同数据类型再比较值
// === 严格相等
console.log(x1 === x2)

//坑
console.log('1'+ 0)//转化成字符串拼接
console.log('1'-1)//转化成number类型进行计算