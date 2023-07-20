// set,集合数据类型
// 集合是由一组无序且唯一的项组成的
const set = new Set();
set.add(1)
set.add(2)
console.log(set)
//删除某元素
set.delete(2)

//清空所有
set.clear()

//判断是否存在某元素
set.has(3)

// 考题
//请将数组中重复的项去掉
const arr=[1,1,2,2,2,23,3,3,3]
//将数组变为集合
const a=new Set(arr)
console.log(a)
//将集合变为数组
const arr2=Array.from(a)
console.log(arr2)