import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ILoginDto } from '../models/ILoginDto.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class AdministradorService {

  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient) { }

  login(dto: ILoginDto): Observable<any>{
    return this.http.post<ILoginDto>(`${API_URL}/api/account/login`, dto);
  }

  loguot() {
    window.sessionStorage.clear();
    this.sendAuthStateChangeNotification(false);
  }

  sendAuthStateChangeNotification(isAuthenticated: boolean) {
    this.authChangeSub.next(isAuthenticated);
  }

}
