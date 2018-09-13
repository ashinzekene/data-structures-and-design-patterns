import Stack
import math

def to_binary(x):
    s = Stack()
    y = x
    while y > 0:
        s.pus(y % 2)
        y = math.floor(y / 2)