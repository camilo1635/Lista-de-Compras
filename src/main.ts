import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component'; 
import { environment } from './environments/environment';
import { addIcons } from 'ionicons';
import { add, checkmark, trash } from 'ionicons/icons';
import { routes } from './app/app.routes';
import { calendarOutline, addOutline } from 'ionicons/icons';

addIcons({
  'calendar-outline': calendarOutline,
  'add-outline': addOutline
});


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});