/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //firstly we will detect the cycle by moving slow and fast pointer
    //slow= slow.next
    //fast  = fast.next.next
    let slow = head
    let fast = head
    while(fast && fast.next && fast.next.next){ //if fast pointer is null then it means no cycle
       slow= slow.next
       fast  = fast.next.next
       if(slow === fast){ //cycle detected
          //here we got meeting point=4, for 3,2,0,4
          //a = head to the linked value(i.e 3 to 2)
          //b = linked to meeting point (i.e 2 to 4)
          //c = meeting point to linked value(i.e 4 to 2)
          //slow moved a+b, fast moved a+b+c+b
          //slow =2(a+b), 2 because fast pointer moved 2 value
          //2(a+b) = a+b+c+b => a=c i.e head to the linked value is same as meeting point to linked value
          let ptr1 = head //start
          let ptr2 = fast //meeting point
          while(ptr1 !== ptr2){
            ptr1 = ptr1.next
            ptr2 = ptr2.next
          }
          return ptr1

       }
    }
    return null
};