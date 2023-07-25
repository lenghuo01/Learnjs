//合并两个对象,会修改第一个对象
const test1={a:1,b:2}
const test2={b:4,c:5}
console.log(Object.assign(test1,test2))

//entries,将对象转化为数组
const test3=Object.entries(test1)
console.log(test3)
test3.forEach(
    function(item){
        console.log(item)
    }
)

//冻结，使对象属性无法修改
Object.freeze(test2)
test2.b=6
console.log(test2)

//取对象的key和value
console.log(Object.keys(test2))
console.log(Object.values(test2))