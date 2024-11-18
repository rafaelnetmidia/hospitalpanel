import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario = {
      name: '',
      cpf: '',
      rg: '',
      telephone: '',
      idPosition: ''
  }

  nome: FormControl = new FormControl(null, [Validators.minLength(3), Validators.maxLength(50)]);
  cpf: FormControl = new FormControl(null, [Validators.required]);
  rg: FormControl = new FormControl(null, [Validators.minLength(5)]);
  telefone: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private service: FuncionarioService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.rg.valid && this.telefone.valid;
  }

  selectedProfile: number | null = null; // Armazena o ID do perfil selecionado

  addPerfil(perfil: number): void {
    if (this.selectedProfile === perfil) {
      // Se o perfil já está selecionado, desmarca
      this.selectedProfile = null;
      this.funcionario.idPosition = '';
    } else {
      // Marca o novo perfil e atualiza o funcionário
      this.selectedProfile = perfil;
      this.funcionario.idPosition = perfil.toString();
    }
    console.log('Perfil selecionado:', this.funcionario.idPosition);
  }

  create(): void {
    this.service.create(this.funcionario).subscribe(
      response => {
        this.toast.success('Funcionário cadastrado com sucesso!', 'Cadastro');
        this.router.navigate(['funcionarios']);
      }, 
      exception => {
        if (exception.status === 500) {
          this.toast.error(exception.error.error, 'Servidor');
        } else if(exception.error.errors) {
          exception.error.errors.forEach(element => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(exception.error.message);
        }
      }
    )
  }

}
