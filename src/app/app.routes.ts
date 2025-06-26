import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto';
import { AcercaDeComponent } from './acerca-de/acerca-de';
import { ServiciosComponent } from './servicios/servicios';
import { InicioComponent } from './inicio/inicio'; // Asegúrate de tener este componente

export const routes: Routes = [
  { path: '', component: InicioComponent },  // Ruta raíz
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', redirectTo: '' }
];
