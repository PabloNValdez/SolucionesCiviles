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
  data : FormGroup;
  errorMessage: string = '';
  showError: boolean;
  private returnUrl: string;
  showData: boolean;

  constructor(private administradorService: AdministradorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(){
    const user: ILoginDto = {
      user: this.loginForm.value.user,
      password: this.loginForm.value.password
    };

    this.administradorService.login(user).subscribe(data => {
      sessionStorage.setItem("user", JSON.stringify(data.user));
      this.showData = true;
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.errorMessage = error;
      this.showError = true;
    });
  }

  logout() {
    this.showData = false;
  }

}
