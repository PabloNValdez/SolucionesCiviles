import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ProductsService } from './products.service';
import { ContactService } from '../contact/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  saniti: DomSanitizer;//Sanitiza los link, para hacerlos seguros
  questionForm : FormGroup;
  showForm: boolean = false;

  constructor(private productsService: ProductsService, private sanitizer: DomSanitizer, private contactService: ContactService) { }

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

    this.questionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  sendQuestion(){
    const values={
      "name":this.questionForm.get('name').value,
      "userEmail": this.questionForm.get('email').value,
      "body":this.questionForm.get('message').value
    }

    this.contactService.sendOpinion(values).subscribe(response=>{
        setTimeout(() => {
          this.questionForm.reset();
        }, 100);
    }, error =>{
      console.log(error);
    });
  }

  openForm(){
    if (this.showForm == false) {
      this.showForm = true;
    }else{
      this.showForm = false;
    }
    
  }

  validateControl = (controlName: string) => {
    return !this.questionForm.get(controlName).valid && this.questionForm.get(controlName).touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.questionForm.get(controlName).hasError(errorName)
  }

}
