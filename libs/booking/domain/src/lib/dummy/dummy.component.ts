import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-cloud-demo-dummy-domain',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  items = ['1','2','3'];

  constructor() { }

  ngOnInit(): void {
  }

  add(item: string): void {
    this.items.push(item);
  }

}
