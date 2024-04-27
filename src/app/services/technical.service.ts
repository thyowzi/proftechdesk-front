import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Technical } from '../models/technical';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Technical[]> {
    return this.http.get<Technical[]>(`${API_CONFIG.baseUrl}/technicals`);
  }

  create(technical: Technical): Observable<Technical> {
    return this.http.post<Technical>(`${API_CONFIG.baseUrl}/technicals`, technical);
  }

}
