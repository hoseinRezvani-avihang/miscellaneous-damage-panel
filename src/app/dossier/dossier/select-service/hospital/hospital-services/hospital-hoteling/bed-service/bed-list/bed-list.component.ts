import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bed-list',
  templateUrl: './bed-list.component.html',
  styleUrls: ['./bed-list.component.css']
})
export class BedListComponent {

  @Input() bedControls!: AbstractControl[];

}
