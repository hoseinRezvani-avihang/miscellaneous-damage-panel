import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandCardComponent } from './components/expand-card/expand-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { InputTextModule } from 'primeng/inputtext';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { IranYekanDirective } from './directives/iran-yekan.directive';
import { DividerComponent } from './components/divider/divider.component';
import {MatDividerModule} from '@angular/material/divider';
import { ShamsiPipe } from './pipes/shamsi.pipe';

@NgModule({
  declarations: [ExpandCardComponent, IranYekanDirective, DividerComponent, ShamsiPipe],
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
    MatDividerModule
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
    NgPersianDatepickerModule
    ,InputTextModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IranYekanDirective,
    DividerComponent,
    MatDividerModule,
    ShamsiPipe
  ],
})
export class SharedModule {}
