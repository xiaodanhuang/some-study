function throttle(func,delay,immidate,...args){
    let canRun=true,context=this;
    let later=()=>{
        setTimeout(()=>{
            func.call(context,...args)
            canRun=true
        },delay)
    }
    return function(){
        if(!canRun){
            return
        }
        canRun=false
        if(immidate){
            func.call(context,...args)
            setTimeout(()=>{
                canRun=true
            },delay)
        }else{
            later()
        }
    }
}