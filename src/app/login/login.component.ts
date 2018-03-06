import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute,  Router} from '@angular/router';
import {NoteService} from '../note.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  typeUser : string;
  user = [];   
  email : any;
  password : any;
  error: any = null;
  
  selectedUser : any = null;
  private sub: any;
  infoUser :any=null;    
  
  constructor(private loginService : NoteService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  login(){
      this.selectedUser=<HTMLSelectElement>document.getElementById("type");
      this.email=<HTMLSelectElement>document.getElementById("email");
      this.password=<HTMLSelectElement>document.getElementById("password");
      console.log("Test login", this.email.value,this.password.value);
      if(this.selectedUser.value==="Eleve")
      {
        this.loginService.loginEleve(this.email.value,this.password.value).subscribe(responseLoginEleve => {
          this.infoUser = responseLoginEleve
          if(this.infoUser[0].isConnected)
          {
            this.router.navigate(['/consultation']);     
          }
          else{
            this.error = {
              title: 'Email ou mot de passe incorrecte',
              text: 'Recommencer'
          }
          console.log("infoUser Eleve ",this.infoUser);        
          
        }
        });
      }
      /**
       * Si l'utilisateur est un pilote
       */
      if(this.selectedUser.value==="Pilote")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve =>{ 
          this.infoUser = responseLoginEleve
          
          if(this.infoUser[0].isConnected)
          {
            this.router.navigate(['/consultationPilote']);
          }
          else{
            this.error = {
              title: 'Email ou mot de passe incorrecte',
              text: 'Recommencer'
           }
        }
          });  
        console.log("infoUser Pilote ",this.infoUser);
      }
      if(this.selectedUser.value==="Intervenant")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve => 
          {
            
            this.infoUser = responseLoginEleve
            if(this.infoUser[0].isConnected)
            {
              this.router.navigate(['/consultationIntervenant']);
            }
            else{
              this.error = {
                title: 'Email ou mot de passe incorrecte',
                text: 'Recommencer'
              }
            }
          });  
        console.log("infoUser Intervenant",this.infoUser);
        
        
      }
  }
  

}
