function ListNode(val){
    this.val=val;
    this.next=null
}

var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null
    if(headA==headB) return headA
    let a=headA;
    while(a){
        let b=headB;
        while(b){
            if(a==b){
                return "Reference of the node with value = "+b.next.val
            }
            b=b.next;
        }
        a=a.next;
    }
    return null
};
let node=new ListNode(8)
let headA=new ListNode(4)
headA.next=new ListNode(1);
headA.next.next=node;
let headB=new ListNode(5)
headB.next=new ListNode(0)
headB.next.next=new ListNode(1)
headB.next.next.next=node;

console.log(getIntersectionNode(headA,headB))