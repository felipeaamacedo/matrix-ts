//class Matrix{
	//constructor(public row:number, public col:number){
		//row= this.row
		//col= this.col
	//}
		
	//public	matrix:Array<Array<number>> = new Array()
		//for(i = 1; i<=this.row;i++){
			//this.matrix.push(Array(this.col))
		//}

//}



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

function minor(M:number[][], del_row:number, del_col:number):number[][]{
	let M_row:number = size(M)[0]
	let M_col:number = size(M)[1]	
	let Minor_Matrix:Array<Array<number>> = new Array()
	let flagRow:boolean = false
	let flagCol:boolean = false


	for(let i = 1; i<=M_col-1;i++){
		Minor_Matrix.push(Array(M_row-1))
	}

	for(let j = 0; j<M_col; j++){
		flagRow = false
		if((j == del_col-1) && (del_col <M_col)){
			j++	
			flagCol=true
		}
		for(let i = 0; i<M_row; i++){
			if((i == del_row-1 )&&(del_row <M_row)){
				i++		
				flagRow=true
			}
			if ((flagCol==true)&&(flagRow==false)){
				Minor_Matrix[i][j-1] = M[i][j]
			}else if((flagCol==false)&&(flagRow==true)){
				Minor_Matrix[i-1][j] = M[i][j]
			}else if((flagCol==true)&&(flagRow==true)){
				Minor_Matrix[i-1][j-1] = M[i][j]
			}else{
				Minor_Matrix[i][j] = M[i][j]
			}
		}
	}

	return Minor_Matrix 
}

function determinant(M:number[][]):number{
	let M_row:number = size(M)[0]
	let M_col:number = size(M)[1]	
	
	if(M_row==M_col && M_col+M_row>=4){
		for(let j = 0; j<=M_row; j++){
			for(let i = 0; i<=M_row; i++){
				// STILL NEEDS TO ADD THE MINOR OF IJ
				//sum = sum + M[i][j]*(-1)**(i+j)*
			}
		}	
	}	

	let minor = 0
	return minor

}

let A:number[][]= [[3, 4, 2]]
let B:number[][]= [[13, 9, 7, 15], [8, 7, 4, 6], [6, 4, 0, 3]]
let D:number[][]= [[2,1,4], [0,1,1]]
let E:number[][]= [[6, 3, -1, 0], [1, 1, 0, 4], [-2, 5, 0, 2]]
let C:number[][]= multiply(A,B)
let F:number[][]= multiply(D,E)
let G:number = F[0][0]
let H:number[][]= [[1,3,4],[0,2,3]]
let I:number[][]= [[4,1,2],[0,2,0],[1,0,2]]

console.log(minor(I,1,1))

console.log(A)
console.log(size(A))
console.log(C)
console.log(size(C))
console.log(F)
console.log(size(F))
console.log(G)
console.log(transpose(H))
