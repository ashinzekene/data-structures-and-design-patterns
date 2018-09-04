def solution(A, K):
    B = [0 for i in A]
    for i, x in enumerate(A):
        newI = (i + K) % len(A)
        print(newI)
        B[newI] = x
    return B


# print(solution([3, 8, 9, 7, 6], 3))

def checkOdd(A):
    a = [0 for x in range(max(A) + 1)]
    for x in A:
        a[x] = (a[x] + 1) % 2
    print(a)
    return(a.index(1))


print(checkOdd([3, 8, 9, 7, 6, 3, 7, 6, 9]))
