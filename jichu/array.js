
//深拷贝，新建一个对象，把原对象的属性值copy过来
const arr =[2,2,3]
//引用数据类型在做copy时，只是copy了引用地址，浅拷贝

const arr1=[{name:2},{name:20}]

// pop push shift


//遍历数组
// const callback = function(item,index,arr)
// {
//    console.log(item,index,arr)
// }
const callback=function(item)
{
console.log(item)
return {age:item.name+1}
}
//arr1.forEach(callback)

//map
const arr2=arr1.map(callback)
console.log(arr2)