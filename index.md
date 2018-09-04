# Data Structures and algorithms


- Algoriths: Method for solving a problem
- Data structures: method for storing information

| topic               | data struccture and algorithms
|---------------------|--------------------------------
| data types          | queues, bags, stacks, union-find, prority queue
| sorting             | quicksort, mergesort, heapsort, radixsorts
| searching           | BST, red-black BST, hash table
| graph               | BFS, DFS, Prim, Kruskal, Dijkstra
| strings             | KMP, regular expressions, TST, Huffman, LZW
| advanced            | B-tree, suffix array, max-flow


Applications
- Biology. Human genome project, protein folding, ...
- Computers. Circuit layout, file system, compilers, ...
- Computer graphics. Movies, video games, virtual reality, ...
- Security. Cell phones, e-commerce, voting machines, ...
- Multimedia. MP3, JPG, DivX, HDTV, face recognition, ...
- Social networks. Recommendations, news feeds, advertisements, ...
- Physics. N-body simulation, particle collision simulation, ...

Why study algorithms

- To solve problems
- For intellectual stimulation
- To be a proficient and better programmer
- A common language for understanding nature
- For fun and profit

# UNION FIND

- dynamic connectivity
- quick find
- quick union
- improvments
- applications


## Dynamic connectivity


Quick Find Algorithm
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

union(2, 3)
[0, 1, 3, 3, 4, 5, 6, 7, 8, 9, 10]

union(5, 3)
[0, 1, 3, 3, 4, 3, 6, 7, 8, 9, 10]

union(3, 6)
[0, 1, 6, 6, 4, 6, 6, 7, 8, 9, 10]

connected(5, 1)
false

connected(2, 5)
true