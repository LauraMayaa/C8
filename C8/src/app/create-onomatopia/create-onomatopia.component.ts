import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string = ""

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    this.createOnomatopia()
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit('envois')
  }
}
