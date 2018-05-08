import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {

  // @Input()
  // headerTemplate: TemplateRef<any>;

  @ContentChild(TemplateRef) headerTemplate: TemplateRef<any>;

  items: string[];
  ctx = {item: "ll"};

  constructor() { }

  ngOnInit() {
    this.items = ["ee", "fefe"];
    // ctx = {estimate: this.totalEstimate};
    // debugger;
  }

}
