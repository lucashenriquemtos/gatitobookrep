import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { NovoUsuario } from './novo-usuario'
import { environment } from '../../../environments/environment'

const API = environment.apiURL

@Injectable({
    providedIn: 'root',
})
export class NovoUsuarioService {
    constructor(private http: HttpClient) {}

    cadastraUsuario(novoUsuario: NovoUsuario) {
        return this.http.post(`${API}/user/signup`, novoUsuario)
    }

    verificaUsuarioExiste(nomeUsuario: string) {
        return this.http.get(
            `${API}/user/exists/${nomeUsuario}`
        )
    }
}
