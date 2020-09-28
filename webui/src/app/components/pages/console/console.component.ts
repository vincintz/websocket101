import { Component, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  output: string = "";

  constructor(private consoleService: ConsoleService) { }

  get outputValue() {
    return this.output
  }

  ngOnInit(): void {
    this.consoleService.messages.subscribe(msg => {
      this.output += `${msg.text}\n`
    })
  }
  sendMessage() {
    this.consoleService.sendMsg("Test message")
  }

}
