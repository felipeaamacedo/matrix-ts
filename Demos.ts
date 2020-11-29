import { Matrix } from './matrixTS'
import { multiply } from './matrixTS'

let A:Matrix =  new Matrix(5,5)
A.data = [[15,3,2,-12,2], [0,2,20,1,0], [6,7,-90,4,1], [40,30,2,-9,8], [-8,5,32,10,40] ]

console.log(A.determinant())
let B:Matrix = new Matrix(5,2)
B.data = [[4,3],[32,3],[-2,12],[3,2],[1,2],[1,2]]

console.log(B.data)

let C = multiply(A,B) 
console.log(C.data)
