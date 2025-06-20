import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductoServiceService {
  producto: any = null;
  productos: any[] = [];
  movimiento: any= null;
  movimientos: any[] = [];

  readonly API_T3_BACK = 'http://localhost:9090/api/mhl';

  constructor( private http: HttpClient) { }

  getProductos()
  {
    return this.http.get<any>(`${this.API_T3_BACK}/producto`);
  }

  getProducto(idProducto: string)
  {
    return this.http.get<any>(`${this.API_T3_BACK}/producto/${idProducto}`);
  }

  getHistorial(idProducto: string)
  {
    return this.http.get<any>(`${this.API_T3_BACK}/movimiento/${idProducto}`);
  }
}
