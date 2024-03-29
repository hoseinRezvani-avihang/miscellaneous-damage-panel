import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandCardComponent } from './components/expand-card/expand-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IranYekanDirective } from './directives/iran-yekan.directive';
import { DividerComponent } from './components/divider/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { ShamsiPipe } from './pipes/shamsi.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SeperatorPipe } from './pipes/seperator.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { MaxDirective } from './directives/max.directive';
import { ThousandSeperatorDirective } from './directives/thousand-seperator.directive';

@NgModule({
  declarations: [
    ExpandCardComponent,
    IranYekanDirective,
    DividerComponent,
    ShamsiPipe,
    SeperatorPipe,
    MaxDirective,
    ThousandSeperatorDirective,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatRadioModule,
    NgPersianDatepickerModule,
    InputTextModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  exports: [
    ExpandCardComponent,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatRadioModule,
    NgPersianDatepickerModule,
    InputTextModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IranYekanDirective,
    DividerComponent,
    MatDividerModule,
    ShamsiPipe,
    MatSelectModule,
    MatCheckboxModule,
    SeperatorPipe,
    MatDialogModule,
    MaxDirective,
    ThousandSeperatorDirective
  ],
})
export class SharedModule {}
