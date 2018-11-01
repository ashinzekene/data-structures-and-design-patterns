
def climbingLeaderboard(scores, alice):
    results = []
    uniq = list(set(scores))
    for alice_score in alice:
        board = uniq[0]
        if alice_score > board:
            results.append(1) 
        elif alice_score < uniq[-1]:
            results.append(len(uniq))
        else:
            for x in range(len(uniq)):
                if alice_score > uniq[x]:
                    results.append(x)
                    break
    return results
                
"""
-------------------------------------------------------------
"""
from random import randint
def generate_scores(x = 40, y = 80):       
    scores = [randint(50, 70) for x in range(30)]
    scores.sort(reverse=True)
    return scores

alice = [70, 90, 67, 66, 76, 59, 65, 68, 54]
print('Alice', alice)

for x in range(3):
    new_scores = generate_scores()
    result = climbingLeaderboard(new_scores, alice)
    print('Alice', result)
    unique_scores = list(set(new_scores))
    unique_scores.sort(reverse = True)
    print('Scores', new_scores)
    print('Scores Set', unique_scores)
    print()
