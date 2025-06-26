import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // ← CAMBIO AQUÍ
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err: any) => console.error(err));

// Inicialización adicional después de que Angular esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('Aplicación PWA inicializada');
});