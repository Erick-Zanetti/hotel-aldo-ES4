import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { MaterialModule } from '../material.module';
import { DialogCategoriaComponent } from './dialogCategoria/dialogCategoria.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [CategoriaComponent, DialogCategoriaComponent],
  entryComponents: [DialogCategoriaComponent]
})
export class CategoriaModule { }
