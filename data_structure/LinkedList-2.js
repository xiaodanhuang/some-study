//双链表
function Node(element) {
    this.element = element;
    this.previous=null;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display=display;
    this.findPrevious=findPrevious;
    this.remove=remove;

}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.previous=current;
    newNode.next = current.next;
    current.next = newNode;

}
function display(){
    var currNode = this.head;
    while (!(currNode.next==null) ) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function findPrevious(item){
    var currNode = this.head;
    while (currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;

}
function remove(item){
    var preNode=this.findPrevious(item);
    var currNode=this.find(item);
    preNode.next=preNode.next.next;
    preNode.next.previous=preNode;
    currNode.next=null;
    currNode.previous=null;

}
// 主程序
var g = new LList();
g.insert('a','head');
g.insert('b','a');
g.insert('c','b');
g.remove('b');
g.display();