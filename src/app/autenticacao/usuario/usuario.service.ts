import { Injectable } from '@angular/core'
import { TokenService } from '../token.service'
import jwt_decode from 'jwt-decode'
import { Usuario } from './usuario'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private usuarioSubjetct = new BehaviorSubject<Usuario>({})

    constructor(private tokenService: TokenService) {
      if(this.tokenService.possuiToken()){
        this.decodificarJWT();
      }
    }

    private decodificarJWT() {
        const token = this.tokenService.retornarToken()
        const usuario = jwt_decode(token) as Usuario
        this.usuarioSubjetct.next(usuario)
    }

    retornarUsuario() {
        return this.usuarioSubjetct.asObservable()
    }

    salvarToken(token: string) {
      this.tokenService.salvarToken(token);
      this.decodificarJWT();
    }
    logout(){
      this.tokenService.excluirToken();
      this.usuarioSubjetct.next({});
    }

    usuarioLogado(){
      return this.tokenService.possuiToken();
    }
}
