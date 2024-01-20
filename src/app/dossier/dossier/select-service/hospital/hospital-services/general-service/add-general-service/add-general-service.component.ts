import { Component, EventEmitter, Output } from '@angular/core';
import { SearchType } from '../../../../search-service/search-service.component';

@Component({
  selector: 'app-add-general-service',
  templateUrl: './add-general-service.component.html',
  styleUrls: ['./add-general-service.component.css']
})
export class AddGeneralServiceComponent {

  @Output() cancel = new EventEmitter<void>();

  searchType = SearchType;

  onCancel() {
    this.cancel.emit();
  }

}
