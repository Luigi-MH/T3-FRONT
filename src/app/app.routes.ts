import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch:'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'detalle', component: DetalleComponent}
];
