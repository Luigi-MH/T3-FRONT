import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    { path: '', redirectTo: 'producto', pathMatch:'full'},
    { path: 'producto', component: InicioComponent},
    { path: 'producto/detalle/:idProducto', component: DetalleComponent}
];
