class EventEmitter{
    constructor(){
        this.events={}
    }
    on(name, callback){
        if(this.events[name]){
            this.events[name].push(callback)
        }else{
            this.events[name]=[callback]
        }
    }
    once(name, callback){
        let func=(args)=>{
            this.events[name]=this.events[name].filter(fn=>fn!==func)
            callback.call(this,args)

        }
        this.on(name,func)
    }
    off(name){//其实这个地方可再来一个参数 指定删除哪个listener 默认删除全部酱紫 这样删除的时候就可以直接调用了
        if(this.events[name]){
            delete this.events[name]
        }
    }
    trigger(name,data){
        if(this.events[name]){
            this.events[name].forEach(fn=>{
                fn.call(this,data)
            })
        }
    }
}

var events=new EventEmitter()

events.on('eat',function(name){
    console.log(`${name}锅包肉`)
})
events.on('eat',function(name){
    console.log(`${name}酸菜炖猪肉`)
})
events.once('eat',function(name){
    console.log(`${name}抚顺麻辣拌`)
})
events.trigger('eat','我')
events.off('eat')
console.log(events)


/*

平时学习敲的代码的仓库：

https://github.com/xiaodanhuang/some-study

模仿大神vue简历做的react版本 //这个毕业的时候写的：部分图片在七牛云上 过期导致图片丢失

https://xiaodanhuang.github.io/build/#/
 */
