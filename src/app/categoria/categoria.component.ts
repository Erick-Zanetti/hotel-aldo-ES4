import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { DialogCategoriaComponent } from './dialogCategoria/dialogCategoria.component';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  entryComponents: [DialogCategoriaComponent],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog, private categoriaService: CategoriaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this.dataSource.data = this.categoriaService.getAll();
  }

  deleteItem(id) {
    this.categoriaService.delete(id);
    setTimeout(() => {
      this.getAll();
    }, 500);
  }

  openDialog(item?): void {
    const dialogRef = this.dialog.open(DialogCategoriaComponent, { data: (item ? item : null) });
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
