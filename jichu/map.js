// 哈希表
const mp=new Map()
mp.set('name','zhangsan')
mp.set('age',20)
console.log(mp)
//取值
console.log(mp.get('name'))

//删除项
mp.delete('age')