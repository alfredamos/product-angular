import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthApiResponse } from 'src/models/auth/auth-api-response.model';
import { UserType } from 'src/models/auth/user-type.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isAdmin!: boolean;
  isLoggedIn!: boolean;

  authUser$ = this.authService.authUser$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authUser$.subscribe(auth => {
      console.log({auth});
      this.isLoggedIn = auth?.isLoggedIn;
      this.isAdmin = auth.userType === UserType.Admin;
    })
  }
}
