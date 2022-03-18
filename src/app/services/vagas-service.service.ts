import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasServiceService {
  baseURL = "http://localhost:3000/vagas";
  constructor(private http: HttpClient) { }

  //operaçoes de CRUD (Criação, Aletaração, Leitura e Exclusão de dados)
  //Criação de uma vaga
  create(dados : Vagas) : Observable<Vagas> {
    return this.http.post<Vagas>(this.baseURL,dados);
  }
  //Leitura de Lista de Vagas
  read() : Observable<Vagas[]> {
    return this.http.get<Vagas[]>(this.baseURL);
  }
  //Leitura de uma vaga especifica
  readById(id : number) : Observable<Vagas> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Vagas>(url);
  }
  //Alteração de Vagas
  updateVagas(dados : Vagas) : Observable<Vagas> {
    const url = `${this.baseURL}/${dados.id}`;
    return this.http.put<Vagas>(url,dados);
  }
  //Exclusão de uma vaga especifica
  deleteVagas(id : number) : Observable<Vagas> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Vagas>(url);
  }
}
