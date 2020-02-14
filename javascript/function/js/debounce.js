/*
    防抖 多次执行变为1次执行
    eg:我每天晚上跑步1圈 坚持3天就吃一顿海底捞 如果我在3天内没有坚持住，那就重新计时
    应用场景: 按钮提交 ，input 搜索

*/
function debounce(func,delay=1000,immediate=true){
    let context = this,timer;
    let later=()=>
        setTimeout((args)=>{
            func.call(context,...args);
            context=null;
            timer=null
        },delay)

    return function(...args){
        if(timer) clearTimeout(timer,args)
        if(immediate){
            func.call(context)
            immediate=false
            setTimeout(()=>{
                timer=null
            },delay)
        }else{
            timer=later(args)
        }
    }
}


