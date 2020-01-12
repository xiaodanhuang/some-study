Function.prototype.myBind=function(context,...args){
    if(typeof this !== "function"){
        throw new TypeError(`${this} is not a function`)
    }
    var self = this;
    var fNOP = function () {};
    var fbound = function () {
        self.apply(this instanceof self ?
            this :
            context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;

}
sayName.bind(this,1,3,45)

function person(name,sex){

}
