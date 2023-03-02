import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { read: ElementRef }) carouselRef: ElementRef | undefined;
  questionForm : FormGroup;
  images: string[] = [
    '../../assets/img/P1.jpg',
    '../../assets/img/P2.jpg',
    '../../assets/img/P3.jpg'
  ];

  constructor(private contactService: ContactService, config: NgbCarouselConfig) {
    config.showNavigationArrows = false; //Flechas para deslizarte en el slider
		config.showNavigationIndicators = false; 
   }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
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

}
