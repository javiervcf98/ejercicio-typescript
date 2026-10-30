//EJERCICIO 1//
let nombre: string = "Ana";
let edad: number = 25;
let activo: boolean = true;

console.log(nombre);
console.log(edad);
console.log(activo);
//RESULTADO:
//Ana
//25
//true

//EJERCICIO 2//
let precios: number[] = [12.5, 30, 8.99, 45];
function sumarPrecios(lista: number[]): number {
    let total: number = 0;
    for (let precio of lista) {
        total = total + precio;
    }
    return total;

}
console.log(sumarPrecios(precios).toFixed(2));
//Ana
//25
//true
//96.49

//EJERCICIO 3//
function presentar(nombre: string, apellido?: string): string {
      if (apellido) 
        {
    return "Hola, " + nombre + " " + apellido;
  }
  return "Hola, " + nombre;

}
console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));
//Hola, Ana Pérez
//Hola, Ana

//EJERCICIO 4//
function calcularDescuento (precio:number, porcentaje:number): number{
  let descuento: number = precio*porcentaje / 100;
  return precio - descuento;
}
console.log(calcularDescuento(100, 20));
//80

//EJERCICIO 5//
function mostrarId (id: string | number): void {
  if (typeof id === "string") {
    console.log (id.toUpperCase());
  }
  else {console.log(id.toFixed(2));

  }
}
mostrarId ("usr-25");
mostrarId (25)
//USR-25
//25.00

//EJERCICIO 6//
type Producto = {
  nombre: string
  precio: number
  descripcion?: string
};
let producto1: Producto = {
  nombre: "Teclado",
  precio: 35,
  descripcion: "Teclado mecánico con luces"
};
let producto2: Producto = {
  nombre: "Ratón",
  precio: 15
};
console.log(producto1);
console.log(producto2);
//nombre: 'Teclado',
//precio: 35,
//descripcion: 'Teclado mecánico con luces'
//nombre: 'Ratón', precio: 15

//EJERCICIO 7//
function mostrarProducto (producto: Producto): string {
    return producto.nombre + ": " + producto.precio + " €";
}

console.log(mostrarProducto(producto1));
console.log(mostrarProducto(producto2));
// Teclado: 35 €
// Raton: 15 €

//EJERCICIO 8//
type EstadoTarea = "pendiente" | "en-proceso" | "completada";
let estado: EstadoTarea = "pendiente";
console.log(estado);

estado = "completada";
console.log(estado);
//pendiente
//completada

//EJERCICIO 9//
interface Persona {
  nombre: string
  edad: number
  ciudad?: string

}
let persona1: Persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Valencia"

};
let persona2: Persona = {
  nombre: "Luis",
  edad: 30
};
function mostrarPersona(persona: Persona): void {
    if (persona.ciudad) {
    console.log(persona.nombre + ", " + persona.edad + " años, vive en " + persona.ciudad);
  } else {
    console.log(persona.nombre + ", " + persona.edad + " años");
  }

}
mostrarPersona(persona1);
mostrarPersona(persona2);
//Ana, 25 años, vive en Valencia//
//Luis, 30 años//

//EJERCICIO 10//
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}
let libros: Libro[] = [
  { titulo: "El Quijote", autor: "Cervantes", paginas: 1200, disponible: true },
  { titulo: "Cien años de soledad", autor: "García Márquez", paginas: 470, disponible: false },
  { titulo: "La sombra del viento", autor: "Ruiz Zafón", paginas: 560, disponible: true }
];
function estaDisponible(libro: Libro): boolean {
  return libro.disponible;
}
for (let libro of libros) {
  if (estaDisponible(libro)) {
    console.log(libro.titulo);
  }
}
//El Quijote//
//La sombra del viento//

//EJERCICIO 11//


