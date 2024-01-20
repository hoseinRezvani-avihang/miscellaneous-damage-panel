import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-level-3-service',
  templateUrl: './add-level-3-service.component.html',
  styleUrls: ['./add-level-3-service.component.css']
})
export class AddLevel3ServiceComponent {

  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

}
