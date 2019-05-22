//21 合并两个有序链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let l3 = new ListNode(null);
    let currentL1 = l1;
    let currentL2 = l2;
    let currentL3 = l3;
    while (currentL1 && currentL2) {
        if (currentL1.val < currentL2.val) {
            if (currentL3.val == null) {
                currentL3.val = currentL1.val
            } else {
                currentL3.next = new ListNode(currentL1.val)
                currentL3 = currentL3.next;
            }
            currentL1 = currentL1.next;
        } else {
            if (currentL3.val == null) {
                currentL3.val = currentL2.val
            } else {
                currentL3.next = new ListNode(currentL2.val)
                currentL3 = currentL3.next;
            }
            currentL2 = currentL2.next;
        }
    }
    while (currentL1) {
        if (currentL3.val == null) {
            currentL3.val = currentL1.val
        } else {
            currentL3.next = new ListNode(currentL1.val)
            currentL3 = currentL3.next;
        }
        currentL1 = currentL1.next;
    }
    while(currentL2) {
        if (currentL3.val == null) {
            currentL3.val = currentL2.val
        } else {
            currentL3.next = new ListNode(currentL2.val)
            currentL3 = currentL2.next;
        }
        currentL2 = currentL2.next;
    }
    return l3;
}
function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let l3=new ListNode(null)
    let currentL1=l1;
    let currentL2=l2;
    let currentL3=l3;
    let arr=[]
    while(currentL1){
        arr.push(currentL1.val)
        currentL1=currentL1.next;
    }
    while(currentL2){
        arr.push(currentL2.val)
        currentL2=currentL2.next;
    }
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let current=arr[i];
                arr[i]=arr[j]
                arr[j]=current
            }
        }
    }
    arr.map(item=>{
        if(currentL3.val==null){
            currentL3.val=item
        }else{
            currentL3.next=new ListNode(item)
            currentL3=currentL3.next;
        }
    })
    return l3;
}
let l1=new ListNode(1)
l1.next=new ListNode(2)

let l2=new ListNode(2)
l2.next=new ListNode(4)

console.log(mergeTwoLists(l1,l2))