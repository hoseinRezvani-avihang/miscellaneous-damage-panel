import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand-card',
  templateUrl: './expand-card.component.html',
  styleUrls: ['./expand-card.component.css']
})
export class ExpandCardComponent {

  @Input() status = false;

  toggle(status: boolean) {
    this.status = status;
  }

}
