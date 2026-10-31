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
function buscarUsuario(id: number): string | undefined {  
  if (id === 1) {
    return "Ana";
  }
    return undefined;

}
let usuario = buscarUsuario(1);
if (usuario) {
  console.log(usuario.toUpperCase());
} else {
  console.log("Usuario no encontrado");
}
let usuario2 = buscarUsuario(2);

if (usuario2) {
  console.log(usuario2.toUpperCase());
} else {
  console.log("Usuario no encontrado");
}

//ANA//
//Usuario no encontrado//

//EJERCICIO 12//
let dato: unknown = "hola";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("El dato no es un texto");
}

dato = 42;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("El dato no es un texto");
}
//HOLA//
//El dato no es un texto//

//EJERCICIO 13//
type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
};
let cambios: Partial<Usuario> = {
  email: "ana.nueva@correo.com"
};
let resumen: Pick<Usuario, "id" | "nombre"> = {
  id: 1,
  nombre: "Ana"
};
console.log(cambios);
console.log(resumen);

//{ email: 'ana.nueva@correo.com' }//
//{ id: 1, nombre: 'Ana' }//

//EJERCICIO 14//
type UsuarioPublico = Omit<Usuario, "email">;
let usuarioPublico: UsuarioPublico = {
  id: 1,
  nombre: "Ana",
  edad: 25
};
console.log(usuarioPublico);
//{ id: 1, nombre: 'Ana', edad: 25 }//

//EJERCICIO 15//
interface Configuracion {
  tema?: string;
  idioma?: string;
}
let configuracionCompleta: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "español"
};

console.log(configuracionCompleta);

let usuarioFijo: Readonly<Usuario> = {
  id: 2,
  nombre: "Luis",
  email: "luis@correo.com",
  edad: 30
};

console.log(usuarioFijo);
// usuarioFijo.nombre = "Pedro"; // Error: nombre es de solo lectura

//{ tema: 'oscuro', idioma: 'español' }//
//{ id: 2, nombre: 'Luis', email: 'luis@correo.com', edad: 30 }//

//EJERCICIO 16//
class CuentaBancaria {  private saldo: number;
    constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }  
  ingresar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo = this.saldo + cantidad;
    } else {
      console.log("La cantidad debe ser positiva");
    }
  }
    consultarSaldo(): number {
    return this.saldo;
  }

}
let cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);
console.log(cuenta.consultarSaldo());

//La cantidad debe ser positiva//
//150//

//EJERCICIO 17//
interface Reproducible {
  reproducir(): void;
}
class Cancion implements Reproducible {
  reproducir(): void {
    console.log("🎵 Reproduciendo canción...");
  }
}
class Video implements Reproducible {
  reproducir(): void {
    console.log("🎬 Reproduciendo vídeo...");
  }
}
let elementos: Reproducible[] = [new Cancion(), new Video()];

for (let elemento of elementos) {
  elemento.reproducir();
}
//🎵 Reproduciendo canción...//
//🎬 Reproduciendo vídeo...//

//EJERCICIO 18//
enum EstadoPedido {
  Pendiente,
  Enviado,
  Entregado
}

function mensajePedido(estado: EstadoPedido): string {  
  if (estado === EstadoPedido.Pendiente) {
    return "Tu pedido está pendiente de envío";
  } else if (estado === EstadoPedido.Enviado) {
    return "Tu pedido está en camino";
  } else {
    return "Tu pedido ha sido entregado";
  }

}
console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

//Tu pedido está pendiente de envío
//Tu pedido está en camino
//Tu pedido ha sido entregado

//EJERCICIO 19//
function primero<T>(lista: T[]): T | undefined {
  if (lista.length === 0) {
    return undefined;
  }

  return lista[0];
}

let numeros: number[] = [10, 20, 30];
console.log(primero(numeros));

let textos: string[] = ["manzana", "pera", "plátano"];
console.log(primero(textos));

let vacia: number[] = [];
console.log(primero(vacia));
//10
//manzana
//undefined

//EJERCICIO 20//
//EJERCICIO 20//
type Puntuaciones = Record<string, number>;

let notas: Puntuaciones = {
  Ana: 8,
  Luis: 9.5,
  Marta: 7
};

async function obtenerMensaje(puntuaciones: Puntuaciones): Promise<string> {
  let mejorAlumno: string = "";
  let mejorNota: number = -1;

  for (let [alumno, nota] of Object.entries(puntuaciones)) {
    if (nota > mejorNota) {
      mejorNota = nota;
      mejorAlumno = alumno;
    }
  }

  return "La puntuación más alta es de " + mejorAlumno + ", con un " + mejorNota;
}

obtenerMensaje(notas).then((mensaje) => {
  console.log(mensaje);
});
//La puntuación más alta es de Luis, con un 9.5