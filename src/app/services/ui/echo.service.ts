import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class EchoService {

  private echo: Echo;

  constructor() {
    // Pusher APP Key
    const pusher = new Pusher('23ee0ba70e7b24f0b', {
      cluster: 'mt1',
      wsHost: 'websocket.appspot.fragmatica.com',
      wsPort: 6001,
      wssPort: 443,
      enabledTransports: ['ws', 'wss']
    });

    this.echo = new Echo({
      broadcaster: 'pusher',
      client: pusher,
      key: '23ee0ba70e7b24f0b', // Pusher APP Key
      cluster: 'mt1',
      encrypted: true
    });
  }

  listen(channelName: string, eventName: string, callback: Function) {
    this.echo.channel(channelName).listen(eventName, callback);
  }

  leave(channelName: string) {
    this.echo.leave(channelName);
  }
}
