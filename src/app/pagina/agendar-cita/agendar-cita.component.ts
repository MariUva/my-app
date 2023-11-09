import { Component } from '@angular/core';
import { RegistroCitaDTO } from 'src/app/modelo/RegistroCitaDTO';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  registroCitaDTO: RegistroCitaDTO;

  constructor(private citaService: CitaService){
    this.registroCitaDTO = new RegistroCitaDTO;
  }

  public agendarCita(){
    this.citaService.crear(this.registroCitaDTO);
  }

  seleccionar(id: number) {
    // Tu lógica para seleccionar aquí
  }
}
