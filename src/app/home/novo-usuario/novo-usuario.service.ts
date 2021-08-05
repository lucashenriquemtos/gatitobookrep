import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NovoUsuario} from "./novo-usuario";

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) {
  }

  cadastraUsuario(novoUsuario: NovoUsuario) {
    return this.http.post('https://localhost:3000/user/signup', novoUsuario);
  }

  verificaUsuarioExiste(nomeUsuario:string){
    return this.http.get(`https://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
