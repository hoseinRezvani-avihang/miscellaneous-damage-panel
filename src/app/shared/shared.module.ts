import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandCardComponent } from './components/expand-card/expand-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ExpandCardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ExpandCardComponent,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
