import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var personneEmail = e.target.elements[0].value;
    var personneMotDePasse = e.target.elements[0].value;
    console.log(personneEmail, personneMotDePasse);

    
    return false;
  }

}
