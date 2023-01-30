import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CooperadoService {
  private apiPath: string = 'http://localhost:3001/cooperado';

  constructor(private http: HttpClient) {}

  getById(cpf: number) {
    const url = `${this.apiPath}/${cpf}`;

    return this.http
      .get(url)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: any): Observable<any> {
    console.log('Erro na request =>', error);
    return throwError(error);
  }

}
