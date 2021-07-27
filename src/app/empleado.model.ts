export class Empleado{
    nombre: string = "";
    apellido: string = "";
    salario: number = 0;
    cargo: string = "";

    constructor(nombre: string,apellido: string,salario: number,cargo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.cargo = cargo;
    }
}