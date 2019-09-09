import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  DragDropModule
} from '@angular/cdk/drag-drop';

import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatTabsModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatChipsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatInputModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatBottomSheetModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatStepperModule
} from '@angular/material';
import { DateToStringPipe } from './pipes/dateToString.pipe';
import { HoraToStringPipe } from './pipes/hotaToString.pipe';

const modulesMaterial = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatTabsModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatChipsModule,
  MatMenuModule,
  MatTableModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatBottomSheetModule,
  MatRadioModule,
  DragDropModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatStepperModule
];


@NgModule({
  imports: [FormsModule, ReactiveFormsModule, ...modulesMaterial],
  exports: [FormsModule, ReactiveFormsModule, ...modulesMaterial, DateToStringPipe, HoraToStringPipe],
  declarations: [DateToStringPipe, HoraToStringPipe],
  providers: []
})
export class MaterialModule {
}
