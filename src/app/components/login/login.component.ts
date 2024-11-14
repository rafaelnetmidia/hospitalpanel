import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  login = new FormControl(null, Validators.minLength(10))
  senha = new FormControl(null, Validators.minLength(8))

  constructor() { }

  ngOnInit() {
  }

  validaLogin():boolean {
    return (this.login.valid && this.senha.valid)
  }

}
