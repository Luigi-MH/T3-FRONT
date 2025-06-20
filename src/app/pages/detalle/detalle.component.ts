import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../../services/producto-service.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  constructor(private route: ActivatedRoute, public productoService: ProductoServiceService){}
  ngOnInit(): void {
      
  }

  cargarProducto()
  {
    const idProducto =  this.route.snapshot.params['idProducto'];
    this.productoService.getProducto(idProducto).subscribe({
      next: (data) => {
        this.productoService.producto = data.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  cargarHistorial()
  {
    const idProducto =  this.route.snapshot.params['idProducto'];
    this.productoService.getHistorial(idProducto).subscribe({
      next: (data) => {
        this.productoService.movimientos = data.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
