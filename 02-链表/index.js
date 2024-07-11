// 创建链表

function Node(value){
  this.value = value;
  this.next = null;
}

a = new Node(1);
b = new Node(2);
c = new Node(3);
d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

console.log(a.value,a.next.value,a.next.next.value,a.next.next.next.value)


// 递归遍历链表

function bl(node){
  if(node === null) return
  console.log(node.value)
  bl(node.next)
}

bl(a)


// 链表逆置
function reverse(node){
  if(node.next.next === null){
    node.next.next = node
    return node.next
  }else{
    const result = reverse(node.next)
    node.next.next = node
    node.next = null
    return result
  }
}

const result = reverse(a)
console.log("555", result);
bl(result);