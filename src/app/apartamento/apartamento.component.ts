import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { DialogApartamentoComponent } from './dialogApartamento/dialogApartamento.component';
import { ApartamentoService } from './apartamento.service';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-apartamento',
  templateUrl: './apartamento.component.html',
  styleUrls: ['./apartamento.component.scss'],
  entryComponents: [DialogApartamentoComponent],
  providers: [ApartamentoService, CategoriaService]
})
export class ApartamentoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'localizador', 'categoria', 'acoes'];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog, private apartamentoService: ApartamentoService, private categoriaService: CategoriaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this.dataSource.data = this.apartamentoService.getAll();
  }

  showCatNome(id) {
    let cat = this.categoriaService.getById(id);
    return cat ? cat['nome'] : '';
  }

  deleteItem(id) {
    this.apartamentoService.delete(id);
    setTimeout(() => {
      this.getAll();
    }, 500);
  }

  openDialog(item?): void {
    let obj = {};
    if (item) {
      obj = {
        id: item.id,
        localizador: item['localizador'],
        idCategoria: this.categoriaService.getById(item['idCategoria'])
      };
    }
    const dialogRef = this.dialog.open(DialogApartamentoComponent, { data: (item ? obj : null) });
    dialogRef.afterClosed().subscribe(result => {
      this.getAll();
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 2000,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
