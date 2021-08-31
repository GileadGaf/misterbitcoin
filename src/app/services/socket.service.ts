import { Injectable } from '@angular/core';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  isProd=false;
  baseUrl = this.isProd ? '' : '//localhost:3030';
  constructor() {}
  socket = null;

  async setup() {
    // YaronB: Need to send a dummy ajax request as to setup the socket-session correctly
    // await httpService.get('setup-session')
    // socket = io(baseUrl, { reconnection: false})
    this.socket = io(this.baseUrl);
    // socketIsReady = true;
  }
  on(eventName, cb) {
    this.socket.on(eventName, cb);
  }
  off(eventName, cb = null) {
    if (!this.socket) return;
    if (!cb) this.socket.removeAllListeners(eventName);
    else this.socket.off(eventName, cb);
  }
  emit(eventName, data) {
    this.socket.emit(eventName, data);
  }
  terminate() {
    this.socket = null;
  }
}
