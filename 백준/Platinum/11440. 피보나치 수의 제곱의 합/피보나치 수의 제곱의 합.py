mod = 1000000007

def cal(A,n):
  if n==1:
    return A
  cal2 = cal(A,n//2)
  if n%2:
    return multiply(multiply(cal2,cal2),A)
  return multiply(cal2,cal2)

def multiply(A,B):
  result = [[0]*3 for i in range(3)]
  for i in range(3):
    for j in range(3):
      for k in range(3):
        result[i][j] += A[i][k]*B[k][j]%mod
      result[i][j] %=mod
  return result

N = int(input())
if N == 1:
  print(1)
else:
  matrix = [[2,2,-1],[1,0,0],[0,1,0]]
  matrix = cal(matrix,N-1)  
  print(matrix[0][0])