# Stack

A **stack** is an abstract data type that serves as a collection of elements with two main operations:

- `push` which adds an element to the collection
- `pop` which removes the most recently added element

elements are added to and removed from a stack in **last in, first out** (LIFO) order.

## Implementations

=== "As array"

    $$
    \begin{align}
    \text{elements} = [1, \ 2, \ 3, \ 4, & \ 0, \ 0] \\
    & \uparrow \\
    & \text{top}
    \end{align}
    $$

    ```kotlin linenums="1"
    package com.example.stack

    class ArrayStack <T> {

      @Suppress("UNCHECKED_CAST")
      private var elements: Array<T?> = arrayOfNulls<Any?>(8) as Array<T?>

      private var top = 0

      fun push(e: T) {
        maybeResize()
        elements[top++] = e
      }

      fun peek(): T? = if (top == 0) null else elements[top-1]

      fun pop(): T? {
        if (top == 0) return null
        return elements[--top].also {
          elements[top] = null
        }
      }

      fun size() = top

      fun isEmpty() = top == 0

      private fun maybeResize() {
        if (top < elements.size) return
        elements = elements.copyOf(elements.size * 2)
      }
    }
    ```

    !!! tip "why `Array<T?>` and not `Array<T>`?"

        When we create an array of size `8`, all those `8` slots have to hold something. Since no elements have been pushed, they must hold `null`. 
        
        Additionally, for primitive types we could be contend with `Array<T>`. But if we were to hold objects into it, allowing `null` helps prevent memory leaks.

    !!! tip "why `arrayOfNulls<Any?>`?"

        When creating an array, JVM needs to allocate a contiguous block of memory, which requires knowing the size of `T` objects going in. Because of type erasure, JVM doesn't know what `T` is. So we tell it to create an array of `Any?`. 

        The cast `as Array<T?>` is needed so we can assign it to the variable. Promising the compiler that we will treat it strictly as an array of `T?`.

        The suppression is needed because otherwise the kotlin complier will flag casting `Any?` to `T?`.

=== "As linked list"

    ```kotlin linenums="1"
    package com.example.stack

    class ListStack<T> {
      private var head: Node<T>? = null
      private var size = 0

      fun push(e: T) {
        head = Node(e, head) // (1)
        size++
      }

      fun peek(): T? = head?.data

      fun pop(): T? {
        val curr = head ?: return null
        return curr.data.also { // (2)
          head = curr.next
          size--
        }
      }

      fun size() = size

      fun isEmpty() = head == null
    }

    private data class Node<T>(
      val data: T,
      var next: Node<T>? = null,
    )
    ```

    1. When stack is empty, it's `head = Node(e, null)`. 
    2. essentially move `head` forward `head = head.next`.

??? "Unit tests"

    ```kotlin
    package com.example.stack

    import org.assertj.core.api.Assertions.assertThat
    import kotlin.test.BeforeTest
    import kotlin.test.Test

    class ArrayStackTest {

      private lateinit var stack: ArrayStack<Int>

      @BeforeTest
      fun setup() {
        stack = ArrayStack()
      }

      @Test
      fun empty() {
        assertThat(stack.isEmpty()).isTrue
        assertThat(stack.size()).isEqualTo(0)
        assertThat(stack.peek()).isNull()
        assertThat(stack.pop()).isNull()
      }

      @Test
      fun single() {
        stack.push(1)

        assertThat(stack.isEmpty()).isFalse
        assertThat(stack.size()).isEqualTo(1)
        assertThat(stack.peek()).isEqualTo(1)
        assertThat(stack.pop()).isEqualTo(1)

        assertThat(stack.isEmpty()).isTrue
        assertThat(stack.size()).isEqualTo(0)
        assertThat(stack.peek()).isNull()
        assertThat(stack.pop()).isNull()
      }

      @Test
      fun three() {
        stack.push(1)
        stack.push(2)
        stack.push(3)

        assertThat(stack.isEmpty()).isFalse
        assertThat(stack.size()).isEqualTo(3)

        assertThat(stack.peek()).isEqualTo(3)
        assertThat(stack.pop()).isEqualTo(3)

        assertThat(stack.peek()).isEqualTo(2)
        assertThat(stack.pop()).isEqualTo(2)

        assertThat(stack.peek()).isEqualTo(1)
        assertThat(stack.pop()).isEqualTo(1)


        assertThat(stack.isEmpty()).isTrue
        assertThat(stack.size()).isEqualTo(0)
        assertThat(stack.peek()).isNull()
        assertThat(stack.pop()).isNull()
      }
      
      @Test
      fun exceedsInitialCapacity_resizesCorrectly() {
        // Push 10 elements to force the underlying array of size 8 to resize
        for (i in 1..10) {
          stack.push(i)
        }

        assertThat(stack.isEmpty()).isFalse
        assertThat(stack.size()).isEqualTo(10)
        assertThat(stack.peek()).isEqualTo(10)

        // Pop everything to ensure the copied array maintained the exact LIFO order
        for (i in 10 downTo 1) {
          assertThat(stack.pop()).isEqualTo(i)
        }

        // Ensure the top pointer successfully walked all the way back to 0
        assertThat(stack.isEmpty()).isTrue
      }

    }
    ```































