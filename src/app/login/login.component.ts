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
  error = false;
  
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
      /**
       * Si l'utilisateur est un eleve
       */
      if(this.selectedUser.value==="Eleve")
      {
        this.loginService.loginEleve(this.email.value,this.password.value).subscribe(responseLoginEleve => 
          {
            this.infoUser = responseLoginEleve
            console.log("test 38 : ",this.error);
            

            console.log("test infoUser",this.infoUser);
            if(this.infoUser.isConnected==="true"){
                //Redirection vers la page de consultation des notes pour l'utilisateur eleve 
                this.router.navigate(['/consultation',this.infoUser.idEleve]); 
                console.log("test 45 : ",this.error);
                
              }
            else{
              this.error = true;              
              console.log("infoUser Eleve 50 ",this.infoUser);         
            }
         });
      }
      /**
       * Si l'utilisateur est un pilote
       */
      if(this.selectedUser.value==="Pilote")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve =>
          { 
            this.infoUser = responseLoginEleve
            
            if(this.infoUser.isConnected==="true"){
              //Redirection vers la page de consultation des notes pour l'utilisateur pilote 
              this.router.navigate(['/consultationPilote']);
              
            }
            else{
              this.error = true;
              console.log("test 70 : ",this.error);
            }
          });  
          console.log("test 72 : ",this.error);
        }
      /**
       * Si l'utilisateur est un intervenant
       */
      if(this.selectedUser.value==="Intervenant")
      {
        this.loginService.loginEleve(this.email,this.password).subscribe(responseLoginEleve => 
          {
            this.infoUser = responseLoginEleve
            if(this.infoUser.isConnected==="true"){
              //Redirection vers la page de consultation des notes pour l'utilisateur intervenant 
              this.router.navigate(['/consultationIntervenant',this.infoUser.idIntervenant]);
            }
            else{
              this.error = true;              
            }
          });  
        console.log("infoUser Intervenant",this.infoUser);       
      }
  }
}
