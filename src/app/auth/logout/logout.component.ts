import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router){}

  logout(value: boolean){
    if (value){
      console.log("In the right place, value : ", value);

      this.authService.logoutAuthUser();
      this.router.navigate(["/"]);
    }else{
      console.log('In the wrong place, value : ', value);
      this.router.navigate(["/products"])
    }
  }

  backToLastPage(){
    this.router.navigate(["/products"])
  }
}
