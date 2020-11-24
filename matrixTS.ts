class Matrix{
	constructor(public row:number, public col:number){
		row= this.row
		col= this.col

		
	let MatC:Array<Array<number>>= new Array()
		for(let i = 1; i<=this.row;i++){
			MatC.push(Array(this.col))
		}

	}
}



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

	let MatC:Array<Array<number>>= new Array()
		for(let i = 1; i<=MatA_Row;i++){
			MatC.push(Array(MatB_Col))
		}

	for(let i=0; i<MatA_Row ;i++){
		for(let j=0; j<MatB_Col; j++){
			let sum:number = 0
			for(let k=0; k<MatB_Row; k++){
				sum = sum + MatA[i][k]*MatB[k][j]
			}
			MatC[i][j]= sum	
		}
	}
	return MatC
}

function transpose(M:number[][]):number[][]{
	let M_row:number = size(M)[0]
	let M_col:number = size(M)[1]	

	let Mtransp:Array<Array<number>>= new Array()
	for(let i = 1; i<=M_col;i++){
		Mtransp.push(Array(M_row))
	}
	
	for(let i=0; i<M_row;i++){
		for(let j=0;j<M_col;j++){
			Mtransp[j][i] = M[i][j]			
		}
	}

	return Mtransp
}

//function determinant(Mat:number[][]):number{
	//let det:number = 0
	//if (size(Mat)[0] === size(Mat)[1]){
		//det =  (Mat[0][0]*Mat[1][1]) - (Mat[0][1]*Mat[1][0])
	//}else{
		//let total:number = 0

	//}

	//return det
//}

let A:number[][]= [[3, 4, 2]]
let B:number[][]= [[13, 9, 7, 15], [8, 7, 4, 6], [6, 4, 0, 3]]
let D:number[][]= [[2,1,4], [0,1,1]]
let E:number[][]= [[6, 3, -1, 0], [1, 1, 0, 4], [-2, 5, 0, 2]]
let C:number[][]= multiply(A,B)
let F:number[][]= multiply(D,E)
let G:number = F[0][0]
let H:number[][]= [[1,3,4],[0,2,3]]


console.log(A)
console.log(size(A))
console.log(C)
console.log(size(C))
console.log(F)
console.log(size(F))
console.log(G)
console.log(transpose(H))
