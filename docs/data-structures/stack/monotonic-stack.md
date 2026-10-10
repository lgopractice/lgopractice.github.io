# Monotonic Stack

It's a specific technique applied to a standard stack. The defining rule is as follows:

> the elements inside the stack must always remain sorted (either increasing or decreasing)

When a new element arrives that can break the order, we pop elements from the top of the stack until the correct order is restored.

## Application

In many array problems we need the "next greater" or "previous smaller" element for items. While brute force will result in $O(N^2)$, the monotonic stack can do the same in $O(N)$.

## Variations

There are two version essentially, depending upon what we keep in the stack. Let's say we have array like this

> `[a, b, c, d]`

and we are asked to find the next greater element for each of the array item. We have two possible routes to take:

| Regular | Deferred |
|---------|----------|
| Process right-to-left | Process left-to-right |
| Hold actual numbers in stack | Hold indices in stack |
| Stack elements are **candidates** who'll become someone's nge | Stack elements are items in waiting room, waiting for their nge |

## Two versions

<div markdown class="grid">

### Regular

### Deferred

```kotlin linenums="1"
private fun nge(nums: IntArray): IntArray {
  // candidate nge
  val stack = ArrayDeque<Int>()
  val nge = IntArray(nums.size) { -1 }

  for ((i, n) in nums.withIndex().reversed()) {
    // candidate too small to be n's nge
    while (stack.isNotEmpty() && stack.first() <= n) {
      stack.removeFirst()
    }
    nge[i] = if (stack.isEmpty()) -1 else stack.first()
    stack.addFirst(n)
  }
  return nge
}
```

```kotlin linenums="1"
private fun nge(nums: IntArray): IntArray {
  // elements waiting for their nge
  val stack = ArrayDeque<Int>()
  val nge = IntArray(nums.size) { -1 }

  for ((i, n) in nums.withIndex()) {
    // n is nge of element at index `stack.first`
    while (stack.isNotEmpty() && n > nums[stack.first()]) {
      nge[stack.removeFirst()] = n
    }
    stack.addFirst(i)
  }
  return nge
}
```

<div markdown>
- Proceed right-to-left.
- hold in stack the **would-be `nge`s**.
    - top of the stack is the smallest candidate
    - bottom of the stack is the largest number seen so far.
- Let currently considered element be $n$:
    - if top of the stack $\le n$, it's of no use. discard it.
    - otherwise we have found the nge for $n$
- add $n$ to stack to be someone else's nge.
</div>

<div markdown>
- Proceed left-to-right.
- stack is the holding area for elements waiting an nge. (i.e. counter-party to stack elements in the first version).
    - top of the stack is the most recently added smallest unresolved number.
    - bottom of the stack is the largest unresolved number.
- Let currently considered element be $n$ at position $i$:
    - keep popping the waiting number as long as $n$ is their nge.
- add $n$ to stack (holding area) now waiting for its own nge.
</div>

</div>

