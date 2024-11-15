import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { LoginDTO } from 'src/app/models/loginDTO';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verify: LoginDTO = {
    username: '',
    password: ''
  }

  login = new FormControl(null, [Validators.minLength(10), Validators.maxLength(20)])
  senha = new FormControl(null, Validators.minLength(8))

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validaLogin():boolean {
    return (this.login.valid && this.senha.valid)
  }

  logar() {
    this.service.autenticate(this.verify).subscribe(response => {
      this.service.successfullLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate(['']);

    }, () => {
      this.toast.error('Usuário e/ou senha inválidos')
    });
  }

}
