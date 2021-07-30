import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
    </p>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.usuario, this.senha);
  }

}
