import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  nome: FormControl = new FormControl(null, [Validators.minLength(3), Validators.maxLength(50)]);
  cpf: FormControl = new FormControl(null, [Validators.required]);
  rg: FormControl = new FormControl(null, [Validators.minLength(5)]);
  telefone: FormControl = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.rg.valid && this.telefone.valid;
  }

}
