import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Animais } from './animais'
import { TokenService } from '../autenticacao/token.service'
import { environment } from '../../environments/environment'

const API = environment.apiURL

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornarToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    })
  }

  buscaPorId(id: number): Observable<Animais> {
    const token = this.tokenService.retornarToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animais>(`${API}/photos/${id}`, { headers })
  }
}
