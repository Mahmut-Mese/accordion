import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor(private http: HttpClient) { }

  private host = 'http://localhost:3000';
  getAllPanels() { return this.http.get<any>(this.host + '/panelsFromJson/') }

}
