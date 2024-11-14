import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  ELEMENT_DATA: Funcionario [] = [
    {
      id: 1,
      nome: 'Rafael Lima de Araujo',
      cpf: '123.456.789-10',
      email: 'rafael@gmail.com'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acao'];
  dataSource = new MatTableDataSource<Funcionario>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
