import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService){

  }

  empleados: Empleado[] = [
    new Empleado("Tomas", "Artaza", 50000, "Presidente"),
    new Empleado("Cosme", "Fulanito", 30000, "Vice Presidente"),
    new Empleado("Kaka", "Roto", 25000, "Jefe de Gabinete"),
    new Empleado("El", "Bicho", 22000, "Asistente del Presidente"),
    new Empleado("La", "Pulga", 20000, "Ejecutivo"),
  ];

  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;


  agregarEmpleado(){
    let empleado=new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroSalario, this.cuadroCargo);
    this.empleados.push(empleado);
    this.miServicio.mostrarMensaje("Nombre del empleado: " + empleado.nombre);
  }

  

}
