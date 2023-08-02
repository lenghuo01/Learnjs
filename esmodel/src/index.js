const a =11

function hh(){
    console.log('hh')
}
//导出语句
export{
    //重命名as
    a as test,
    hh
}

export const b =1