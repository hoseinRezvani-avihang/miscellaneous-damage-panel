import { Component, Input } from '@angular/core';
import { CitizenResult } from 'src/app/dossier/models/citizen.models';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent {

  @Input() memberInfo!: CitizenResult; 
  
  memberInfos() {
    this.memberInfo.avatar
  }

}
