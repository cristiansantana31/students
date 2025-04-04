import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getPrograms() {
    let headers: any =  this.headers;
    return this.http.get(`${environment.urlApi}/programs`,  headers );
  }

  login(body: any) {
    let headers: any =  this.headers;
    return this.http.post(`${environment.urlApi}/login`, body,  headers );
  }

  singup(body: any) {
    let headers: any =  this.headers;
    return this.http.post(`${environment.urlApi}/singup`, body,  headers );
  }

  getSignatures() {
    let headers: any =  this.headers;
    return this.http.get(`${environment.urlApi}/signatures`,  headers );
  }

  saveSing(body: any) {
    let headers: any =  this.headers;
    return this.http.post(`${environment.urlApi}/signatures`, body,  headers );
  }

}
