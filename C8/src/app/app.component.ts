import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  onomatopoeiaList: string[] = []

  ngOnInit(): void {

  }

  onReceiveNewOnomatopia(event: string): void {
    console.log(event);
  }

}
