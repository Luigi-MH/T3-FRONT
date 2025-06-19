import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductoServiceService } from '../../services/producto-service.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  constructor(public productoService: ProductoServiceService){}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos()
  {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productoService.productos = data.products;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
