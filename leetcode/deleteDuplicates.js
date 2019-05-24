//83  删除排序链表中的重复元素
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    if(!head){
        return head
    }
    let current=head;
    while(current.next){
        if(current.val==current.next.val){
            current.next=current.next.next
        }else{
            current=current.next;
        }
    }
};
c