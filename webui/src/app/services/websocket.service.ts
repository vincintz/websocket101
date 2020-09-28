import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {
  private socket: SocketIOClient.Socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io(environment.ws_url);

    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });

    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    return Subject.create(observer, observable);
  }

}
