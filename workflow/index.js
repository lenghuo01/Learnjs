
//异步
//主线程不能有cpu密集型任务
//定时、
setTimeout(()=>console.log('hhh'),3000)
console.log('start')

// callback函数
function network(callback){
    //异步
    setTimeout(()=>{
        callback('已执行')
    },3000)
}
network((data)=>{
    console.log(data)
})

console.log('hello')