import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  private cargarCiudades() {
    this.ciudades.push("Armenia");
    this.ciudades.push("Gondor");
    this.ciudades.push("Medellín");
    this.ciudades.push("Cartagena");
    this.ciudades.push("Esgaroth");
    this.ciudades.push("Draenor");
    this.ciudades.push("Mordor");
  }

  private cargarEPS() {
    this.eps.push("Sanitas Contributivo");
    this.eps.push("AsmetSalud");
    this.eps.push("Medimas");
    this.eps.push("Nueva-EPS");
  }

  private cargarTipoSangre() {
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
  }


  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  eps: string[];
  tipoSangre: string[];

  constructor() {
    this.registroPacienteDTO = new RegistroPacienteDTO();

    this.ciudades = [];
    this.cargarCiudades();

    this.eps = [];
    this.cargarEPS();

    this.tipoSangre = [];
    this.cargarTipoSangre();


  }

  archivos!:FileList;

  public registrar() {
    console.log(this.registroPacienteDTO);

    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
      }else{
      console.log("Debe cargar una foto");
      } 
  }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  public onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(files);
    } 

    this.archivos = event.target.files;
  }



}


