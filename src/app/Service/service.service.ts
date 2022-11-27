import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  
  
  Url='http://localhost:8080/persona';
  CrearRegistro='MAPPING_SIGNATURE_INSERT';
  ConsultarTodo='MAPPING_SIGNATURE_ALL_REGISTER';  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url+"/"+this.ConsultarTodo);
  }
  createPersona(persona:Persona)
  {
    return this.http.post<Persona>(this.Url+"/"+this.CrearRegistro,persona);
  }
  getPersonaId(id:number) {
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona) {
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  DeletePersonaId(id:number) {
    return this.http.delete<Persona>(this.Url+"/"+id);
  }
}
