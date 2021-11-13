//          Arrays  Hash Table  Linked List
// Search   O(n)    O(1)        N/A
// Lookup   O(1)    O(1)        O(n)
// Push     O(1)*   N/A         N/A
// Insert   O(n)    O(1)        O(n)
// Delete   O(n)    O(1)        O(n)
// Prepend                      O(1)
// Append                       O(1)

// Array
// Pros: Fast Lookups, Fast push/pop, ordered
// Cons: Slow inserts, Slow deletes, Fixed size (if using a static array)

// Hash Tables
// Pros: Fast Lookups (Good collision resolution needed), Fast Inserts, Flexible Keys
// Cons: Unorderd, Slow Key Iteration
// Implementation: Usually faster at the cost of more space

// Linked Lists
// Pros: Fast Insertion, Fast Deletion, Ordered, Flexible size
// Cons: Slow lookup, More memory
// Implementation: Can grow and shrink as we need, used when there is a collision in hash tables

// Huerestics:
// Hash tables/maps are usually the answer to improve Time Complexity
// Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your code
// Look at the Time vs. Space tradeoff. Sometimes storing extra state in memory can help the time. (Runtime)
// Space time tradeoffs: Hash tables usually solve this a lot of the time. You use more space, but you get time optimization
