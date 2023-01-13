import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ProductsService } from './products.service';

const apiUrl = environment.apiUrl;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  datos: Array<any>=[];
  catalogos: Array<any>=[];  
  p: number = 1;
  saniti: DomSanitizer;//Sanitiza los link, para ahcerlos seguros
  constructor(private productsService: ProductsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.saniti= this.sanitizer;
    this.productsService.getAllCatalogos().subscribe(response=>{
      this.datos = response.slice().reverse();
      this.datos.forEach(element =>{
        if(!element.isDeleted){
          this.catalogos.push(element);
        }
      });
    });
  }

}
