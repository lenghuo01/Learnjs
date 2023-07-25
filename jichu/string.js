let  str1 = '1234'
// 取其中一个元素
console.log(str1[1])
//concat 拼接字符
const str2='456'
console.log(str1.concat(str2))

console.log(`${str1}${str2}`)

// 是否有某字符
console.log(str2.includes('45'))

//找对应字符的索引,找不到返回-1
console.log(str1.indexOf('3'))

// 是否匹配match()

//替换,不会改变原字符串，形成一个新的字符串
//replace只替换第一个
//replaceAll替换所有
 str1=str1.replace('123','012')

console.log(str1)

//切割字符串,左闭右开
const str4=str1.slice(1,3)
console.log(str4)
//split
const str5='this is a dog'
const str6=str5.split(' ')//在空格的位置切分,变成一个数组
console.log(str6)
const str7=str6.join('-')//将数组各个项连接
console.log(str7)

//大小写
console.log(str5.toLocaleUpperCase())

// 去除字符串两边的空格
const str8=" hellow word  "
console.log(str8.trim())