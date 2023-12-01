import { Injectable } from '@angular/core';
import { HttpDossierService } from './http-dossier.service';
import { CitizenInput } from '../models/citizen.models';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DossierService {


  userId = this.authService.loginInfo.getValue().id;

  constructor(
    private httpDossier: HttpDossierService,
    private authService: AuthService
  ) {}

  fetchCitizen(nationalNumber: string, delivererType: string | null) {

    let input: CitizenInput = {
      delivererType,
      nationalNumber,
      userId: this.userId
    };
    return this.httpDossier.fetchCitizen(input);
  }
}
