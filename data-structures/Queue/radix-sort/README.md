# Radix Sort

How radix sort works

```
Bin 0:
Bin 1: 91, 31
Bin 2: 92, 22
Bin 3:
Bin 4:
Bin 5: 85, 15, 35
Bin 6: 46
Bin 7:
Bin 8:
Bin 9:
```

Now the numbers are sorted based on which bin they are in:
91, 31, 92, 22, 85, 15, 35, 46
Next, the numbers are sorted by the 10s digit into the appropriate bins:

```
Bin 0: 15
Bin 1:
Bin 2: 22
Bin 3: 31, 35
Bin 4: 46
Bin 5:
Bin 6:
Bin 7:
Bin 8: 85
Bin 9: 91, 92
```

Finally, take the numbers out of the bins and put them back into a list, and you get the
following sorted list of integers:

`15, 22, 31, 35, 46, 85, 91, 92`