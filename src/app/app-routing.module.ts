import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/pagina/login/login.component';
import { RegistroComponent } from './pagina/pagina/registro/registro.component';


//______________________________ Tema Citas ______________________________________
//import { GestionCitasPacienteComponent } from './pagina/gestion-citas-paciente/gestion-citas-paciente.component';
import { GestionCitasPacienteComponent } from './pagina/gestion-citas-paciente/gestion-citas-paciente.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';

// _____________________________ Tema con PQRS ____________________________________
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';

const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegistroComponent },
    { path: "gestion-pqrs", component: GestionPqrsComponent },
    { path: "crear-pqrs", component: CrearPqrsComponent },
    { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent },
    { path: "gestion-citas-paciente", component: GestionCitasPacienteComponent },
    { path: "agendar-cita", component: AgendarCitaComponent },
    { path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }