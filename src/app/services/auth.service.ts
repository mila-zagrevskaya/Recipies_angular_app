import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  AUTH_ENDPOINT: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDev_rd_GEcugs3NzPcOiKrUEZBBWUE4iw';
  
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.AUTH_ENDPOINT,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }
}