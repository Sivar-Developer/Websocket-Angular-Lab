import { Component, OnInit } from '@angular/core';
import { EchoService } from 'src/app/services/ui/echo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  websocketData: any

  constructor(
    private echoService: EchoService
  ) {
    this.echoService.listen('post.1', 'PlaygroundEvent', (data: any) => {
      console.log(data);
      this.websocketData = data
    });
    this.echoService.listen('home', 'NewMessage', (data: any) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
}
