import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//aol

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = "http://localhost/proyecto/basedatos/"

  private suser: boolean = false;
  private sadmin: boolean = false;

  constructor(private http: HttpClient) { }

  getSuser(): boolean {
    return this.suser;
  }
  setSuser(value:boolean): void {
    this.suser = value;
  }
  getSadmin(): boolean {
    return this.sadmin;
  }
  setSadmin(value:boolean): void {
    this.sadmin = value;
  }

  validarUsuario(usuario:any) {
    return this.http.post(`${this.URL}ValidarUsuario.php`,JSON.stringify(usuario));
  }
  altaUsuario(rusuario:any) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(rusuario));
  }
  verlibros() {
    return this.http.get(`${this.URL}Verlibros.php`);
  }
  altaLibro(libro:any) {
    return this.http.post(`${this.URL}AltaLibro.php`, JSON.stringify(libro));
  }
  actualizarLibro(libro:any) {
    return this.http.post(`${this.URL}ActualizarLibro.php`, JSON.stringify(libro));
  }
  eliminarLibro(id_libro: number) {
    return this.http.get(`${this.URL}EliminarLibro.php?id_libro=${id_libro}`);
  }
  seleccionarLibro(id_libro: number) {
    return this.http.get(`${this.URL}SeleccionarLibro.php?id_libro=${id_libro}`);
  }

  
}
