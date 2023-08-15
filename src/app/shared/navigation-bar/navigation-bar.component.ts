import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  //authUser$ = Observable<AuthApiResponse>
  authUser$ = this.authService.authUser$;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authUser$.subscribe(auth => {
      console.log({auth});
      
    })
  }
}
