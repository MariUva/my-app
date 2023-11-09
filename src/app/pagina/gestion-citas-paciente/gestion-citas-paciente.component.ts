import { Component } from '@angular/core';
import { ItemCitaDTO } from 'src/app/modelo/ItemCitaDTO';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-gestion-citas-paciente',
  templateUrl: './gestion-citas-paciente.component.html',
  styleUrls: ['./gestion-citas-paciente.component.css']
})
export class GestionCitasPacienteComponent {

  citas: ItemCitaDTO[];


  constructor( private citaService: CitaService){
    this.citas = citaService.listar();
  }
}
