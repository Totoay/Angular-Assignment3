import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  getCatFact() {
    return this.httpClient.get('https://catfact.ninja/fact')
  }

  getDog() {
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random')
  }

}
