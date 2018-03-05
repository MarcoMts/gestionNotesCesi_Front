import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NoteService} from '../note.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  typeUser : string;
  user = [];   
  email : string;
  password : string;
  error: any = null;
  
  
  constructor(private loginService : NoteService,private router: Router) { }

  ngOnInit() {
    this.loginService.getUser(this.email, this.password).subscribe(responseUser => this.user = responseUser);  
    console.log(this.user);
  }
  login(){
    console.log(this.user);
    
    this.loginService.getUser(this.email, this.password).subscribe(responseUser => this.user = responseUser);  
    if(this.email === this.user[0].email && this.password === this.user[0].password )
    {
      if(this.user[0].type=="pilote")
      {
        this.router.navigate(['/consultationPilote']);
        
      }
      else  if(this.user[0].type=="eleve"){
        this.router.navigate(['/consultation']);
        
      }
      else  if(this.user[0].type=="intervenant"){
        this.router.navigate(['/consultationPilote']);
        
      }
    }
    else{
      this.error = {
        title: 'Identifiant ou mot de passe incorrecte',
        text: 'Recommencer'
      };
    }
    
  }

}
