import { Component, OnInit } from '@angular/core'
import { Command } from 'src/app/model/Command'
import { ConsoleService } from 'src/app/services/console.service'

const TD = new TextDecoder()

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  output: string = ""
  commands: Command[]
  selectedCommand: Command = null

  constructor(private consoleService: ConsoleService) { }

  get outputValue() {
    return this.output
  }

  ngOnInit(): void {
    this.consoleService.messages.subscribe(msg => {
      if (msg.type === 'new-message') {
        this.output = String.fromCharCode.apply(null, new Int8Array(msg.text))
      }
    })
    this.consoleService.getCommands().subscribe(commands => {
      this.commands = commands
    })
  }
  execSelectedCommand() {
    if (this.selectedCommand) {
      this.consoleService.execCommand(this.selectedCommand)
    }
    else {
      alert('No command selected')
    }
  }
  changeSelection(command: Command) {
    this.selectedCommand = command
  }

}
