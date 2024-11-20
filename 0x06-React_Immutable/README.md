Key Learning Points
Immutable Objects:

What: Objects that cannot be modified after creation.
Why: Helps prevent unintended side effects, especially in functional programming or state management (e.g., Redux).
When: Useful in applications where immutability improves performance (e.g., shallow equality checks) or reduces bugs.
Immutable.js:

A library for working with immutable data structures like List, Map, and others.
Provides efficient, persistent data structures and functional utilities for deep copying and transformations.
List vs. Map:

List: Ordered, indexed collection. Similar to JavaScript arrays.
Map: Key-value pairs, like JavaScript objects, but immutable.
Methods:

Merge: Combines two structures into one.
Concat: Adds elements to a list.
Deep Merging: Recursively merges nested structures.
Lazy Seq:

A Sequence in Immutable.js that evaluates lazily, optimizing memory and CPU usage.
