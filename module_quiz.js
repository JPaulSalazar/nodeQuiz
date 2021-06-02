//"exports" exporta el modulo para ejecutar lo que requiere el ejercicio y read nums agrupa todas las funciones necesarias para resolver el ejercicio y devuelve un string con todo lo pertinente
exports.readNums = function(nums){
    let max = numMax(nums)
    let min = numMin(nums)
    let plus = numsPlus(nums)
    let sort = sortNums(nums)
    let result = `El numero mayor de tu lista es ${max}, el numero menor de tu lista es ${min}, la suma de todos los numeros de tu lista es ${plus} y la lista de tus numeros ordenado de menor a mayor es ${sort}`

    return result
}

//esta funcion sirve para encontrar el numero mas alto de la lista que dio el usuario
function numMax(nums){
    let max = Math.max(...nums);
    return max
}

//esta funcion sirve para encontrar el numero mas bajo de la lista que dio el usuario
function numMin(nums){
    let min = Math.min(...nums);
    return min
}

//esta funcion sirve para sumar todos los valores de la lista que dio el usuario
function numsPlus(nums){
    let plus = 0
    nums.forEach(element => {
        plus += Number(element)
    });
    return plus
}

//esta funcion sirve para ordenar todos los valores de la lista que dio el usuario de menor a mayor
function sortNums(nums){
    let sort = nums.sort(function(a, b) {
    return a - b;
    })
    return sort
}