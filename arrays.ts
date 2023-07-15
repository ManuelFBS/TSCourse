let tupla: [string, number] = ["Manuel", 61];

// tupla = ["Trina", 53, true]; ----->> Error: debido a que el array 
                                                // está definido solo con 2 tipos: 
                                                // 'stting' y 'number'. No existe un
                                                // 3er valor...

tupla = ["Trina", 54];  // Correcto...

// tupla = ["gato", "2"];  // Error: el 2do valor es declarado como
                                        // 'number' y no puede tener un valor
                                        // del tipo 'string'...

let array :  number[] = [1, 2, 3, 4];

// array.push('Manu');     // Error: 'array' está decalrado com un arreglo
                                        // tipo 'number'...

array.push(5);  // Correcto...

let arrayDeNumeros : Array<number> = [10, 20, 30, 40, 50, 60, 70];

console.log(tupla);
console.log(array);
console.log(arrayDeNumeros);