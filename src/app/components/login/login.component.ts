import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { LoginDTO } from 'src/app/models/loginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verify: LoginDTO = {
    login: '',
    senha: ''
  }

  login = new FormControl(null, [Validators.minLength(10), Validators.maxLength(20)])
  senha = new FormControl(null, Validators.minLength(8))

  constructor(private toast: ToastrService ) { }

  ngOnInit() {
  }

  validaLogin():boolean {
    return (this.login.valid && this.senha.valid)
  }

  logar() {
    this.toast.error('usuario e/ou senh invalidos!', 'Login');
    this.verify.login = '';
    this.verify.senha = '';
  }

}
