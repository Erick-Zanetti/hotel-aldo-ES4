import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {

  }

  logar() {
    let value = this.form.value;
    if (value['user'] === '1' && value['password'] === '1') {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['./']);
      this.snack.open('Login efetuado com sucesso', 'X');
    } else {
      this.snack.open('Usuário ou senha incorretos!', 'X');
    }
  }

}
