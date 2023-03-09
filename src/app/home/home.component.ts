import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from './home.service';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { read: ElementRef }) carouselRef: ElementRef | undefined;
  questionForm : FormGroup;
  publiImages: string[] = [];

  constructor(private contactService: ContactService, config: NgbCarouselConfig,private homeService: HomeService) {
    config.showNavigationArrows = false; //Flechas para deslizarte en el slider
		config.showNavigationIndicators = false; 
   }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });

    this.loadPublicidades();
  }

  ngAfterViewInit(): void {
    if (this.carouselRef) {
      this.carouselRef.nativeElement.querySelectorAll('.carousel-indicators')[0].remove();
    }
  }

  validateControl = (controlName: string) => {
    return !this.questionForm.get(controlName).valid && this.questionForm.get(controlName).touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.questionForm.get(controlName).hasError(errorName)
  }

  sendQuestion(){
    const values={
      "name":this.questionForm.get('name').value,
      "userEmail": this.questionForm.get('email').value,
      "body":this.questionForm.get('message').value
    }

    this.contactService.sendEmail(values).subscribe(response=>{
        setTimeout(() => {
          this.questionForm.reset();
        }, 100);
    }, error =>{
      console.log(error);
    });
  }

  loadPublicidades(){
    this.homeService.getAllPubliImages().subscribe(response =>{
      console.log(response);
      response.forEach(element=>{
        if(!element.isDeleted){
          var img = decodeURIComponent(`${apiUrl}/${element.path}`);
          this.publiImages.push(img);
          // console.log(this.publiImages);
        } 
      })
    })
  }

}
