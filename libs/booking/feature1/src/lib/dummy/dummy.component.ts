import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-cloud-demo-dummy-feature1',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  items = ['1','2','3','4'];

  add(item: string): void {
    this.items.push(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
