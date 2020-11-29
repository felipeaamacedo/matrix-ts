export class Matrix{
    private _data:number[][] = new Array()

    constructor(private _row:number, private _col:number){
        let row = this._row
        let col = this._col

        
        //CREATING THE MATRIX
        for(let i=0; i<this._row; i++){
            this._data.push(Array(this._col))        
        }
    }

    get row(){
    	return this._row
    }

    get col(){
    	return this._col
    }

    get data(){
    	return this._data
    }

    set data(A:number[][]){
    	if ((A.length !== this.row)&&(A[0].length !== this.col)){
		throw new Error('Number of row and of col are different from the specified in the matrix, please check it')
	}else{
		this._data = A
	}	
    }


    size():number[]{
    	return [this.row, this.col]
    }

    public determinant():number{
        if(this.row !== this._col){
            throw new Error('The matrix is not a square')
        }else{
            if(this.row == 2){
                return this.data[0][0]*this.data[1][1] - this.data[0][1]*this.data[1][0]
            }else{
                let iCof = 1
                let sum:number = 0
                for(let j = 0; j<this._col; j++){
                    sum = sum + this.data[iCof-1][j]*(-1)**(iCof+j+1)*this.sub_matrix(iCof,j+1).determinant()
                }
                return sum
            }
        }
    }

   protected sub_matrix(del_row:number, del_col:number):Matrix{
	    del_col = del_col-1
	    del_row = del_row-1

		let subMatrix:Matrix = new Matrix(this.row-1, this._col-1)
		let flagRow:boolean = false
		let flagCol:boolean = false

		for(let j = 0; j<this._col; j++){
			flagRow = false
			if((j == del_col) && (del_col < this._col)){
				j++	
				flagCol=true
			}
			for(let i = 0; i<this.row; i++){
				if((i == del_row ) && (del_row < this.row)){
					i++		
					flagRow=true
				}
				if ((flagCol==true)&&(flagRow==false)){
					subMatrix.data[i][j-1] = this.data[i][j]
				}else if((flagCol==false)&&(flagRow==true)){
					subMatrix.data[i-1][j] = this.data[i][j]
				}else if((flagCol==true)&&(flagRow==true)){
					subMatrix.data[i-1][j-1] = this.data[i][j]
				}else{
					subMatrix.data[i][j] = this.data[i][j]
				}
			}
		}
	    return subMatrix
	}

}




export function multiply(MatA:Matrix, MatB:Matrix):Matrix{
	let MatA_Row:number = MatA.row 
	let MatA_Col:number = MatA.col

	let MatB_Row:number = MatB.row 
	let MatB_Col:number = MatB.col 

	if (MatA_Col !== MatB_Row){
		throw new Error('Number of cols in Mat1 is different from Mat2 rows')
	}

	let MatC:Matrix = new Matrix(MatA_Row, MatB_Col)

	for(let i=0; i<MatA_Row ;i++){
		for(let j=0; j<MatB_Col; j++){
			let sum:number = 0
			for(let k=0; k<MatB_Row; k++){
				sum = sum + MatA.data[i][k]*MatB.data[k][j]
			}
			MatC.data[i][j]= sum	
		}
	}
	return MatC
}

export function transpose(M:Matrix):Matrix{
	let Mtransp:Matrix= new Matrix(M.row, M.col)
	for(let i=0; i<M.row;i++){
		for(let j=0;j<M.col;j++){
			Mtransp.data[j][i] = M.data[i][j]			
		}
	}

	return Mtransp
}

