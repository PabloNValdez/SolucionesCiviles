import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  questionForm : FormGroup;
  errorMessage: string = '';
  showError: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
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
      // this.toastr.success(response.message);
        setTimeout(() => {
          this.questionForm.reset();
          // this.router.navigate(['/dashboard/list-shops-professionals']);
        }, 100);
    }, error =>{
      console.log(error);
    });
  }
}



