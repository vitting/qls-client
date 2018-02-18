import {Injectable} from '@angular/core';
import Socket = SocketIOClient.Socket;

@Injectable()
export class ChatTestService {
  private chatSocket: Socket = null;

  constructor() {
  }
}
