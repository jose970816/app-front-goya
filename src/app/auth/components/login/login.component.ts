import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /*username = new FormControl('');
  password = new FormControl('');*/
  constructor(
    private router: Router
    ) { }

  iniciarSesion(){
      this.router.navigate(['pages/dashboard']);
  }

}
