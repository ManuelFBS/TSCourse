interface Persona {
        nombre: string;
        apellido: string;
        edad: number;
        hobbies: Hobby[]
}

interface Hobby {
        nombre: string;
}

// Interface normal...
// interface Estudiante {
//         nombre: string;
//         apellido: string;
//         edad: number;
//         activo: boolean;
// }

// Interface hereda de otra interface...
// interface Estudiante extends Persona {
// //         nombre: string;
// //         apellido: string;
// //         edad: number;
//         activo: boolean;
// }

// Interfase que hereda de otra interface, y también 
// contiene una función dentro de ella...
interface Estudiante extends Persona {
        activo: boolean;
        saluda: (a: string) => void
}

let manuel: Persona = {
        nombre: "Manuel",
        apellido: "Borrego",
        edad: 61,
        hobbies: [{ nombre: "simuladores de vuelo" }]
}

let marcos: Estudiante = {
        nombre: "Marcos",
        apellido: "Borrego",
        edad: 20,
        activo: true,
        saluda: (a: string) => {console.log("Hola !!!")},
        hobbies: [{ nombre: "Video Games" }]
}
 