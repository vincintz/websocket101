import { Injectable } from '@angular/core'
import { WebsocketService } from './websocket.service'
import { Observable, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Command } from '../model/Command'

@Injectable()
export class ConsoleService {

  messages: Subject<any>

  constructor(private wsService: WebsocketService, private http: HttpClient) {
    this.messages = <Subject<any>>wsService.connect()
   }

  execCommand(command: Command) {
    this.messages.next(command.action)
  }

  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>(`${environment.ws_url}/api/commands`)
  }
}
