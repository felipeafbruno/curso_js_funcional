// Função Pura 
// Imutabilidade
function ordenar(array) {
    return [...array].sort() // [...array] gera um clone do array passado
}

const nums = [3, 1, 7, 9, 4, 6]
const numsOrdenados = ordenar(nums)
console.log(numsOrdenados, nums)

const parteNums = nums.slice(2)
console.log(parteNums, nums)
