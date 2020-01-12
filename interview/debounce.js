/*
    抖动
 */
function debounce(method,delay){
    var  timer=null
    return function(){
        clearTimeout(timer);
        let e=this
        timer=setTimeout(function(){
            method.apply(e);
        },delay);
    }
}
let i=1
function time(){
    console.log(i++)
}
window.onresize=debounce(time,4000)


