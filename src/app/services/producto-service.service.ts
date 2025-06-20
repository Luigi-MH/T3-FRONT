import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductoServiceService {
  producto: any = null;
  productos: any[] = [];

  readonly API_T3_BACK = 'http://localhost:9090/api/mhl/producto';

  constructor( private http: HttpClient) { }

  getProductos()
  {
    console.log('InicioComponent cargado');
    return this.http.get<any>(this.API_T3_BACK);
    //return this.http.get<any>(`${this.API_T3_BACK}/producto`);
  }
}
