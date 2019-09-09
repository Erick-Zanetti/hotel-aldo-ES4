import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-dialog-categoria',
  templateUrl: './dialogCategoria.component.html',
  styleUrls: ['./dialogCategoria.component.scss'],
  providers: [CategoriaService]
})
export class DialogCategoriaComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, []),
      nome: new FormControl('', [Validators.required]),
    });
    if (this.data) {
      this.form.setValue(this.data);
    }
  }

  salvar() {
    const value = this.form.value;
    this.categoriaService.salvar(value['id'], value);
    setTimeout(() => {
      this.openSnackBar('Salvo com sucesso!');
      this.onNoClick();
    }, 500);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
