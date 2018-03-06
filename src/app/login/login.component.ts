import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute,  Router} from '@angular/router';
import {NoteService} from '../note.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


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
  
  selectedUser : any = null;
  private sub: any;
  infoUser = [];    
  
  constructor(private loginService : NoteService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   /* this.loginService.getUser(this.email, this.password).subscribe(responseUser => this.user = responseUser);  
    this.loginService.getUser(this.em /*

      if(this.email === this.user[0].email && this.password === this.user[0].password )
      {
      }
      else{
        this.error = {
          title: 'Identifiant ou mot de passe incorrecte',
          text: 'Recommencer'
        };

      }ail, this.password).subscribe(responseUser => this.user = responseUser);  
    this.activatedRoute.params.subscribe((params: Params) => {
      this.optradio = params['optradio'];
      console.log(this.optradio);
      console.log( params['optradio']);
          this.optradio=this.activatedRoute.snapshot.queryParams["optradio"];      

    });*/      
  }
  login(){
      this.selectedUser=<HTMLSelectElement>document.getElementById("type");
      this.selectedUser=<HTMLSelectElement>document.getElementById("type");
      this.selectedUser=<HTMLSelectElement>document.getElementById("type");
      

      if(this.selectedUser.value==="Eleve")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve => this.infoUser = responseLoginEleve);  
        console.log("infoUser Eleve ",this.infoUser);
        
       /* if(this.infoUser[0].isConnected)
        {
          this.router.navigate(['/consultation']);     
        }
        else{
          this.error = {
            title: 'Email ou mot de passe incorrecte',
            text: 'Recommencer'
        }*/
      }
      if(this.selectedUser.value==="Pilote")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve => this.infoUser = responseLoginEleve);  
        console.log("infoUser Pilote ",this.infoUser);
        
       /* if(this.infoUser[0].isConnected)
        {
          this.router.navigate(['/consultationPilote']);
        }
        else{
          this.error = {
            title: 'Email ou mot de passe incorrecte',
            text: 'Recommencer'
        }*/
      }
      if(this.selectedUser.value==="Intervenant")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve => this.infoUser = responseLoginEleve);  
        console.log("infoUser Intervenant",this.infoUser);
        /*
        if(this.infoUser[0].isConnected)
        {
          this.router.navigate(['/consultationIntervenant']);
        }
        else{
          this.error = {
            title: 'Email ou mot de passe incorrecte',
            text: 'Recommencer'
        }*/
      }
  }
  

}
