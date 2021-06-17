import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-cloud-demo-dummy-feature2',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }
  
  items = ['1','2','3'];

  add(item: string): void {
    this.items.push(item);
  }

  ngOnInit(): void {
  }

}
