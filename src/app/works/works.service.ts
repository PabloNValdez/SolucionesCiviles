import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private http: HttpClient) { }

  getAllWorks(): Observable<any>{
    return this.http.get(`${API_URL}/api/trabajo/list`);
  }
}
