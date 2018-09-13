import Stack

def par_check(par):
    bal = True
    s = Stack()
    for ch in par:
        if ch == ')':
            s.push('(')
        elif ch == '(':
            if s.is_empty():
                bal = False
            else:
                s.pop()
    return s.is_empty() and bal