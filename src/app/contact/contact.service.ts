import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const apiUrl = environment.apiUrl;

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// }

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


public sendEmail(dto): Observable<any> {
    return this.http.post(`${apiUrl}/api/email`, dto);
  }

public sendOpinion(dto): Observable<any> {
    return this.http.post(`${apiUrl}/api/email/opinion`, dto);
}


}

