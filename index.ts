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