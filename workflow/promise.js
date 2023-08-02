//回调地狱问题
// promise
//将异步的回调问题，转换成链式调用
//编程链式调用之后，看起来像同步

//步骤
//1.将所有的异步逻辑，封装成promise对象
//2.让异步函数直接返回promise对象
function network()
{
    // resolve 对应成功的回调
    // reject 对应失败的回调
    const callback=(resolve,reject)=>{
    setTimeout(()=>{
        //console.log('hello')
        // 转换状态并，携带返回值
        resolve('hello')
    },3000)
    }
    const pro =new Promise(callback)
     return pro 
}

const pro = network()
// 回调函数的返回值，会被then方法作为返回值
pro.then (
    (data)=>{console.log(data)
        return network()
    } 
 
).then((data)=>console.log(data))
//实现sleep函数
// function sleep(time){
// console.log('start')
//     sleep(3000).then(()=>{
//         console.log('hello')
//     })
// }
function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},time)
    })
}
sleep(3000).then(()=>console.log('hello'))

//promise方法
// Promise.all所有的promise都转换为fullfilled状态，才会执行then
// 异步任务队列->promise array
// function factoaryTask(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('helloww')
//         },3000)
//     })
// }
// const taskQueue=[]
// for(let i=0;i<10;i++){
//     taskQueue.push(factoaryTask()) 
// }
// // 直接产生一个rejected状态的promise
// // taskQueue.push(Promise.reject('error'))
// Promise.all(taskQueue).then((data)=>{console.log(data)},(error)=>{console.log(error)})
function factoaryTask(data ){
         return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                 resolve('helloww'+data)
             },3000)
         })
     }

     //将异步同步化
     async function main(){
        // await 后面跟的是一个promise
        const a  = await factoaryTask(1)
        console.log(a)
        const b = await factoaryTask(2)
        console.log(b)
        console.log('hh')
        const c=await factoaryTask(3)
        console.log(c)
     }
     main()