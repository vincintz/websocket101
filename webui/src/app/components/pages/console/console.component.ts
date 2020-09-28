import { Component, OnInit } from '@angular/core';
import { ConsoleSocketService } from 'src/app/services/console-socket.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(private consoleService: ConsoleSocketService) { }

  ngOnInit(): void {
  }

}
