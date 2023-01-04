import { Component, OnInit } from '@angular/core';
import { AdministradorService } from './administrador.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoginDto } from '../models/ILoginDto.model';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  loginForm : FormGroup;
  errorMessage: string = '';
  showError: boolean;
  private returnUrl: string;

  constructor(private administradorService: AdministradorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(){
    const user: ILoginDto = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.administradorService.login(user).subscribe(data => {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      this.administradorService.sendAuthStateChangeNotification(data.isSuccessful);
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.errorMessage = error;
      this.showError = true;
    });
  }

}
