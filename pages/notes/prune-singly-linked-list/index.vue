<template>
  <div>
    <p>A singly linked list is an object with two properties, `val` and `next`. `val` is an integer. The value of `next` is another object of the same shape, or null. Given a singly linked list linkedList and an integer x, remove any nodes whose `val` is larger than x.</p>
    <pre>
			const linkedList = {
				val: 1,
				next: {
					val: 2,
					next: {
						val: 7,
						next: {
							val: 4,
							next: {
								val: 5,
								next: {
									val: 6,
									next: {
										val: 7,
										next: null
									}
								}
							}
						}
					}
				}
			}
    </pre>
    <pre>
			function removeNodes(list, x) {

				let head

				function setHead(node) {
					if (node.val less than x) {
						head = node
					} else {
						setHead(node.next)
					}
				}
				setHead(list)

				function prune (node) {
					if (node === null) return node

					if (node.val > x) {
						return prune(node.next)
					} else {
						node.next = prune(node.next)
					}
					return node
				}

				if (head) {
					head.next = prune(head.next)
				}

				console.log(head)
				return head
			}

			removeNodes (linkedList, 6)
    </pre>
  </div>
</template>
