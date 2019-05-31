var MinStack = function() {
    this.data=[]

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x)

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length-1]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.data)


};
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
console.log(minStack.getMin())