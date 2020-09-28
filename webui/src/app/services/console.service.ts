import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';

@Injectable()
export class ConsoleService {

  messages: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect()
   }

  sendMsg(msg) {
    this.messages.next(msg);
  }

}
