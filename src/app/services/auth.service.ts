import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/loginDTO';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  autenticate(creds: LoginDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/authenticate`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfullLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if (token != null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

}
