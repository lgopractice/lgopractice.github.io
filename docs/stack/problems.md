# Problems

<style>
.md-typeset table th:first-child,
.md-typeset table td:first-child {
  width: 50px;
  min-width: 50px;
  white-space: nowrap;
}
</style>

### Tier 1 — Foundations

| # | Problem | LC # | Pattern Focus |
|---|---------|------|--------------|
| 1 | [Implement Stack using Array / Linked List](index.md) | — | <span class="spoiler">Build it from scratch</span> |
| 2 | [Valid Parentheses](02.md) | [20](https://leetcode.com/problems/valid-parentheses/) | <span class="spoiler">Matching pairs</span> |
| 3 | [Implement Queue using Two Stacks](03.md) | [232](https://leetcode.com/problems/implement-queue-using-stacks/) | <span class="spoiler">Two-stack interplay</span> |
| 4 | [Implement Stack using Two Queues](04.md) | [225](https://leetcode.com/problems/implement-stack-using-queues/) | <span class="spoiler">Reverse of the above</span> |
| 5 | [Min Stack](05.md) | [155](https://leetcode.com/problems/min-stack/) | <span class="spoiler">Tracking auxiliary state</span> |
| 6 | [Backspace String Compare](06.md) | [844](https://leetcode.com/problems/backspace-string-compare/) | <span class="spoiler">Stack as a "running result"</span> |
| 7 | [Remove Outermost Parentheses](07.md) | [1021](https://leetcode.com/problems/remove-outermost-parentheses/) | <span class="spoiler">Depth tracking</span> |

---

### Tier 2 — Monotonic Stack

| # | Problem | LC # | Pattern Focus |
|---|---------|------|--------------|
| 8 | [Next Greater Element I](08.md) | [496](https://leetcode.com/problems/next-greater-element-i/) | <span class="spoiler">Entry point to the pattern</span> |
| 9 | [Next Greater Element II — circular array](09.md) | [503](https://leetcode.com/problems/next-greater-element-ii/) | <span class="spoiler">How to handle wrap-around</span> |
| 11 | Daily Temperatures | [739](https://leetcode.com/problems/daily-temperatures/) | <span class="spoiler">Variation on NGE</span> |
| 12 | Previous Smaller Element | [GFG](https://www.geeksforgeeks.org/dsa/previous-smaller-element/) | <span class="spoiler">Left-pass mirror of NGE</span> |
| 13 | Final Prices With a Special Discount | [1475](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | <span class="spoiler">NGE in disguise, easy warm-up</span> |
| 14 | Next Greater Node in Linked List | [1019](https://leetcode.com/problems/next-greater-node-in-linked-list/) | <span class="spoiler">Same pattern, different input structure</span> |
| 15 | Online Stock Span | [901](https://leetcode.com/problems/online-stock-span/) | <span class="spoiler">Streaming / online version</span> |
| 16 | Buildings Facing Sun | [GFG](https://www.geeksforgeeks.org/dsa/buildings-facing-the-sun/) | <span class="spoiler">Right-pass monotonic variant</span> |
| 17 | Sum of Subarray Minimums | [907](https://leetcode.com/problems/sum-of-subarray-minimums/) | <span class="spoiler">Contribution of each element</span> |
| 18 | Maximum Width Ramp | [962](https://leetcode.com/problems/maximum-width-ramp/) | <span class="spoiler">Two-pass non-obvious application</span> |
| 19 | Largest Rectangle in Histogram | [84](https://leetcode.com/problems/largest-rectangle-in-histogram/) | <span class="spoiler">The canonical hard monotonic problem</span> |
| 20 | Maximal Rectangle in Binary Matrix | [85](https://leetcode.com/problems/maximal-rectangle/) | <span class="spoiler">Problem 19 applied 2-dimensionally</span> |
| 21 | Trapping Rain Water | [42](https://leetcode.com/problems/trapping-rain-water/) | <span class="spoiler">Can be solved multiple ways; try stack last</span> |
| 22 | Max of Mins for Every Window Size | [GFG](https://www.geeksforgeeks.org/dsa/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/) | <span class="spoiler">Window-parameterized variant</span> |
| 23 | Remove K Digits to Make Smallest Number | [402](https://leetcode.com/problems/remove-k-digits/) | <span class="spoiler">Greedy decision using the pattern</span> |
| 24 | Find the Most Competitive Subsequence | [1673](https://leetcode.com/problems/find-the-most-competitive-subsequence/) | <span class="spoiler">Constrained version of problem 23</span> |
| 25 | Remove Duplicate Letters | [316](https://leetcode.com/problems/remove-duplicate-letters/) | <span class="spoiler">Lexicographic greedy with a constraint</span> |

---

### Tier 3 — Stack for Parsing & Simulation

| # | Problem | LC # | Pattern Focus |
|---|---------|------|--------------|
| 26 | Evaluate Reverse Polish Notation | [150](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | <span class="spoiler">Operand/operator processing</span> |
| 27 | Basic Calculator II | [227](https://leetcode.com/problems/basic-calculator-ii/) | <span class="spoiler">Operator precedence without parentheses</span> |
| 28 | Basic Calculator I | [224](https://leetcode.com/problems/basic-calculator/) | <span class="spoiler">Adding parentheses to problem 27</span> |
| 29 | Decode String | [394](https://leetcode.com/problems/decode-string/) | <span class="spoiler">Nested structure, two stacks</span> |
| 30 | Reverse Substrings Between Each Pair of Parentheses | [1190](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/) | <span class="spoiler">Nested reversal</span> |
| 31 | Asteroid Collision | [735](https://leetcode.com/problems/asteroid-collision/) | <span class="spoiler">Stack as surviving state</span> |
| 32 | Remove All Adjacent Duplicates in String | [1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | <span class="spoiler">Stack as a building result</span> |
| 33 | Remove All Adjacent Duplicates II | [1209](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) | <span class="spoiler">Problem 32 with a count dimension</span> |
| 34 | Score of Parentheses | [856](https://leetcode.com/problems/score-of-parentheses/) | <span class="spoiler">Value accumulation through nesting</span> |
| 35 | Validate Stack Sequences | [946](https://leetcode.com/problems/validate-stack-sequences/) | <span class="spoiler">Simulating push/pop to check validity</span> |
| 36 | Simplify Path | [71](https://leetcode.com/problems/simplify-path/) | <span class="spoiler">Stack on filesystem tokens</span> |
| 37 | Check if a Parentheses String Can Be Valid | [2116](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/) | <span class="spoiler">Wildcards + brackets</span> |

---

### Tier 4 — Hard / Interview-Grade

| # | Problem | LC # | Pattern Focus |
|---|---------|------|--------------|
| 38 | Longest Valid Parentheses | [32](https://leetcode.com/problems/longest-valid-parentheses/) | <span class="spoiler">Index tracking, not just characters</span> |
| 39 | Sum of Subarray Ranges | [2104](https://leetcode.com/problems/sum-of-subarray-ranges/) | <span class="spoiler">Extension of Sum of Subarray Minimums</span> |
| 40 | Maximum Score of a Good Subarray | [2002](https://leetcode.com/problems/maximum-score-of-a-good-subarray/) | <span class="spoiler">Two-pointer meets monotonic stack</span> |
| 41 | Number of Visible People in a Queue | [1944](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) | <span class="spoiler">Right-to-left monotonic reasoning</span> |
| 42 | Count of Submatrices That Sum to Target | [1074](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) | <span class="spoiler">2D + stack/prefix combo</span> |
| 43 | Largest Rectangle — general shapes | — | <span class="spoiler">Generalization of problem 19</span> |
| 44 | Check Redundant Brackets | [GFG](https://www.geeksforgeeks.org/dsa/redundant-braces/) | <span class="spoiler">Operator-aware bracket validation</span> |
| 45 | Expression Add Operators | [282](https://leetcode.com/problems/expression-add-operators/) | <span class="spoiler">Backtracking + evaluation stack</span> |

---

### Tier 5 — Design Problems

| # | Problem | LC # | Pattern Focus |
|---|---------|------|--------------|
| 46 | Design Stack with Increment Operation | [1381](https://leetcode.com/problems/design-a-stack-with-increment-operation/) | <span class="spoiler">Lazy updates on a stack</span> |
| 47 | Max Frequency Stack | [895](https://leetcode.com/problems/maximum-frequency-stack/) | <span class="spoiler">Multi-layered frequency tracking</span> |
| 48 | Design Browser History | [1472](https://leetcode.com/problems/design-browser-history/) | <span class="spoiler">Two-stack navigation model</span> |
| 49 | LFU / LRU Cache | [146](https://leetcode.com/problems/lru-cache/) / [460](https://leetcode.com/problems/lfu-cache/) | <span class="spoiler">Stack/deque as an eviction policy</span> |
