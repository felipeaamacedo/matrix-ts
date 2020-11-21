function size(U:number[][]):number[]{
    let size:number[] = [U.length, U[0].length] 

    return size
}

function multiply(MatA:number[][], MatB:number[][]):number[][]{
	let MatA_Row:number = size(MatA)[0]
	let MatA_Col:number = size(MatA)[1]

	let MatB_Row:number = size(MatB)[0]
	let MatB_Col:number = size(MatB)[1]

	if (MatA_Col !== MatB_Row){
		throw new Error('Number of cols in Mat1 is different from Mat2 rows')
	}


	let MatC:number[][]=[[],[]]

	for(let i=0; i<MatA_Row ;i++){
		console.log(i)
		for(let j=0; j<MatB_Col; j++){
			console.log(j)
			let sum:number = 0
			for(let k=0; k<MatB_Row; k++){
				console.log(k)
				sum = sum + MatA[i][k]*MatB[k][j]
			}
			MatC[i][j]= sum	
		}
	}
	return MatC
}

let A:number[][]= [[3, 4, 2]]
let B:number[][]= [[13, 9, 7, 15], [8, 7, 4, 6], [6, 4, 0, 3]]
let D:number[][]= [[1,3,2], [1,2,3]]
let C:number[][]= multiply(A,B)

console.log(A)
console.log(size(A))
console.log(C)
console.log(size(C))
