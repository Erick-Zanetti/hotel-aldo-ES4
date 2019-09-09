import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApartamentoService } from '../apartamento.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-apartamento',
  templateUrl: './dialogApartamento.component.html',
  styleUrls: ['./dialogApartamento.component.scss'],
  providers: [ApartamentoService, CategoriaService]
})
export class DialogApartamentoComponent implements OnInit {

  public form: FormGroup;
  private categorias = [];
  public filteredOptions: Observable<object[]>;

  constructor(
    private apartamentoService: ApartamentoService,
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogApartamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, []),
      localizador: new FormControl(null, [Validators.required]),
      idCategoria: new FormControl(null, [Validators.required]),
    });
    this.filteredOptions = this.form.get('idCategoria').valueChanges
    .pipe(
      startWith<string>(''),
      map(value => typeof value === 'string' ? value : value['nome']),
      map(nome => nome ? this._filterCategorias(nome) : this.categorias.slice())
    );
    if (this.data) {
      this.form.setValue(this.data);
    }
    this.loadCategorias();
  }

  loadCategorias() {
    this.categorias = this.categoriaService.getAll();
  }


  displayFn(obj): string | undefined {
    return obj ? obj.nome : undefined;
  }

  private _filterCategorias(nome: string) {
    const filterValue = nome.toLowerCase();
    return this.categorias.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  salvar() {
    const value = this.form.value;
    value['idCategoria'] = parseInt(value['idCategoria']['id'], 10);
    this.apartamentoService.salvar(value.id, value);
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
