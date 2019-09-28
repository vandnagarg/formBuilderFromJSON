import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordinal',
  templateUrl: './ordinal.component.html',
  styleUrls: ['./ordinal.component.css']
})
export class OrdinalComponent implements OnInit {

  @Input() ordinal:number;
  constructor() { }

  ngOnInit() {
  }

}
