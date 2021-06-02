/*Escribir una aplicación en node.js (Usar módulos) que recibirá 20 números enteros positivos, y la aplicación deberá mostrar: 1. El número mayor de la lista de números recibidos. 2. El número menor de la lista recibida. 3. La sumatoria de todos los números recibidos. 4. Devolver la lista ordenada de menor a mayor los números. Nota: Usar módulos y cada item debe ser una función. El código debe venir con documentación. */

//"require" llama el modulo que se necita para resolver el ejercicio
const moduleQuiz = require('./module_quiz')

//"process.argv.slice(2)" obtiene los valores que da el usuario
const nums = process.argv.slice(2)

//inprime el resultado final del ejercicio
console.log(moduleQuiz.readNums(nums))