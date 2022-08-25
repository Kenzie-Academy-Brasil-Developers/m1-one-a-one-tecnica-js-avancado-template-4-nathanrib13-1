
function encontrarValor  (arr, num){
    let  totalEncontrado = 0 
    for (let i = 0; i<arr.length; i++){
        if(arr[i] !== num && num > 0){
            totalEncontrado +=1
        }
    }
return totalEncontrado
}

let result = encontrarValor([1,1,2,1,1], 1)
console.log(result)