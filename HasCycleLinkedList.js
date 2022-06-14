/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false
    }
    let tortoise = head;
    let hare = head.next;
    while (hare && hare.next) {
        if (tortoise === hare) {
            return true;
        }
        tortoise = tortoise.next;
        hare = hare.next.next;
    }
    return false;
};