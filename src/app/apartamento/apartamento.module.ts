import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartamentoComponent } from './apartamento.component';
import { MaterialModule } from '../material.module';
import { DialogApartamentoComponent } from './dialogApartamento/dialogApartamento.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [ApartamentoComponent, DialogApartamentoComponent],
  entryComponents: [DialogApartamentoComponent]
})
export class ApartamentoModule { }
