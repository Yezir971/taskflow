import { Component, input } from '@angular/core';
import { AddTask } from "../../../../shared/ui/button/add-task/add-task";

@Component({
  selector: 'app-header',
  imports: [AddTask],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  readonly title = input<string>('')

}
